from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False,
                            default='Time to show off! Tell us what your all about!')  # noqa
    avatar_id = db.Column(db.Integer, db.ForeignKey('avatars.id'),
                          nullable=False, default=1)

    avatar = db.relationship("Avatar", foreign_keys=[avatar_id])

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
            "description": self.description,
            "email": self.email,
            "avatar_id": self.avatar_id
        }


class Avatar(db.Model):
    __tablename__ = 'avatars'
    id = db.Column(db.Integer, primary_key=True)
    avatar_url = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "avatar_url": self.avatar_url
        }


class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    game_title = db.Column(db.String(255), nullable=False)
    platform = db.Column(db.String(255), nullable=False)
    is_fps = db.Column(db.Boolean, default=False)
    is_rpg = db.Column(db.Boolean, default=False)
    is_mmo = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "game_title": self.game_title,
            "platform": self.platform,
            "is_fps": self.is_fps,
            "is_rpg": self.is_rpg,
            "is_mmo": self.is_mmo
        }
