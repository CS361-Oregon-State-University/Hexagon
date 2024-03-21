from .notification import Notification
import datetime

class Injury:
    NOTIFICATION_TEXT = "This is a reminder to update your injur's pain index."
    def __init__(self, area: str, pain: int, injuryDate: datetime.datetime): #date should be yyyy-mm-dd format
        self.__area = area
        self.__pain = pain
        self.__injuryDate = injuryDate
    
    def getArea(self) -> str:
        return self.__area
    
    def setArea(self, injuryArea: str) -> None:
        self.__area = injuryArea
    
    def getPain(self) -> int:
        return self.__pain

    def setPain(self, painLevel) -> None:
        if painLevel >= 1 and painLevel <= 10:
            self.__pain = painLevel
        else:
            print("Invalid pain level. Pain level should be >= 1 and <= 10")
    
    def getInjuryDate(self) -> datetime.datetime:
        return self.__injuryDate 
    
    def setInjuryDate(self, year, month, day) -> None: #TODO: Could be changed when business logic is implemented
        self.__injuryDate = datetime.datetime(year, month, day)
    
    def remindToUpdate(self) -> Notification:
        notification = Notification("Injury", self.NOTIFICATION_TEXT)
        return notification
    