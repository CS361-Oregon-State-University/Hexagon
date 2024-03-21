from enum import Enum
from fastapi import FastAPI
from pydantic import BaseModel
from email.mime.text import MIMEText
import smtplib


def send_email(subject, body, sender, recipients, password):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = recipients
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
       smtp_server.login(sender, password)
       smtp_server.sendmail(sender, recipients, msg.as_string())
    print("Message sent!")

# Updated list of FAQ entries with categories
    

class UserComplaint():
    def __init__(self, username, issue):
        self.username = username
        self.issue = issue
    
    def getIssue(self) -> str:
        return self.issue
    
    def setIssue(self, issue: str) -> None:
        self.issue = issue
    
    def getUsername(self) -> str:
        return self.username
    
    def setUsername(self, username) -> None:
        self.username = username
    
    def sendSupportEmail(self):
        send_email("Support from" + self.username, self.issue, "teamhexagon278@gmail.com", "teamhexagon278@gmail.com","vdgd ruwr ftco ftoh")
