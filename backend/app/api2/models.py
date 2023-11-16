# Файл для инициализации базы данных и моделей
from peewee import Model, SqliteDatabase, CharField, IntegerField

# Путь до файла базы данных
DATABASE = "database.db"

# Создание провайдера базы данных
database = SqliteDatabase(DATABASE)

# Базовый класс моделей
class BaseModel(Model):
    class Meta:
        database = database

# Модель пользователя
class User(BaseModel):
    id = IntegerField(unique=True, primary_key=True)
    username = CharField()
    password = CharField()
