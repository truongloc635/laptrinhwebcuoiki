from together import Together
import os
from dotenv import load_dotenv
import json
load_dotenv()
class Chatbot_service():
    def __init__(self):
        self.client = Together(
            api_key=os.environ.get("TOGETHER_API_KEY")
        )
    def getmenu(self):
        with open("data.json","r",encoding="utf-8") as f:
            self.menu = json.load(f)
            return self.menu
            
    def runtime(self,user_ques):
        self.getmenu()
        response = self.client.chat.completions.create(
            model="meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
            messages=[
                {"role": "system", "content": "Your name are Ba Bep.You are a helpful and knowledgeable chatbot that provides recommendations based on food products.When you give me the answer, use the super cute and friendly tone!"},
                {"role": "user", "content": f"Here is the menu {self.menu}.Please thinking and give me the answer and recommendations for the question: {user_ques}. No comment about the answer and advice. "}
            ]
        )
        return response.choices[0].message.content
    


# chatbot = Chatbot_service()
# print(chatbot.runtime("Hello, bạn là ai"))


    
    
