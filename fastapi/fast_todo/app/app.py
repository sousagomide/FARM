from fastapi import FastAPI
from core.config import settings
# Usado para fazer o mapeamento orientado a objetos / documentos do MongoDB. ORM
from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from contextlib import asynccontextmanager
from models.user_model import User
from models.todo_model import Todo
from api.api_v1.router import router
from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Cria o banco de dados todoapp
    client_db = AsyncIOMotorClient(settings.MONGO_CONNECTION_STRING, uuidRepresentation="standard").todoapp
    await init_beanie(
        database=client_db,
        document_models=[
            User,
            Todo
        ]
    )
    yield
    client_db.client.close()

app = FastAPI(title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(
    router, prefix=settings.API_V1_STR
)
