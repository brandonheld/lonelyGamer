from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }


class Avatar(db.Model):
    __tablename__ = 'avatars'
    id = db.Column(db.Integer, primary_key=True)
    avatar_url = db.Column(db.String(), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "avatar_url": self.avatar_url
        }


class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    game_title = db.Column(db.String(255), nullable=False)
    is_fps = db.Column(db.Boolean, default=False)
    is_rpg = db.Column(db.Boolean, default=False)
    is_mmo = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "game_title": self.game_title,
            "is_fps": self.is_fps,
            "is_rpg": self.is_rpg,
            "is_mmo": self.is_mmo
        }


class Profile(db.Model):
    __tablename__ = 'profiles'

    id = db.Column(db.Integer, primary_key=True)
    games_played = db.Column(db.Text)
    platform = db.Column(db.Text, nullable=False)
    des = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    avatar_id = db.Column(db.Integer, db.ForeignKey('avatars.id'),
                          nullable=False)

    user = db.relationship("User", foreign_keys=[user_id])
    avatar = db.relationship("Avatar", foreign_keys=[avatar_id])

    def to_dict(self):
        return {
            "id": self.id,
            "games_played": self.games_played,
            "platform": self.platform,
            "des": self.des,
            "user_id": self.user_id,
            "avatar_id": self.avatar_id
        }
