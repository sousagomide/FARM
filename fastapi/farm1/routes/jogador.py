from fastapi import APIRouter
from config.database import client
from models.jogador import Jogador
from schemas.jogador import jogador_entidade, lista_jogadores_entidade
from bson import ObjectId

jogador_router = APIRouter()

@jogador_router.get('/')
async def root():
    return "Bem vindo ao FullStack Farm"

@jogador_router.get('/jogadores')
async def listar_jogadores():
    return lista_jogadores_entidade(client.local.jogador.find())

@jogador_router.post('/jogadores')
async def criar_jogador(jogador: Jogador):
    client.local.jogador.insert_one(dict(jogador))
    return lista_jogadores_entidade(client.local.jogador.find())

@jogador_router.get('/jogadores/{id}')
async def buscar_jogador_id(id: str):
    return jogador_entidade(client.local.jogador.find_one({'_id': ObjectId(id)}))

@jogador_router.put('/jogadores/{id}')
async def atualizar_jogador(id: str, jogador: Jogador):
    client.local.jogador.find_one_and_update({'_id': ObjectId(id)}, {'$set': dict(jogador)})
    return jogador_entidade(client.local.jogador.find_one({'_id': ObjectId(id)}))

@jogador_router.delete('/jogadores/{id}')
async def deletar_jogador(id: str):
    client.local.jogador.find_one_and_delete({'_id': ObjectId(id)})
    return {'mensagem': 'Jogador deletado com sucesso'}