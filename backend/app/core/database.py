from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from urllib.parse import quote_plus

raw_url = os.getenv("DATABASE_URL")
if raw_url and "?pgbouncer=true" in raw_url:
    raw_url = raw_url.split("?")[0]  # Remove pgbouncer

DATABASE_URL = raw_url or "sqlite:///./test.db"  # Fallback
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
