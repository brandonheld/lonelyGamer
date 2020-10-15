from dotenv import load_dotenv
from app import app, db
from app.models import User
load_dotenv()

with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='Cosmic', email='demo@demo.com', password='password')
    ian = User(username='Ian', email='ian@aa.io', password='password')
    javier = User(username='Javier', email='javier@aa.io', password='password')
    dean = User(username='Dean', email='dean@aa.io', password='password')
    ed = User(username='Ed', email='ed@aa.io', password='password')
    justin = User(username='Justin', email='justin@aa.io', password='password')

    db.session.add(demo)
    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(ed)
    db.session.add(justin)

    db.session.commit()
