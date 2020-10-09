from dotenv import load_dotenv
from app import app, db
from app.models import User
load_dotenv()

with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='Demo', email='demo@demo.com', password='password',
                avatar_id=1)
    ian = User(username='Ian', email='ian@aa.io', password='password',
               avatar_id=1)
    javier = User(username='Javier', email='javier@aa.io', password='password',
                  avatar_id=1)
    dean = User(username='Dean', email='dean@aa.io', password='password',
                avatar_id=1)
    angela = User(username='Angela', email='angela@aa.io', password='password',
                  avatar_id=1)
    alissa = User(username='Alissa', email='alissa@aa.io', password='password',
                  avatar_id=1)

    db.session.add(demo)
    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(alissa)

    avatar1 = Avatar(avatar_url='https://images.unsplash.com/photo-1576515652031-fc429bab6503?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=75')  # noqa
    avatar2 = Avatar(avatar_url='https://images.unsplash.com/photo-1566574347516-47cf9fb86734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=75&q=60')  # noqa
    avatar3 = Avatar(avatar_url='https://images.unsplash.com/photo-1563823251941-b9989d1e8d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=75&q=60')  # noqa

    db.session.add(avatar1)
    db.session.add(avatar2)
    db.session.add(avatar3)

    db.session.commit()
