from typing import Optional
from datetime import datetime, timezone
from uuid import UUID, uuid4
from beanie import Document, Indexed, Link, before_event, Replace, Insert
from pydantic import Field
from .user_model import User

class Todo(Document):
    id: UUID = Field(default_factory=uuid4, unique=True)
    status: bool = False
    title: str = Indexed(str)
    description: str = Indexed(str)
    created_at: datetime = Field(default_factory=lambda: datetime.now(tz=timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(tz=timezone.utc))
    owner: Link[User]

    def __repr__(self) -> str:
        return f'<Todo {self.title}>'
    
    def __str__(self) -> str:
        return self.title
    
    def __hash__(self) -> int:
        return hash(self.title)
    
    def __eq__(self, other: object) -> bool:
        if isinstance(other, Todo):
            return self.id == other.id
        return False
    
    # Atualiza o campo toda vez que houver um Replace ou Insert
    @before_event([Replace, Insert])
    def sync_updated_at(self):
        self.updated_at = datetime.now(tz=timezone.utc)
            
