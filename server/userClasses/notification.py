# Email stuff

#goil xnuq fqur auzz
import smtplib
from email.mime.text import MIMEText


subject = "Email Subject"
body = "This is the body of the text message"
sender = "ayushayubaruah@gmail.com"
recipients = "ayushayubaruah@gmail.com"
password = "goil xnuq fqur auzz"


def send_email(subject, body, sender, recipients, password):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = recipients
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
       smtp_server.login(sender, password)
       smtp_server.sendmail(sender, recipients, msg.as_string())
    print("Message sent!")


#send_email(subject, body, sender, recipients, password)

class Notification:
    def __init__(self, notificationTitle, notificationText, recipientEmail):
        self.__notificationTitle = notificationTitle
        self.__notificationText = notificationText
        self.recipientEmail = recipientEmail
    
    def getNotificationTitle(self) -> str:
        return self.__notificationTitle
    
    def setNotificationTitle(self, title: str) -> None:
        self.__notificationTitle = title
    
    def getNotificationText(self) -> str:
        return self.__notificationText
    
    def setNotificationText(self, text) -> None:
        self.__notificationText = text
    
    def sendNotification(self): #TODO: finish when push notification functionality is implemented, part of business logic
        send_email(self.__notificationTitle, self.__notificationText, "teamhexagon278@gmail.com", self.recipientEmail,"vdgd ruwr ftco ftoh")
        return