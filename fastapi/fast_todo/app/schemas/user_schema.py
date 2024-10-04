# Para serialização de dados e validação de campos
from pydantic import BaseModel, EmailStr, Field
from uuid import UUID
from typing import Optional

# Usado durante o cadastro de um novo usuário
class UserAuth(BaseModel):
    email: EmailStr = Field(..., description="E-mail do usuário")
    username: str = Field(..., min_length=5, max_length=50, description="Nome do usuário")
    password: str = Field(..., min_length=6, max_length=20, description="Senha do usuário")

# Usado para retornar apenas as informações básicas
class UserDetail(BaseModel):
    id: UUID
    username: str
    email: EmailStr
    first_name: Optional[str]
    last_name: Optional[str]
    disabled: Optional[bool]
