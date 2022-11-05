# Nginx com Node.js

## 📜 Sobre:

Neste desafio, foi proposto que fosse desenvolvido uma aplicação utilizando Nginx, Node.js e Docker. A ideia geral é que quando o usuário acessar a rota "/" da aplicação, essa requisição irá passar por um web-server como intermediário(Nginx) que utilizando recursos de proxy reverso irá chamar a aplicação Node.js. 

A aplicação node tem como responsabilidade salvar pessoas no banco de dados, exibi-las e imprimir em tela a frase "Full Cycle Rocks!".

## 📦 Como rodar o ambiente:

Após rodar o comando abaixo, a aplicação estará rodando em http://localhost:8080

```bash

  $ docker-compose up -d

```