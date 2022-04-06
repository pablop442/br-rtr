from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Beer
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify(all_users), 200

@api.route('/user/<int:id>', methods=['GET'])
def get_one_user(id):
    user_x = User.query.get(id)
    if user_x is None:
        return 'User not found', 404
    else:
        return jsonify(user_x.serialize()), 200

@api.route('/user', methods=['POST'])
def create_user():

    name, last_name, email, password = request.json.get(
        "name", None
    ), request.json.get (
        "last_name", None
    ), request.json.get (
        "email", None
    ), request.json.get (
        "password", None
    )

    passwordHashed = generate_password_hash(password)
    new_user = User(name = name, last_name = last_name, email = email, password = passwordHashed )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201