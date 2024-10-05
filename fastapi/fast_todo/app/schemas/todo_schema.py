from pydantic import BaseModel, Field
from typing import Optional
from uuid import UUID
from datetime import datetime

class TodoCreate(BaseModel):
    title: str = Field(..., title='Título', min_length=3, max_length=100)
    description: str = Field(..., title='Descrição', min_length=3, max_length=255)
    status: Optional[bool] = False

class TodoUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    status: Optional[bool] = False

class TodoDetail(BaseModel):
    id: UUID
    status: bool
    title: str
    description: str
    created_at: datetime
    updated_at: datetime
    
