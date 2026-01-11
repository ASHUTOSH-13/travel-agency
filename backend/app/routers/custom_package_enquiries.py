from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models import CustomPackageEnquiry
from app.schemas import CustomPackageEnquiryCreate
from app.utils.email import send_custom_package_email  # we’ll add this

router = APIRouter(prefix="/api", tags=["Custom Package Enquiries"])


@router.post("/custom-package-enquiries")
def create_custom_package_enquiry(
    payload: CustomPackageEnquiryCreate,
    db: Session = Depends(get_db),
):
    enquiry = CustomPackageEnquiry(
        full_name=payload.full_name,
        email=payload.email,
        phone=payload.phone,
        destination=payload.destination,
        budget=payload.budget,
        travel_dates=payload.travel_dates,
        travelers=payload.travelers,
        message=payload.message,
    )

    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)

    # 📧 Email (admin + optional user)
    try:
        send_custom_package_email(payload.dict())
    except Exception as e:
        print("Email error:", e)

    return {
        "message": "Custom package request submitted successfully",
        "id": enquiry.id,
    }
