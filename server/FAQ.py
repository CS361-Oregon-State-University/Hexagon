from enum import Enum
from fastapi import FastAPI
from pydantic import BaseModel


class FAQCategory(str, Enum):
    software = "Software"
    workout = "Workout"
    analytics = "Analytics"

class FAQEntry(BaseModel):
    question: str
    answer: str
    category: FAQCategory

# Updated list of FAQ entries with categories
faq_entries = [
    FAQEntry(question="How do I reset my password?", answer="Go to the settings page and click on 'Reset Password'.", category=FAQCategory.software),
    FAQEntry(question="What workout plans are available?", answer="We offer a variety of plans including Cardio, Weightlifting, and Calisthenics.", category=FAQCategory.workout),
    FAQEntry(question="How can I see my workout progress?", answer="Navigate to the analytics section to view your progress charts and statistics.", category=FAQCategory.analytics),
]
class UserComplaint(BaseModel):
    username: str  
    email: str  # Contact email
    category: FAQCategory  # Reusing the FAQCategory for complaints
    description: str  

# Example list to store complaints/bug reports (in a real application, this would be a database)
user_complaints = []

@app.post("/submit-complaint", response_model=UserComplaint)
def submit_complaint(complaint: UserComplaint):
    """Allow users to submit a complaint or report a bug."""
    user_complaints.append(complaint.dict())
    return complaint
