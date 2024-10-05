from models.todo_model import Todo
from models.user_model import User
from typing import List
from schemas.todo_schema import TodoCreate, TodoUpdate
from uuid import UUID


class TodoService:
    @staticmethod
    async def list_todos(user: User) -> List[Todo]:
        todos = await Todo.find(Todo.owner.id == user.id).to_list()
        return todos
    
    @staticmethod
    async def create_todo(user: User, data: TodoCreate) -> Todo:
        todo = Todo(**data.model_dump(), owner=user)
        return await todo.insert()
    
    @staticmethod
    async def detail(user: User, todo_id: UUID):
        todo = await Todo.find_one(Todo.id == todo_id, Todo.owner.id == user.id)
        return todo
    
    @staticmethod
    async def update_todo(user: User, todo_id: UUID, data: TodoUpdate):
        todo = await TodoService.detail(user, todo_id)
        await todo.update({'$set': data.model_dump(exclude_unset=True)})
        await todo.save()
        return todo
    
    @staticmethod
    async def delete_todo(user: User, todo_id: UUID) -> None:
        todo = await TodoService.detail(user, todo_id)
        if todo:
            await todo.delete()
        return None
    