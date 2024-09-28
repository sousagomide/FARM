# Biblioteca para usar o FastAPI
from fastapi import FastAPI
# Biblioteca para usar modelo que interage com valores pré-definidos
from pydantic import BaseModel

# Referência do FastAPI
app = FastAPI()

# Variável usada para testar parâmetros via path com FastAPI
jogadores = {
    1: {
        'nome': 'Rony',
        'idade': 22,
        'time': 'Palmeiras'
    },
    2: {
        'nome': 'Gustavo Gomez',
        'idade': 29,
        'time': 'Palmeiras'
    },
    3: {
        'nome': 'Henrique Braga',
        'idade': 25,
        'time': 'Goiás'
    }
}

# Usado no pydantic. Essa classe será usada no método Post
class Jogador(BaseModel):
    nome: str
    idade: int
    time: str


# Cria uma rota do tipo GET. No caso da / é a rota principal
# @app é um decorator
@app.get('/')
def init():
    return jogadores

# Para passar parâmetro via path adicione uma variável no caminho em @app.get
# Diferença entre tipos de parâmetros
# Path Parameter -  get-jogador/1
# Query Parameter - get-jogador/2
@app.get('/get-jogador/{id_jogador}')
def get_jogador(id_jogador: int):
    return jogadores[id_jogador]

# Esse método passa um parâmetro via query
@app.get('/get-jogador-time')
def get_jogador_time(time: str):
    result = {i: [jogadores[i]] for i in jogadores if jogadores[i]['time'] == time}
    if len(result) == 0:
        return {'Mensagem': 'Dados não encontrados'}
    else:
        return result
    
# Cria uma rota do tipo POST
@app.post('/cadastrar-jogador/{jogador_id}')
def cadastra_jogador(jogador_id: int, jogador: Jogador):
    if jogador_id in jogadores:
        return {'ERRO': 'Jogador já existe'}
    jogadores[jogador_id] = jogador
    return jogadores[jogador_id]