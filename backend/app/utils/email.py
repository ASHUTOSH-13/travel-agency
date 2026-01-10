import os
import smtplib
from email.message import EmailMessage
from xmlrpc import server
from dotenv import load_dotenv
import ssl
load_dotenv()

EMAIL_HOST = os.getenv("EMAIL_HOST")
EMAIL_PORT = int(os.getenv("EMAIL_PORT"))
EMAIL_USERNAME = os.getenv("EMAIL_USERNAME")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")


def enquiry_email_html(data: dict) -> str:
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Tour Enquiry</title>
    </head>
    <body style="margin:0;padding:0;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:40px 10px;">
            <table width="600" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.15);">

              <!-- HEADER -->
              <tr>
                <td style="background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);color:#ffffff;padding:32px 30px;position:relative;">
                  <div style="display:inline-block;background:rgba(255,255,255,0.2);padding:8px 16px;border-radius:20px;margin-bottom:12px;font-size:11px;font-weight:600;letter-spacing:0.5px;">
                    🔔 NEW ENQUIRY
                  </div>
                  <h1 style="margin:0;font-size:26px;font-weight:700;letter-spacing:-0.5px;">Lets Go Buddy Travels</h1>
                  <p style="margin:8px 0 0;font-size:14px;opacity:0.95;font-weight:400;">
                    A new tour enquiry has been received
                  </p>
                </td>
              </tr>

              <!-- TOUR INFO -->
              <tr>
                <td style="padding:28px 30px;background:linear-gradient(to right, #f0fdf4, #dcfce7);border-left:4px solid #16a34a;">
                  <h2 style="margin:0 0 10px;font-size:22px;color:#111827;font-weight:700;line-height:1.3;">
                    {data['tour_title']}
                  </h2>
                  <p style="margin:0;font-size:18px;color:#16a34a;font-weight:700;">
                    ₹{data['tour_price']}
                  </p>
                </td>
              </tr>

              <!-- CUSTOMER DETAILS -->
              <tr>
                <td style="padding:32px 30px;">
                  <h3 style="margin:0 0 20px;font-size:16px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                    Customer Details
                  </h3>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #f3f4f6;">
                        <table width="100%">
                          <tr>
                            <td width="35%" style="color:#6b7280;font-size:14px;font-weight:500;">👤 Name</td>
                            <td style="font-weight:600;color:#111827;font-size:15px;">{data['full_name']}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #f3f4f6;">
                        <table width="100%">
                          <tr>
                            <td width="35%" style="color:#6b7280;font-size:14px;font-weight:500;">📞 Phone</td>
                            <td>
                              <a href="tel:{data['phone']}" style="color:#2563eb;text-decoration:none;font-weight:600;font-size:15px;">
                                {data['phone']}
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #f3f4f6;">
                        <table width="100%">
                          <tr>
                            <td width="35%" style="color:#6b7280;font-size:14px;font-weight:500;">✉️ Email</td>
                            <td>
                              <a href="mailto:{data['email']}" style="color:#2563eb;text-decoration:none;font-weight:600;font-size:15px;">
                                {data['email']}
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #f3f4f6;">
                        <table width="100%">
                          <tr>
                            <td width="35%" style="color:#6b7280;font-size:14px;font-weight:500;">👥 Travellers</td>
                            <td style="font-weight:600;color:#111827;font-size:15px;">{data['travelers']}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 0;">
                        <table width="100%">
                          <tr>
                            <td width="35%" style="color:#6b7280;font-size:14px;font-weight:500;">📅 Preferred Dates</td>
                            <td style="font-weight:600;color:#111827;font-size:15px;">{data['preferred_dates']}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="background:#f9fafb;padding:24px 30px;text-align:center;font-size:13px;color:#6b7280;line-height:1.6;">
                  This enquiry was submitted from your website.<br/>
                  <span style="color:#9ca3af;">© 2026 Lets Go Buddy Travels. All rights reserved.</span>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    """


def send_enquiry_email(enquiry: dict):
   msg = EmailMessage() 
   msg["Subject"] = f"New Tour Enquiry – {enquiry['tour_title']}" 
   msg["From"] = EMAIL_USERNAME 
   msg["To"] = ADMIN_EMAIL 
   msg.set_content(enquiry_email_html(enquiry), subtype="html") 
   # msg.set_content(f""" #New Tour Enquiry Received #Name: {enquiry['full_name']} #Phone: {enquiry['phone']} #Email: {enquiry['email']} #Travellers: {enquiry['travelers']} #Preferred Dates: {enquiry['preferred_dates']} #Tour: {enquiry['tour_title']} #""") # ✅ SSL SMTP (NO starttls) 
   with smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORT) as server: 
    server.login(EMAIL_USERNAME, EMAIL_PASSWORD) 
    server.send_message(msg)


