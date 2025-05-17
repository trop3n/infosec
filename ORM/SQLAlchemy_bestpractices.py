from sqlalchemy.orm import sessionmaker
Session = sessionmaker(bind=engine)
session = Session()
user = session.query(User).filter_by(username=username).first()