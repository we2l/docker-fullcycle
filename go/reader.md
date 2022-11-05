# Golang

## 📜 Sobre:

Neste desafio, foi proposto que fosse desenvolvido uma aplicação utilizando Go e Docker. Porém, o grande desafio está em gerar uma imagem docker com um tamanho inferior a 2mb.
Para chegar neste tamanho, utilizei multiStage building com a imagem do scratch que é bem pequena e consegue executar binários.
A aplicação deve exibir a mensagem "Code.education Rocks!" ao ser inicializada.

## 📦 Como rodar o ambiente:

Após rodar o comando abaixo, a aplicação irá imprimir a mensagem "Code.education Rocks!".

```bash

  $ docker run 33094601/codeeducation

```
