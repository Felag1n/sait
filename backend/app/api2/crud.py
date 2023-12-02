# Файл для утилит работы с базой данных

from models import User, database
from playhouse.shortcuts import model_to_dict

# Утилита создания пользователя
def create_user(username: str, email: str, password: str) -> bool:
    try:
        with database:
            user = User.create(
                username=username,
                password=password,
                email=email
            )
            user.make_password(password)
    except Exception as e:
        print(e.__class__.__name__, e, sep=': ')
        return False
    return True

# Утилита получения пользователя по username
def get_user_by_username(username: str):
    user = User.get_or_none(User.username == username)

    if (not user):
        return None

    return model_to_dict(user)

# Утилита получения всех пользователей из базы данных
def get_users():
    with database:
        users = User.select(
            User.username,
            User.id
        )
        return list(map(model_to_dict, users))

# Утилита получения пользователя по id
def get_user(id: int):
    with database:
        user = User.get_by_id(id)
        return model_to_dict(user)