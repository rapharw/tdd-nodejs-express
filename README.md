1: |Criar um servico que se integre com a API do IBGE|

    #URL BASE:   https://servicodados.ibge.gov.br/api/v1/localidades
    #ESTADOS:    /estados
    #ESTADO:     /estados/{UF}
    #MUNICIPIOS: /estados/{UF}/municipios

OBS 1: SOMENTE ESTES SERVIÇOS PODERÃO SER UTILIZADOS
OBS 2: AQUI PENSEI EM CRIAR/CONFIGURAR O PLUGIN P/ CHAMADAS REST. O PESSOAL SE ENCARREGA DE CHAMAR A API E CONTROLAR O RETORNO


2: |Na listagem de estados retornada pelo IBGE, altere as informações conforme abaixo:|

## DE ##
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

## PARA ##
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