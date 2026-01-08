from pydantic import BaseModel
from typing import List, Optional

class TourListResponse(BaseModel):
    id: int
    slug: str
    title: str
    base_price: float
    hero_image_url: Optional[str]
    gallery_images: list[str]
    destination_slug: str
    destination_name: str
    category_slug: str
    category_name: str
    short_description: str
    is_featured: bool

class TourItineraryDay(BaseModel):
    day_number: int
    title: str
    description: Optional[str]

class TourDetailResponse(BaseModel):
    id: int
    slug: str
    title: str
    base_price: float
    destination_slug: str
    destination_name: str
    category_slug: str
    category_name: str
    gallery_images: List[str]
    itinerary: List[TourItineraryDay]
    inclusions: List[str]
    exclusions: List[str]

class EnquiryCreate(BaseModel):
    full_name: str
    phone: str
    email: str
    travelers: int
    preferred_dates: str
    tour_id: int
