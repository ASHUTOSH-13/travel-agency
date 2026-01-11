from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from app.core.database import get_db
from app.models import Enquiry, Tour
from app.schemas import EnquiryCreate
from app.utils.email import send_enquiry_email
from app.dependencies.admin_auth import require_admin

router = APIRouter()


# =====================================================
# CREATE ENQUIRY (PUBLIC)
# =====================================================
@router.post("/enquiries")
def create_enquiry(
    payload: EnquiryCreate,
    db: Session = Depends(get_db),
):
    # 1️⃣ Validate tour exists
    tour = db.query(Tour).filter(Tour.id == payload.tour_id).first()
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")

    # 2️⃣ Save enquiry in DB
    enquiry = Enquiry(
        tour_id=payload.tour_id,
        full_name=payload.full_name,
        phone=payload.phone,
        email=payload.email,
        travelers=payload.travelers,
        preferred_dates=payload.preferred_dates,
        created_at=datetime.utcnow(),
    )

    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)

    # 3️⃣ Send email to admin (non-blocking)
    try:
        send_enquiry_email(
            {
                "full_name": payload.full_name,
                "phone": payload.phone,
                "email": payload.email,
                "travelers": payload.travelers,
                "preferred_dates": payload.preferred_dates,
                "tour_title": tour.title,
                "tour_price": float(tour.base_price),
            }
        )
    except Exception as e:
        # DB save should NOT fail if email fails
        print("Email error:", e)

    # 4️⃣ Success response
    return {
        "message": "Enquiry submitted successfully",
        "enquiry_id": enquiry.id,
    }


# =====================================================
# ADMIN: LIST ALL ENQUIRIES
# =====================================================
@router.get("/admin/enquiries", dependencies=[Depends(require_admin)])
def list_all_enquiries(db: Session = Depends(get_db)):
    enquiries = (
        db.query(Enquiry, Tour.title)
        .join(Tour, Tour.id == Enquiry.tour_id)
        .order_by(Enquiry.id.desc())
        .all()
    )

    return [
        {
            "id": enquiry.id,
            "full_name": enquiry.full_name,
            "phone": enquiry.phone,
            "email": enquiry.email,
            "travelers": enquiry.travelers,
            "preferred_dates": enquiry.preferred_dates,
            "tour_title": tour_title,
            "created_at": enquiry.created_at,
        }
        for enquiry, tour_title in enquiries
    ]
