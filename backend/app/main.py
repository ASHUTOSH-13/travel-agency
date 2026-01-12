from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv


# Load environment variables FIRST
load_dotenv()

app = FastAPI(title="Travel Agency API")

# ✅ CORS MIDDLEWARE (MUST COME BEFORE ROUTERS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://lets-go-buddy-frontend.onrender.com",
        "https://travel-agency-uq8b.onrender.com",
        "https://letsgobuddytravels.vercel.app",
        "https://letsgobuddytravels.com",
        "https://www.letsgobuddytravels.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import routers AFTER middleware
from app.routers import tours, enquiries
from app.routers import admin_auth
from app.routers import custom_package_enquiries


app.include_router(tours.router, prefix="/api", tags=["tours"])
app.include_router(enquiries.router, prefix="/api", tags=["enquiries"])
app.include_router(admin_auth.router, prefix="/api", tags=["admin"])
app.include_router(custom_package_enquiries.router)


@app.get("/health")
def health():
    return {"status": "ok"}
