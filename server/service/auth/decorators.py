from functools import wraps
from flask import request, jsonify
import datetime

from models.user import User
from models.access import Access

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        email = request.headers.get('X-USER-EMAIL')
        token = request.headers.get('X-USER-TOKEN')

        if email is None or token is None:
            return jsonify({}), 403

        user = User.query.filter_by(email=email).first()
        if not user:
            return jsonify({}), 403

        access = Access.query.filter_by(email=email).first()
        if not access:
            return jsonify({}), 403
        if access.token != token:
            return jsonify({}), 403
        if access.expires < datetime.datetime.utcnow():
            return jsonify({'error': "TOKEN_EXPIRED"}), 403

        return f(*args, **kwargs)
    return decorated_function
