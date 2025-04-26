from fastapi import APIRouter, Request
import services

router = APIRouter()
model = services.Chatbot_service()

@router.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_quest = data.get("message")
    answer = model.runtime(user_quest)
    return {"answer":answer}


