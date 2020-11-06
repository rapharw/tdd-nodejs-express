const ibgeEstadosResultTransformer = {

    async execute(ibgeEstadoResponseJson){

        const newJsonTransformed = {};

        newJsonTransformed.estado = ibgeEstadoResponseJson.nome;
        newJsonTransformed.uf = ibgeEstadoResponseJson.sigla;
        newJsonTransformed.regiao = ibgeEstadoResponseJson.regiao.nome;

        return newJsonTransformed;
    }

};

module.exports = ibgeEstadosResultTransformer;