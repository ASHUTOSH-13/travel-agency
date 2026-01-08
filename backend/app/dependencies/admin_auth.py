from fastapi import Request, HTTPException, status

def require_admin(request: Request):
    print("INCOMING COOKIES:", request.cookies)

    if request.cookies.get("admin_auth") != "authenticated":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Admin authentication required",
        )
