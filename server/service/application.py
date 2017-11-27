from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import MySQLConfig

db = SQLAlchemy()

def create_app(**config_overrides):
    app = Flask(__name__)

    # Load config
    app.config.from_object(MySQLConfig)

    # apply overrides for tests
    app.config.update(config_overrides)

    # setup db
    db.init_app(app)

    # import blueprints
    from auth.views import auth_app

    # register blueprints
    app.register_blueprint(auth_app)

    return app
