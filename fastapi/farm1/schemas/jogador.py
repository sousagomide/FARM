def jogador_entidade(db_item) -> dict:
    return {
        "id": str(db_item['_id']),
        "nome": db_item['jogador_nome'],
        "idade": db_item['jogador_idade'],
        "time": db_item['jogador_time']
    }

def lista_jogadores_entidade(db_items) -> list:
    return [jogador_entidade(item) for item in db_items]
