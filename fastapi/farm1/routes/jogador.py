from fastapi import APIRouter
from config.database import client
from models.jogador import Jogador

jogador_router = APIRouter()

@jogador_router.get("/")
async def root():
    return "Bem vindo ao FullStack Farm"

@jogador_router.get("/jogadores")
async def listar_jogadores():
    return client.local.jogador.find()



