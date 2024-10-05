from fastapi import APIRouter, HTTPException, status, Depends
from schemas.user_schema import UserAuth, UserDetail
from services.user_service import UserService
import pymongo
from models.user_model import User
from api.dependencies.user_deps import get_current_user

user_router = APIRouter()

@user_router.post('/adicionar', summary='Adiciona um Usuário', response_model=UserDetail)
async def add_usuario(data: UserAuth):
    try:
        return await UserService.create_user(data)
    except pymongo.errors.DuplicateKeyError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Usuário ou e-mail já existe"
        )
    
@user_router.get('/me', summary='Lista todos os Usuários', response_model=UserDetail)
async def get_me(user: User = Depends(get_current_user)):
    return user
