from application import db
#from models.user import User

class Access(db.Model):
    email = db.Column(db.String(255), db.ForeignKey('user.email'), primary_key=True, nullable=False)
    user = db.relationship('User', backref=db.backref('access'), lazy=True)
    token = db.Column(db.String(36), unique=True, nullable=False)
    expires = db.Column(db.DateTime, nullable=False)


    def __init__(self, email, token, expires):
        self.email = email
        self.token = token
        self.expires = expires

    def __repr__(self):
        return '<Access %r>' % self.email
