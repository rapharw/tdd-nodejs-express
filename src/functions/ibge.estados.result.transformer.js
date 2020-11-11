const ibgeEstadosResultTransformer = {

    async execute(ibgeEstadoResponseJson){

        const newJsonTransformed = {};

        //ex: 'Rio de Janeiro (RJ) / Sudeste (SE)'

        const estado = ibgeEstadoResponseJson.nome;
        const uf = ibgeEstadoResponseJson.sigla;
        const regiao = ibgeEstadoResponseJson.regiao.nome;
        const regiaoSigla = ibgeEstadoResponseJson.regiao.sigla;

        return `${estado} (${uf}) / ${regiao} (${regiaoSigla})`;
    }

};

module.exports = ibgeEstadosResultTransformer;