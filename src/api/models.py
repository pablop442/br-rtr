from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(1000), unique=False, nullable=False)
    beers = db.relationship('Beer')
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name" : self.name,
            "last_name": self.last_name
        }

class Beer(db.Model):
    __tablename__ = 'beer'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    location = db.Column(db.String(300), unique=False, nullable=False)
    date = db.Column(db.DateTime(120), unique=True, nullable=False)
    rate = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)
    reviewer_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user= db.relationship('User')
    

    def __repr__(self):
        return f'<Beer {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "location" : self.location,
            "date": self.date,
            "rate": self.rate,
            "description": self.description,
            "reviewer_id": self.reviewer_id,
        }