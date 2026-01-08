from fastapi import APIRouter, Response, HTTPException, status
import os

router = APIRouter()

ADMIN_USERNAME = os.getenv("ADMIN_USERNAME")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")


@router.post("/admin/login")
def admin_login(data: dict, response: Response):
    username = data.get("username")
    password = data.get("password")
    print("LOGIN ATTEMPT:", username, password)

    if username != ADMIN_USERNAME or password != ADMIN_PASSWORD:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
        )

    response.set_cookie(
        key="admin_auth",
        value="authenticated",
        httponly=True,
        samesite="none",
        path="/",
        max_age=60 * 60 * 8,  # 8 hours
    )
    print("COOKIE SET: admin_auth=authenticated")
    return {"message": "Login successful"}


@router.post("${API_BASE_URL}/admin/logout")
def admin_logout(response: Response):
    response.delete_cookie("admin_auth")
    return {"message": "Logged out"}
