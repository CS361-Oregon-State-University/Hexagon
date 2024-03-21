# Email stuff

from fastapi import FastAPI
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from pydantic import BaseModel, EmailStr
from starlette.responses import JSONResponse 
from typing import List

# dotenv
from dotenv import dotenv_values

#credentials
credentials = dotenv_values(".env")



class EmailSchema(BaseModel):
    email: List[EmailStr]

class Notification(BaseModel):
    notificationTitle : str
    notificationText : str


conf = ConnectionConfig(
    MAIL_USERNAME = credentials['EMAIL'],
    MAIL_PASSWORD = credentials['PASS'],
    MAIL_FROM = credentials['EMAIL'],
    MAIL_PORT = 465,
    MAIL_SERVER = "smtp.gmail.com",
    MAIL_STARTTLS = False,
    MAIL_SSL_TLS = True,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)

app = FastAPI()

html = f"""
<h4>Did you plan on working out today?</h4>
<br>
<p>Hey there lazy bum, we noticed you haven't worked out yet. You planning on getting off your fat ass today or what?</p>
"""



@app.post("/email")
async def simple_send(email: EmailSchema) -> JSONResponse:
    html = """<p>Hi this test mail, thanks for using Fastapi-mail</p> """

    message = MessageSchema(
        subject="Fastapi-Mail module",
        recipients=email.dict().get("email"),
        body=html,
        subtype=MessageType.html)

    fm = FastMail(conf)
    await fm.send_message(message)
    return JSONResponse(status_code=200, content={"message": "email has been sent"})



"""
class Notification:
    def __init__(self, notificationTitle, notificationText):
        self.__notificationTitle = notificationTitle
        self.__notificationText = notificationText
    
    def getNotificationTitle(self) -> str:
        return self.__notificationTitle
    
    def setNotificationTitle(self, title: str) -> None:
        self.__notificationTitle = title
    
    def getNotificationText(self) -> str:
        return self.__notificationText
    
    def setNotificationText(self, text) -> None:
        self.__notificationText = text
    
    def sendNotification(): #TODO: finish when push notification functionality is implemented, part of business logic
        return
        """