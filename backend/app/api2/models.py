# Файл для инициализации базы данных и моделей
from peewee import Model, CharField, IntegerField
from playhouse.sqlite_ext import SqliteExtDatabase
from werkzeug.security import generate_password_hash, check_password_hash

DATABASE = "database.db"

# Создание провайдера базы данных
database = SqliteExtDatabase(DATABASE)

# Базовый класс моделей
class BaseModel(Model):
    class Meta:
        database = database

# Модель пользователя
class User(BaseModel):
    id = IntegerField(unique=True, primary_key=True)
    username = CharField(unique=True, index=True)
    password = CharField()
    email = CharField(max_length=30, unique=True, index=True)

    def make_password(self, raw_password: str) -> None:
        self.password = generate_password_hash(raw_password)
    
    def check_password(self, raw_password: str) -> bool:
        return check_password_hash(self.password, raw_password)

    @classmethod
    def create(cls, username: str, password: str, email: str) -> 'User':
        password = generate_password_hash(password)
        return super(User, cls).create(username=username, password=password, email=email)
        

def login(username, password):
    try:
        user = (User
                .select()
                .where(User.username == username)
                .get())
        if user and user.check_password(password):
            return user
        return False
    except User.DoesNotExist:
        return False


database.create_tables([
    User,
])
