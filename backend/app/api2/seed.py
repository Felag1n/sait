# Файл для инициализации значений базы данных
from models import User, database
from argparse import ArgumentParser

# Переменная для установки количества пользователей
USERS_COUNT = 10

# Создание аргументов утилиты
parser = ArgumentParser()
parser.add_argument(
    "--dev",
    dest="dev",
    action="store_true",
    help="init test data for database"
)

# Функция создания таблиц
def create_tables():
    with database:
        database.create_tables([User])

# Функция удаления таблиц
def drop_tables():
    with database:
        database.drop_tables([User])

# Функция инициализации пользователей
def init_users():
    with database:
        for i in range(USERS_COUNT):
            User.create(
                username=f"user-{i}",
                password=f"password-{i}",
            )

# Запуск утилиты как main скрипта
if __name__ == "__main__":
    # Парсинг аргументов
    args = parser.parse_args()

    # Заполнение базы данных значениями
    drop_tables()
    create_tables()

    if (args.dev):
        init_users()