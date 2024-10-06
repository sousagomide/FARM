# FARM

1) Sobre FastAPI

Instalação do FastAPI

pip install fastapi

Instalação do Servidor

pip install uvicorn

Instalação do Pydantic

pip install pydantic

Para rodar o servidor

uvicorn <file>:<atributo> --reload
uvicorn api:app --reload

Forma interativa de usar o FastAPI

http://127.0.0.1:8000/docs

2) Sobre React

Instalação do React

npm install create-react-app

Criação de um projeto

npx create-react-app my-app

Executar a aplicação

npm start

3) Sobre MongoDB

Instalar MongoDB Community e MongoDB Shell
Instalar MongoDB Compass

Comandos do MongoDB

=> show dbs;

	Mostra os bancos de dados

=> use <nome>;

	Usa uma nova base de dados
	
=> show collections;

	Mostra as coleções da base
	
=> db.createCollection('<nome>')

	Cria uma nova coleção
	
=> db.<nome>.insertOne({chave: valor})

	Cria um novo registro
	
=> db.<nome>.find({})

	Busca todos os registros
	
=> db.<nome>.find({chave: valor})

	Busca por um atributo

=> db.<nome>.update({chave: valor}, {$set:{chave: valor}})

	Atualiza um atributo
	
=> db.<nome>.deleteOne({chave: valor})

	Delete um registro
	
4) Projeto Gerenciamento de Jogadores

- Bibliotecas

pip install pymongo fastapi uvicorn

- Bibliotecas no React

npm i axios bootstrap


Extensões

    fastapi-snippets
	Live Preview
	vscode-icons
	ES7 + React/Redux/React-Native snippets
	
5) Projeto ToDO

- Bibliotecas

pip install fastapi uvicorn python-decouple beanie pydantic-settings pydantic[email] python-jose[cryptography] "passlib[bcrypt]" python-multipart

npm install -g yarn
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
yarn add axios react-router-dom@6 react-hook-form
