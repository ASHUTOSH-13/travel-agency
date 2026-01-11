import os
#import smtplib
#from email.message import EmailMessage
#from xmlrpc import server
from dotenv import load_dotenv
#import ssl
import resend
load_dotenv()

#EMAIL_HOST = os.getenv("EMAIL_HOST")
#EMAIL_PORT = int(os.getenv("EMAIL_PORT"))
#EMAIL_USERNAME = os.getenv("EMAIL_USERNAME")
#EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
#ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")


resend.api_key = os.getenv("RESEND_API_KEY")

SENDER = "LetsGoBuddy <onboarding@resend.dev>"
ADMIN_EMAIL = "ashutoshkalash03@gmail.com"

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


# def send_enquiry_email(enquiry: dict):
#    msg = EmailMessage() 
#    msg["Subject"] = f"New Tour Enquiry – {enquiry['tour_title']}" 
#    msg["From"] = EMAIL_USERNAME 
#    msg["To"] = ADMIN_EMAIL 
#    msg.set_content(enquiry_email_html(enquiry), subtype="html") 
#    # msg.set_content(f""" #New Tour Enquiry Received #Name: {enquiry['full_name']} #Phone: {enquiry['phone']} #Email: {enquiry['email']} #Travellers: {enquiry['travelers']} #Preferred Dates: {enquiry['preferred_dates']} #Tour: {enquiry['tour_title']} #""") # ✅ SSL SMTP (NO starttls) 
#    with smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORT) as server: 
#     server.login(EMAIL_USERNAME, EMAIL_PASSWORD) 
#     server.send_message(msg)


def send_enquiry_email(enquiry: dict):
    resend.Emails.send({
        "from": SENDER,
        "to": [ADMIN_EMAIL],
        "reply_to": enquiry["email"],
        "subject": f"New Tour Enquiry – {enquiry['tour_title']}",
        "html": enquiry_email_html(enquiry),
    })



def custom_package_email_html(data: dict) -> str:
    return f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Custom Package Request</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        
        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.08);">

          <!-- HEADER WITH GRADIENT -->
          <tr>
            <td style="background:linear-gradient(135deg, #2563eb 0%, #1e40af 100%);padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:36px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);display:inline-block;padding:8px 16px;border-radius:24px;margin-bottom:16px;">
                            <span style="color:#ffffff;font-size:13px;font-weight:600;letter-spacing:0.5px;">NEW REQUEST</span>
                          </div>
                          <h1 style="margin:0;font-size:28px;color:#ffffff;font-weight:700;line-height:1.3;">
                            🧳 Custom Package Enquiry
                          </h1>
                          <p style="margin:8px 0 0;font-size:15px;color:rgba(255,255,255,0.9);line-height:1.5;">
                            A new custom travel package request has been submitted
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- URGENT ACTION BANNER -->
          <tr>
            <td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#fef3c7;padding:16px 40px;border-bottom:3px solid #fbbf24;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#92400e;font-size:14px;font-weight:600;">
                          ⚡ Action Required: Respond within 24 hours for best conversion
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CUSTOMER INFORMATION CARD -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h2 style="margin:0 0 20px;font-size:18px;color:#0f172a;font-weight:700;display:flex;align-items:center;">
                      <span style="background:#dbeafe;color:#2563eb;padding:8px 12px;border-radius:8px;margin-right:12px;font-size:16px;">👤</span>
                      Customer Information
                    </h2>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:20px 24px;">
                          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                            <!-- Name -->
                            <tr>
                              <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="120" style="color:#64748b;font-weight:500;">Full Name</td>
                                    <td style="font-weight:600;color:#0f172a;font-size:15px;">{data['full_name']}</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            
                            <!-- Phone -->
                            <tr>
                              <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="120" style="color:#64748b;font-weight:500;">Phone</td>
                                    <td>
                                      <a href="tel:{data['phone']}" style="color:#2563eb;text-decoration:none;font-weight:600;font-size:15px;">
                                        📞 {data['phone']}
                                      </a>
                                      <span style="margin-left:8px;background:#10b981;color:#ffffff;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;">
                                        CALL NOW
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            
                            <!-- Email -->
                            <tr>
                              <td style="padding:12px 0;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="120" style="color:#64748b;font-weight:500;">Email</td>
                                    <td>
                                      <a href="mailto:{data['email']}" style="color:#2563eb;text-decoration:none;font-weight:600;">
                                        {data['email']}
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- TRAVEL DETAILS CARD -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h2 style="margin:0 0 20px;font-size:18px;color:#0f172a;font-weight:700;display:flex;align-items:center;">
                      <span style="background:#dcfce7;color:#16a34a;padding:8px 12px;border-radius:8px;margin-right:12px;font-size:16px;">✈️</span>
                      Travel Preferences
                    </h2>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <!-- Grid Layout -->
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <!-- Destination Card -->
                              <td width="48%" style="vertical-align:top;padding-right:2%;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="background:#fef3c7;border-radius:12px;border-left:4px solid #fbbf24;">
                                  <tr>
                                    <td style="padding:16px 20px;">
                                      <div style="color:#92400e;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Destination</div>
                                      <div style="color:#0f172a;font-size:16px;font-weight:700;">{data.get('destination','Not specified')}</div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              
                              <!-- Travelers Card -->
                              <td width="48%" style="vertical-align:top;padding-left:2%;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="background:#dbeafe;border-radius:12px;border-left:4px solid #3b82f6;">
                                  <tr>
                                    <td style="padding:16px 20px;">
                                      <div style="color:#1e40af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Travelers</div>
                                      <div style="color:#0f172a;font-size:16px;font-weight:700;">{data['travelers']}</div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Second Row -->
                          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
                            <tr>
                              <!-- Travel Dates Card -->
                              <td width="48%" style="vertical-align:top;padding-right:2%;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3e8ff;border-radius:12px;border-left:4px solid #a855f7;">
                                  <tr>
                                    <td style="padding:16px 20px;">
                                      <div style="color:#6b21a8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Travel Dates</div>
                                      <div style="color:#0f172a;font-size:16px;font-weight:700;">{data['travel_dates']}</div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              
                              <!-- Budget Card -->
                              <td width="48%" style="vertical-align:top;padding-left:2%;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="background:#dcfce7;border-radius:12px;border-left:4px solid #10b981;">
                                  <tr>
                                    <td style="padding:16px 20px;">
                                      <div style="color:#065f46;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Budget</div>
                                      <div style="color:#0f172a;font-size:16px;font-weight:700;">{data['budget']}</div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- MESSAGE SECTION -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h2 style="margin:0 0 20px;font-size:18px;color:#0f172a;font-weight:700;display:flex;align-items:center;">
                      <span style="background:#fed7aa;color:#ea580c;padding:8px 12px;border-radius:8px;margin-right:12px;font-size:16px;">💬</span>
                      Additional Requirements
                    </h2>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
                      <tr>
                        <td style="padding:24px;">
                          <p style="margin:0;font-size:15px;color:#475569;line-height:1.7;white-space:pre-wrap;">
{data.get('message','No additional message provided.')}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- QUICK ACTIONS -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border-radius:12px;border:2px solid #bae6fd;">
                <tr>
                  <td style="padding:24px;text-align:center;">
                    <h3 style="margin:0 0 16px;font-size:16px;color:#0c4a6e;font-weight:700;">Quick Actions</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <a href="tel:{data['phone']}" style="display:inline-block;background:#10b981;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;margin:0 8px;">
                            📞 Call Customer
                          </a>
                          <a href="mailto:{data['email']}" style="display:inline-block;background:#2563eb;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;margin:0 8px;">
                            ✉️ Send Email
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:24px 40px;background:#f8fafc;border-top:1px solid #e2e8f0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin:0 0 8px;font-size:13px;color:#64748b;line-height:1.6;">
                      Received via <strong style="color:#0f172a;">LetsGoBuddy Website</strong>
                    </p>
                    <p style="margin:0;font-size:12px;color:#94a3b8;">
                      © 2026 LetsGoBuddy Travels. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
"""


def custom_package_user_confirmation_html(data: dict) -> str:
    return f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Your Custom Tour Request Received</title>
</head>
<body style="margin:0;padding:0;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.3);overflow:hidden;">

          <!-- Header with Logo/Brand -->
          <tr>
            <td style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);padding:40px 32px;text-align:center;">
              <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:12px;padding:20px;display:inline-block;">
                <h1 style="margin:0;font-size:32px;color:#ffffff;font-weight:800;letter-spacing:-0.5px;">
                  ✈️ LetsGoBuddy
                </h1>
              </div>
              <h2 style="margin:20px 0 0 0;font-size:22px;color:#ffffff;font-weight:600;">
                Your Journey Starts Here!
              </h2>
            </td>
          </tr>

          <!-- Success Badge -->
          <tr>
            <td align="center" style="padding:0;">
              <div style="background:#10b981;color:#ffffff;padding:16px 32px;font-size:15px;font-weight:600;">
                ✓ Request Received Successfully
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding:40px 32px;">
              <p style="font-size:18px;color:#1e293b;margin:0 0 12px 0;">
                Hi <strong style="color:#667eea;">{data['full_name']}</strong> 👋
              </p>

              <p style="font-size:15px;color:#475569;line-height:1.7;margin:0 0 24px 0;">
                Thank you for choosing LetsGoBuddy! We've received your custom tour request and our travel experts are already working on creating the perfect itinerary just for you.
              </p>

              <!-- Request Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border-radius:12px;border:2px solid #0ea5e9;margin:24px 0;">
                <tr>
                  <td style="padding:24px;">
                    <h3 style="margin:0 0 16px 0;font-size:16px;color:#0c4a6e;font-weight:700;">
                      📋 Your Request Details
                    </h3>
                    
                    <table width="100%" cellpadding="8" cellspacing="0" border="0">
                      <tr>
                        <td style="font-size:14px;color:#475569;padding:8px 0;">
                          <strong style="color:#0c4a6e;">📍 Destination:</strong>
                        </td>
                        <td style="font-size:14px;color:#1e293b;font-weight:600;text-align:right;padding:8px 0;">
                          {data.get('destination', 'Custom Location')}
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;color:#475569;padding:8px 0;border-top:1px solid #bae6fd;">
                          <strong style="color:#0c4a6e;">📅 Travel Dates:</strong>
                        </td>
                        <td style="font-size:14px;color:#1e293b;font-weight:600;text-align:right;padding:8px 0;border-top:1px solid #bae6fd;">
                          {data['travel_dates']}
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;color:#475569;padding:8px 0;border-top:1px solid #bae6fd;">
                          <strong style="color:#0c4a6e;">👥 Travelers:</strong>
                        </td>
                        <td style="font-size:14px;color:#1e293b;font-weight:600;text-align:right;padding:8px 0;border-top:1px solid #bae6fd;">
                          {data['travelers']} People
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;color:#475569;padding:8px 0;border-top:1px solid #bae6fd;">
                          <strong style="color:#0c4a6e;">📧 Email:</strong>
                        </td>
                        <td style="font-size:14px;color:#1e293b;font-weight:600;text-align:right;padding:8px 0;border-top:1px solid #bae6fd;">
                          {data.get('email', '—')}
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;color:#475569;padding:8px 0;border-top:1px solid #bae6fd;">
                          <strong style="color:#0c4a6e;">📱 Phone:</strong>
                        </td>
                        <td style="font-size:14px;color:#1e293b;font-weight:600;text-align:right;padding:8px 0;border-top:1px solid #bae6fd;">
                          {data.get('phone', '—')}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What Happens Next -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fef3c7;border-radius:12px;border-left:4px solid #f59e0b;margin:24px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <h3 style="margin:0 0 12px 0;font-size:15px;color:#92400e;font-weight:700;">
                      ⏱️ What Happens Next?
                    </h3>
                    <ul style="margin:0;padding:0 0 0 20px;color:#78350f;">
                      <li style="margin:8px 0;font-size:14px;line-height:1.6;">
                        Our travel expert will review your request within <strong>24 hours</strong>
                      </li>
                      <li style="margin:8px 0;font-size:14px;line-height:1.6;">
                        You'll receive a customized itinerary with pricing
                      </li>
                      <li style="margin:8px 0;font-size:14px;line-height:1.6;">
                        We'll be available for any modifications you need
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Trust Badges -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">
                <tr>
                  <td width="33%" align="center" style="padding:12px;">
                    <div style="font-size:28px;margin-bottom:4px;">🛡️</div>
                    <div style="font-size:12px;color:#475569;font-weight:600;">100% Safe</div>
                  </td>
                  <td width="33%" align="center" style="padding:12px;">
                    <div style="font-size:28px;margin-bottom:4px;">⭐</div>
                    <div style="font-size:12px;color:#475569;font-weight:600;">4.8 Rating</div>
                  </td>
                  <td width="33%" align="center" style="padding:12px;">
                    <div style="font-size:28px;margin-bottom:4px;">💎</div>
                    <div style="font-size:12px;color:#475569;font-weight:600;">Best Price</div>
                  </td>
                </tr>
              </table>

              <!-- Contact CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:32px 0 24px 0;">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/917017714708?text=Hi,%20I%20submitted%20a%20custom%20package%20request" 
                       style="display:inline-block;background:#25d366;color:#ffffff;padding:16px 32px;border-radius:50px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 4px 12px rgba(37,211,102,0.4);">
                      💬 Chat with Us on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px;color:#64748b;line-height:1.6;margin:24px 0 0 0;text-align:center;">
                Questions? Call us at <strong style="color:#667eea;">+91 70177 14708</strong> or reply to this email
              </p>

              <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0;"/>

              <p style="margin:0;font-size:15px;color:#334155;">
                Warm regards,<br/>
                <strong style="color:#667eea;">Team LetsGoBuddy</strong> ✨
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px;text-align:center;background:#f8fafc;border-top:1px solid #e2e8f0;">
              <p style="margin:0 0 12px 0;font-size:13px;color:#64748b;">
                Follow us for travel inspiration
              </p>
              <div style="margin:0 0 16px 0;">
                <a href="#" style="display:inline-block;margin:0 8px;color:#667eea;text-decoration:none;font-size:20px;">📘</a>
                <a href="#" style="display:inline-block;margin:0 8px;color:#667eea;text-decoration:none;font-size:20px;">📸</a>
                <a href="#" style="display:inline-block;margin:0 8px;color:#667eea;text-decoration:none;font-size:20px;">🐦</a>
              </div>
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                © 2026 LetsGoBuddy Travels. All rights reserved.<br/>
                Making memories, one journey at a time.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
"""



# def send_custom_package_email(data: dict):
#     # ADMIN EMAIL
#     admin_msg = EmailMessage()
#     admin_msg["Subject"] = "New Custom Tour Package Request"
#     admin_msg["From"] = EMAIL_USERNAME
#     admin_msg["To"] = ADMIN_EMAIL
#     admin_msg.set_content(
#         custom_package_email_html(data),
#         subtype="html"
#     )

#     with smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORT) as server:
#         server.login(EMAIL_USERNAME, EMAIL_PASSWORD)
#         server.send_message(admin_msg)

#     # USER CONFIRMATION EMAIL
#     user_msg = EmailMessage()
#     user_msg["Subject"] = "We received your custom tour request"
#     user_msg["From"] = EMAIL_USERNAME
#     user_msg["To"] = data["email"]
#     user_msg.set_content(
#         custom_package_user_confirmation_html(data),
#         subtype="html"
#     )

#     with smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORT) as server:
#         server.login(EMAIL_USERNAME, EMAIL_PASSWORD)
#         server.send_message(user_msg)



def send_custom_package_email(data: dict):
    # ADMIN EMAIL
    resend.Emails.send({
        "from": SENDER,
        "to": [ADMIN_EMAIL],
        "reply_to": data["email"],
        "subject": "🧳 New Custom Tour Package Request",
        "html": custom_package_email_html(data),
    })

    # USER CONFIRMATION EMAIL
    resend.Emails.send({
        "from": SENDER,
        "to": [data["email"]],
        "subject": "✈️ We received your custom tour request",
        "html": custom_package_user_confirmation_html(data),
    })
