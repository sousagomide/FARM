from beanie import Document, Indexed
from uuid import UUID, uuid4
from pydantic import Field, EmailStr
from datetime import datetime
from typing import Optional

class User(Document):
    id: UUID = Field(default_factory=uuid4)
    username: str = Field(index=True, unique=True)
    email: EmailStr = Field(index=True, unique=True)
    hash_password: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    disabled: Optional[bool] = False

    # Recupera a informação nesse formato
    def __repr__(self) -> str:
        return f'<User {self.email}>'
    
    def __str__(self) -> str:
        return self.email
    
    def __hash__(self) -> int:
        return hash(self.email)
    
    # Verificar se o e-mail da requisição é o mesmo que o e-mail do banco de dados
    def __eq__(self, other: object) -> bool:
        if isinstance(other, User):
            return self.email == other.email
        return False
    
    @property
    def created(self) -> datetime:
        return self.id.generation_time
    
    # Recupera um registro de usuário pelo e-mail
    @classmethod
    async def by_email(self, email: str) -> "User":
        return await self.find_one(self.email == email)
