from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from typing import Any
from services.user_service import UserService
from core.security import create_access_token, create_refresh_token

auth_router = APIRouter()

@auth_router.post('/login')
async def login(data: OAuth2PasswordRequestForm = Depends()) -> Any:
    usuario = await UserService.authenticate(email=data.username, password=data.password)
    if not usuario:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='E-mail ou senha inválidos'
        )
    # Criar access_token e refresh_token
    return {
        'access_token': create_access_token(usuario.id),
        'refresh_token': create_refresh_token(usuario.id)
    }


