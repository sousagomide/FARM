from fastapi import APIRouter, Depends
from schemas.todo_schema import TodoDetail
from models.user_model import User
from api.dependencies.user_deps import get_current_user

todo_router = APIRouter()

@todo_router.get('/', summary='Listar todas as Notas', response_model=TodoDetail)
async def listar(current_user: User = Depends(get_current_user)):
    pass
