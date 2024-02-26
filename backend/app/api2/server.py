from crud import get_users, create_user, get_user, get_user_by_username
from flask import Flask, request, render_template, abort, redirect
from flask_wtf.csrf import CSRFProtect, generate_csrf
import json

from forms.register import RegistrationForm

csrf = CSRFProtect()
app = Flask(__name__)
app.config['SECRET_KEY'] = 'ty4425hk54a21eee5719b9s9df7sdfklx'
csrf.init_app(app)


@app.route('/', methods=['GET', 'POST'])
@app.route('/home', methods=['GET', 'POST'])
def get_home():
    if request.method == 'GET':
        registration_form = RegistrationForm()
        generate_csrf()
        return render_template("input.html", registration_form=registration_form)



@app.route("/register", methods=["POST"])
def user_register():
    try:
        registration_form = RegistrationForm(request.form)
        if registration_form.validate():
            name = registration_form.name.data.strip()
            email = registration_form.email.data.strip()
            password = registration_form.password.data.strip()
            if create_user(name, email, password):
                return redirect('/cabinet')
        else:
            return render_template("input.html", registration_form=registration_form)
    except BaseException as e:
        return abort(403)


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


if __name__ == '__main__':
    with open('backend/app/api2/config.json', encoding='utf-8') as f:
        config = json.load(f)
    app.run(
        host=config['SERVER_HOST'],
        port=config['SERVER_PORT'],
        debug=config['DEBUG']
    )
