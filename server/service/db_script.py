from flask_script import Manager
from application import db
manager = Manager(usage="Perform database operations")

@manager.command
def drop():
    "Drops database tables"
    if prompt_bool("Are you sure you want to lose all your data"):
        db.drop_all()

@manager.command
def create(default_data=True, sample_data=False):
    "Creates database tables from sqlalchemy models"
    db.create_all()
    #populate(default_data, sample_data)

@manager.command
def recreate(default_data=True, sample_data=False):
    "Recreates database tables (same as issuing 'drop' and then 'create')"
    drop()
    create(default_data, sample_data)
