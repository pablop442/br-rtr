from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Beer
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


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

    password_hashed = generate_password_hash(password)
    new_user = User(name = name, last_name = last_name, email = email, password = password_hashed )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user_x = User.query.get(id)
    if user_x is None:
        return 'User not found', 404
    else:
        db.session.delete(user_x)
        db.session.commit()
        return jsonify("User deleted"), 200

@api.route('/beers', methods=['GET'])
def get_beers():
    beers = Beer.query.all()
    all_beers = list(map(lambda x: x.serialize(), beers))
    return jsonify(all_beers), 200

@api.route('/beers', methods=['POST'])
@jwt_required()
def create_beer():
    user_id = get_jwt_identity()
    print(user_id)
    name, location, date, rate, description = request.json.get(
        "name", None
    ), request.json.get(
        "location", None
    ), request.json.get(
        "date", None
    ), request.json.get(
        "rate", None
    ), request.json.get(
        "description", None
    )
    
    new_beer = Beer(name= name, location= location, date= date, rate= rate, description= description)
    db.session.add(new_beer)
    db.session.commit()
    return jsonify(new_beer.serialize()), 201

@api.route('/beers/<int:id>', methods=['GET'])
def get_one_beer(id):
    beer_x = Beer.query.get(id)
    if beer_x is None:
        return 'That beer is not in database', 404
    else:
        return jsonify(beer.serialize()), 200

@api.route('/beers/<int:id>', methods=['DELETE'])
def delete_beer(id):
    beer_x = Beer.query.get(id)
    if beer_x is None:
        return 'That beer is not in database', 404
    else:
        db.session.delete(beer_x)
        db.session.commit()
        return jsonify("Beer deleted"), 200

@api.route('/beer-of-user', methods=['GET'])
@jwt_required()
def get_user_beer():
    user_id = get_jwt_identity()
    print('user token', user_id)
    list_beer = db.session.query(Beer).filter(Beer.reviewer_id == user_id)
    # if len(list_beer) == 0:
    #     return jsonify([]), 200
    list_beer_json = []
    for beer in list_beer:
        list_beer_json.append(beer.serialize())
    return jsonify(list_beer_json), 200

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
# Getting plain password from database
    password = request.json.get("password", None)
#Getting the first user that matches the email in DB
    user = User.query.filter_by(email=email).first()
#Verifiyng the plain password and hashed password. The function returns a boolean
    verified_password = check_password_hash(user.password, password)
    if user != None and  verified_password:
        user_json = user.serialize()
        access_token = create_access_token(identity= user.id)
        return jsonify({"token": access_token, "user": user_json })
    else:
        return jsonify({"msg": "Bad email or password"}), 401