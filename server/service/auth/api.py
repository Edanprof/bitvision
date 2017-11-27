from flask.views import MethodView
from flask import request, abort, jsonify
from application import db
import bcrypt
import uuid
from datetime import datetime, timedelta
from models.user import User
from models.access import Access


class CreateUserAPI(MethodView):

    def __init__(self):
        if not request.json:
            abort(400)

    def post(self):
        if not "email" in request.json or not "password" in request.json:
            error = {
                "code": "MISSING_EMAIL_OR_PASSWORD"
            }
            return jsonify({'error': error}), 400

        existing_user = User.query.filter_by(email=request.json.get('email')).first()
        if existing_user:
            error = {
                "code": "EMAIL_ALREADY_EXISTS"
            }
            return jsonify({"error": error}), 400
        else:
            salt = bcrypt.gensalt()
            hashed_password = bcrypt.hashpw(request.json.get('password'), salt)
            user = User(
                email=request.json.get('email'),
                password=hashed_password
            )
            db.session.add(user)
            db.session.commit()
            return jsonify({'result': 'ok'}), 200


class GetTokenAPI(MethodView):

    def __init__(self):
        if not request.json:
            abort(400)

    def post(self):
        if not "email" in request.json or not "password" in request.json:
            error = {
                "code": "MISSING_EMAIL_OR_PASSWORD"
            }
            return jsonify({'error': error}), 400

        user = User.query.filter_by(email=request.json.get('email')).first()
        if not user:
            error = {
                "code": "INCORRECT_CREDENTIALS"
            }
            return jsoinfy({'error': error}), 403
        else:
            # generate a token
            if bcrypt.checkpw(request.json.get('password'), user.password):
                email = user.email
                token = str(uuid.uuid4())
                now = datetime.utcnow().replace(second=0, microsecond=0)
                expires = now + timedelta(days=1)

                existing_access = Access.query.filter_by(email=user.email).first()
                if existing_access:
                    existing_access.email = email
                    existing_access.token = token
                    existing_access.expires = expires
                else :
                    access = Access(
                        email=email,
                        token=token,
                        expires=expires
                    )
                    db.session.add(access)
                db.session.commit()
                expires_3339 = expires.isoformat("T") + "Z"
                return jsonify({'token': token, 'expires': expires_3339}), 200
            else:
                error = {
                    "code": "INCORRECT_CREDENTIALS"
                }
                return jsonify({'error': error}), 403
