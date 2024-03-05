class Notification:
    def __init__(self, notificationTitle, notificationText):
        self.__notificationTitle = notificationTitle
        self.__notificationText = notificationText
    
    def getNotificationTitle(self) -> str:
        return self.__notificationTitle
    
    def setNotificationTitle(self, title: str) -> None:
        self.__notificationTitle = title
    
    def getNotificationText(self) -> str:
        return self.__notificationTitle
    
    def setNotificationText(self, text) -> None:
        self.__notificationText = text
    
    def sendNotification(): #TODO: finish when push notification functionality is implemented
        return