from sqlalchemy import Column, Integer, String, Numeric, Boolean, ForeignKey, Text
from app.core.database import Base
from sqlalchemy import DateTime
from datetime import datetime

class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True)
    slug = Column(String, unique=True)
    name = Column(String)

class Destination(Base):
    __tablename__ = "destinations"
    id = Column(Integer, primary_key=True)
    slug = Column(String, unique=True)
    name = Column(String)
    category_id = Column(Integer, ForeignKey("categories.id"))

class Tour(Base):
    __tablename__ = "tours"
    id = Column(Integer, primary_key=True)
    slug = Column(String, unique=True)
    title = Column(String)
    short_description = Column(Text)
    base_price = Column(Numeric(10,2))
    destination_id = Column(Integer, ForeignKey("destinations.id"))
    is_featured = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)

class TourGalleryImage(Base):
    __tablename__ = "tour_gallery_images"
    id = Column(Integer, primary_key=True)
    tour_id = Column(Integer, ForeignKey("tours.id"))
    image_url = Column(String)
    is_hero = Column(Boolean, default=False)

class TourItinerary(Base):
    __tablename__ = "tour_itineraries"
    id = Column(Integer, primary_key=True)
    tour_id = Column(Integer, ForeignKey("tours.id"))
    day_number = Column(Integer)
    title = Column(String)
    description = Column(Text)

class TourInclusion(Base):
    __tablename__ = "tour_inclusions"
    id = Column(Integer, primary_key=True)
    tour_id = Column(Integer, ForeignKey("tours.id"))
    text = Column(Text)

class TourExclusion(Base):
    __tablename__ = "tour_exclusions"
    id = Column(Integer, primary_key=True)
    tour_id = Column(Integer, ForeignKey("tours.id"))
    text = Column(Text)

class Enquiry(Base):
    __tablename__ = "enquiries"
    id = Column(Integer, primary_key=True)
    tour_id = Column(Integer, ForeignKey("tours.id"))
    full_name = Column(String)
    phone = Column(String)
    email = Column(String)
    travelers = Column(Integer)
    preferred_dates = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
