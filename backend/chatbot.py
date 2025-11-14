import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    raise ValueError("GROQ_API_KEY missing in .env")

client = Groq(api_key=api_key)

tuning_instructions = """
You are an AI medical assistant. Follow these instructions:
- Always remain empathetic and polite.
- Maintain context across the entire conversation.
- If the user refers to something said earlier, remember that and respond consistently.
- Do not repeat your introduction after the first message.
- Always include a disclaimer: you are not a real doctor.
"""

class GroqMedicalChatbot:
    def __init__(self):
        print("Groq Medical Chatbot initialized with memory.")
        self.conversation = [
            {"role": "system", "content": tuning_instructions}
        ]

    def chat(self, user_query: str) -> str:
        try:
            # adds user message to conversation history
            self.conversation.append({"role": "user", "content": user_query})

            # send entire conversation each time
            completion = client.chat.completions.create(
                model="moonshotai/kimi-k2-instruct",
                messages=self.conversation
            )

            reply = completion.choices[0].message.content.strip()

            # add bot reply to conversation history
            self.conversation.append({"role": "assistant", "content": reply})

            return reply
        except Exception as e:
            return f"Error contacting Groq API: {e}"

if __name__ == "__main__":
    bot = GroqMedicalChatbot()
    while True:
        q = input("\n You: ")
        if q.lower() in ["exit", "quit"]:
            break
        print(" Bot:", bot.chat(q))
