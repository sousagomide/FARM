from fastapi import FastAPI
from core.config import settings
# Usado para fazer o mapeamento orientado a objetos / documentos do MongoDB. ORM
from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Cria o banco de dados todoapp
    client_db = AsyncIOMotorClient(settings.MONGO_CONNECTION_STRING).todoapp
    await init_beanie(
        database=client_db,
        document_models=[]
    )
    yield
    client_db.client.close()

app = FastAPI(title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json", lifespan=lifespan)
