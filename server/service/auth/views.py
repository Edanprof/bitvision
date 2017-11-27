from flask import Blueprint
from auth.api import CreateUserAPI, GetTokenAPI

auth_app = Blueprint('auth_app', __name__)

create_user_view = CreateUserAPI.as_view('create_user_api')
auth_app.add_url_rule('/auth/create_user/', view_func=create_user_view, methods=['POST',])

get_token_view = GetTokenAPI.as_view('get_token_api')
auth_app.add_url_rule('/auth/get_token/', view_func=get_token_view, methods=['POST',])
