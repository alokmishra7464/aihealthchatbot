from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import GroqMedicalChatbot

app = Flask(__name__)
CORS(app)  #cors for react frontend

bot = GroqMedicalChatbot()

@app.route("/")
def home():
    return jsonify({"status": "ok", "message": "Groq Medical Chatbot API running"})

@app.route("/query", methods=["POST"])
def handle_query():
    try:
        data = request.get_json()
        user_query = data.get("query", "")
        if not user_query:
            return jsonify({"error": "Missing 'query' parameter"}), 400
        reply = bot.chat(user_query)

        return jsonify({"result": "ok", "output": reply})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print("🩺 Groq Medical Chatbot running on http://localhost:8081")
    app.run(host="localhost", port=8081)
