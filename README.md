# TDD NODEJS EXPRESS

### This is a NodeJS application that provides exercises in a gradative way to improve your test skills using TDD practice

---

## Content

- [Motivation](#motivation)
- [Technologies](#technologies)
- [VSCode Extensions](#vscode-extensions)
- [Postman](#postman)
- [Main Structure](#main-structure)
- [Setup and how to run locally](#setup-and-how-to-run-locally)
- [(Quickly) How it works](<#(quickly)-how-the-project-works>)
- [(TLDR) How it works](<#(tldr)-how-it-works>)
  - [Transaction Control](#transaction-control)
  - [Security](#security-with-helmet)
  - [OpenAPI (Swagger)](<#openapi-(swagger)>)
  - [Error Handler](#error-handler)

---


## Motivation

Many developers are little lazy when the subject it's about tests. Maybe they don't REALLY know about the importance of this, or they just don't know how to create good tests. Or even worse, they don't know how to start build a nicelly test.

This guide it's for you, my dear Dev, and I hope that you leave with some skills to build tests like a good Dev.

---

## Technologies

- axios
- consign
- express
- pino

- jest (dev)
- supertest (dev)
- @types/jest (dev)

---

## VSCode Extensions

- ESLint
- JavaScript (ES6) code snippets
- Jest Runner
- Jest Test Explorer

---


1: |Criar um servico que se integre com a API do IBGE|

    #URL BASE:   https://servicodados.ibge.gov.br/api/v1/localidades
    #ESTADO:     /estados/{UF}
    #MUNICIPIOS: /estados/{UF}/municipios

OBS 1: SOMENTE ESTES SERVIÇOS PODERÃO SER UTILIZADOS
OBS 2: AQUI PENSEI EM CRIAR/CONFIGURAR O PLUGIN P/ CHAMADAS REST. O PESSOAL SE ENCARREGA DE CHAMAR A API E CONTROLAR O RETORNO


2: |Criar um serviço para que dada uma UF, DEVE retornar o estado, a UF, e a região no formato abaixo:|

## RETORNO DO IBGE ##
{
    "id": 33,
    "sigla": "RJ",
    "nome": "Rio de Janeiro",
    "regiao": {
        "id": 3,
        "sigla": "SE",
        "nome": "Sudeste"
    }
}

## RETORNO ESPERADO PELO NOSSO SERVIÇO ##
{
    "estado": "Rio de Janeiro",
    "uf": "RJ,
    "regiao": "Sudeste"
}




3: |Retornar o somatorio de estados agrupados por regiao|

## EXEMPLO ##

[
    {
        "regiao": "Sudeste",
        "qtdEstados": 999
    },
    {
        "regiao": "Norte",
        "qtdEstados": 111
    }
]



4: |Dada uma UF, retornar o nome do estado dentro de um array. cada posicao do array deve conter uma letra|

## EXEMPLO ##
GET /endpoint/RJ

["r", "i", "o", " ", "d", "e", " ", "j", "a", "n", "e", "i", "r", "o" ]