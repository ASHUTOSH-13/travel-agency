from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models import (
    Tour, Category, Destination,
    TourGalleryImage, TourItinerary,
    TourInclusion, TourExclusion
)
from app.schemas import TourListResponse, TourDetailResponse

router = APIRouter()

# =========================================================
# TOUR LIST API
# =========================================================
@router.get("/tours", response_model=list[TourListResponse])
def get_tours(
    category_slug: str | None = Query(default=None),
    db: Session = Depends(get_db)
):
    query = (
        db.query(Tour, Destination, Category)
        .select_from(Tour)
        .join(Destination, Tour.destination_id == Destination.id)
        .join(Category, Destination.category_id == Category.id)
        .filter(Tour.is_active.is_(True))
    )

    if category_slug:
        query = query.filter(Category.slug == category_slug)

    tours = query.all()

    response = []

    for tour, destination, category in tours:
        # ✅ Fetch up to 4 gallery images for hover slideshow
        gallery_rows = (
            db.query(TourGalleryImage.image_url)
            .filter(TourGalleryImage.tour_id == tour.id)
            .order_by(
                TourGalleryImage.is_hero.desc(),  # hero first if exists
                TourGalleryImage.id.asc()
            )
            .limit(4)
            .all()
        )

        gallery_images = [row[0] for row in gallery_rows]

        hero_image = gallery_images[0] if gallery_images else None

        response.append({
            "id": tour.id,
            "slug": tour.slug,
            "title": tour.title,
            "base_price": float(tour.base_price),
            "rating": tour.rating,
            "duration_days": tour.duration_days,
            "duration_nights": tour.duration_nights,
            "min_group_size": tour.min_group_size,
            "max_group_size": tour.max_group_size,
            "hero_image_url": hero_image,
            "gallery_images": gallery_images,   # ⭐ NEW FIELD
            "destination_slug": destination.slug,
            "destination_name": destination.name,
            "category_slug": category.slug,
            "category_name": category.name,
            "short_description": tour.short_description,
            "is_featured": tour.is_featured
        })

    return response




# =========================================================
# TOUR DETAIL API (OPTION B – FINAL)
# =========================================================
@router.get(
    "/tours/{destination_slug}/{tour_slug}",
    response_model=TourDetailResponse
)
def get_tour_detail(
    destination_slug: str,
    tour_slug: str,
    db: Session = Depends(get_db)
):
    tour = (
        db.query(Tour, Destination, Category)
        .select_from(Tour)
        .join(Destination, Tour.destination_id == Destination.id)
        .join(Category, Destination.category_id == Category.id)
        .filter(
            Tour.slug == tour_slug,
            Destination.slug == destination_slug,
            Tour.is_active.is_(True)
        )
        .first()
    )

    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")

    tour_obj, destination, category = tour

    gallery_images = (
        db.query(TourGalleryImage.image_url)
        .filter(TourGalleryImage.tour_id == tour_obj.id)
        .order_by(TourGalleryImage.is_hero.desc())
        .all()
    )

    itinerary = (
        db.query(TourItinerary)
        .filter(TourItinerary.tour_id == tour_obj.id)
        .order_by(TourItinerary.day_number)
        .all()
    )

    inclusions = (
        db.query(TourInclusion.text)
        .filter(TourInclusion.tour_id == tour_obj.id)
        .all()
    )

    exclusions = (
        db.query(TourExclusion.text)
        .filter(TourExclusion.tour_id == tour_obj.id)
        .all()
    )

    return {
        "id": tour_obj.id,
        "slug": tour_obj.slug,
        "title": tour_obj.title,
        "base_price": float(tour_obj.base_price),
        "rating": tour_obj.rating,
        "duration_days": tour_obj.duration_days,
        "duration_nights": tour_obj.duration_nights,
        "min_group_size": tour_obj.min_group_size,
        "max_group_size": tour_obj.max_group_size,
        "destination_slug": destination.slug,
        "destination_name": destination.name,
        "category_slug": category.slug,
        "category_name": category.name,
        "gallery_images": [img[0] for img in gallery_images],
        "itinerary": [
            {
                "day_number": i.day_number,
                "title": i.title,
                "description": i.description
            } for i in itinerary
        ],
        "inclusions": [i[0] for i in inclusions],
        "exclusions": [e[0] for e in exclusions],
    }
