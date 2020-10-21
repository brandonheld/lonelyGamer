from flask import Blueprint, jsonify, session, request
from app.models import User
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/signup', methods=['POST'])
def signup_user():
    user = User(
                username=request.json.get('username', None),
                email=request.json.get('email', None),
                password=request.json.get('password', None)
    )
    db.session.add(user)
    db.session.commit()
    session["user"] = user.to_dict()
    return {"user": user.to_dict()}, 200


@user_routes.route('/update', methods=['PUT'])
def update_user():
    user_id = request.json.get('userId', None)

    user = User.query.filter(User.id == user_id).first()
    user.game_title = request.json.get('nowPlaying', None)
    user.platform = request.json.get('platform', None)
    user.description = request.json.get('description', None)

    db.session.commit()
    session["user"] = user.to_dict()
    return {"user": user.to_dict()}, 200


@user_routes.route('/offline', methods=['PUT'])
def offline_user():
    user_id = request.json.get('id', None)

    user = User.query.filter(User.id == user_id).first()
    user.is_online = False

    db.session.commit()
    return {'msg': 'successfully offline'}, 200


@user_routes.route('/feed')
def user_feed():
    onlineUser = User.query.all()
    return {"feedUsers": [user.to_dict() for user in onlineUser]}
