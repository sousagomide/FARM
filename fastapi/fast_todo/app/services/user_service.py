from schemas.user_schema import UserAuth
from models.user_model import User
from core.security import get_password_hash, verify_password
from typing import Optional

class UserService:
    @staticmethod
    async def create_user(user: UserAuth):
        usuario = User(
            username=user.username,
            email=user.email,
            hash_password=get_password_hash(user.password)
        )
        await usuario.save()
        return usuario
    
    @staticmethod
    async def get_user_by_email(email: str) -> Optional[User]:
        user = await User.find_one(User.email == email)
        return user
    
    @staticmethod
    async def authenticate(email: str, password: str) -> Optional[User]:
        user = await UserService.get_user_by_email(email=email)
        if not user:
            return None
        if not verify_password(password, user.hash_password):
            return None
        return user
