from app.utils.email import send_enquiry_email

send_enquiry_email({
    "tour_title": "testing mail",
    "full_name": "ashutosh",
    "phone": "8765451884",
    "email": "ashutoshkalash03@gmail.com",
    "travelers": 2,
    "preferred_dates": "7–10 Jan"
})

print("Email sent successfully")
