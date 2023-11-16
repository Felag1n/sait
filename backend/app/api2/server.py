from crud import get_users, create_user, get_user, get_user_by_username
from flask import Flask, request,render_template
import json


app = Flask(__name__)


@app.route('/')
@app.route('/home')
def get_home():
    return render_template("index.html")

if __name__ == '__main__':
    with open('backend/app/api2/config.json', encoding='utf-8') as f:
        config = json.load(f)
    app.run(
        host=config['SERVER_HOST'],
        port=config['SERVER_PORT'],
        debug=config['DEBUG']
    )
# Апи для работы с таблицей пользователей
@app.route("/api2/users", methods=['GET', "POST"])
def api2_users():
    if (request.method == "GET"):
        # Обработка GET запроса
        return get_users()
    elif (request.method == "POST"):
        # Обработка POST запроса
        username = request.json.get("username")
        password = request.json.get("password")

        user = get_user_by_username(username)

        is_user_exists = user != None

        if (is_user_exists):
            return {
                "status": "ERROR",
                "error": "non unique username"
            }

        create_user(username, password)
        return { "status": "OK" }

@app.route("/api/login", methods=["POST"])
def api2_login():
    username = request.json.get("username")
    password = request.json.get("password")

    user = get_user_by_username(username)

    if (not user):
        return {
            "status": "ERROR",
            "error": f"no user with username \"{username}\""
        }

    if (user.get("password") == password):
        return {
            "status": "OK",
            "can_login": True,
        }

    return {
        "status": "ERROR",
        "error": "an unknown error",
    }