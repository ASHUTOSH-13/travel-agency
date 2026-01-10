from pydantic import BaseModel
from typing import List, Optional

class TourListResponse(BaseModel):
    id: int
    slug: str
    title: str
    base_price: float
    rating: float | None
    duration_days: int
    duration_nights: int
    min_group_size: int | None
    max_group_size: int | None
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
    rating: float | None
    duration_days: int
    duration_nights: int
    min_group_size: int | None
    max_group_size: int | None
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
