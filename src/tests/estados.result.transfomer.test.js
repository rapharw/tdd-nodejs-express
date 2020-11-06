const ibgeEstadosResultTransformer = require('../functions/ibge.estados.result.transformer');

describe('Estados Result Transformer', async() => {

    it('should transform defaultJsonResponse to return a expectedJson with only "estado", "uf", "regiao"', async() => {

        // GET {base_url}/estados/RJ
        const defaultJsonResponse = {
            "id": 33,
            "sigla": "RJ",
            "nome": "Rio de Janeiro",
            "regiao": {
                "id": 3,
                "sigla": "SE",
                "nome": "Sudeste"
            }
        };
        
        //this service doesn't exists yet
        const result = await ibgeEstadosResultTransformer.execute(defaultJsonResponse);

        //assertions
        expect(result.estado).toBe('Rio de Janeiro');
        expect(result.uf).toBe('RJ');
        expect(result.regiao).toBe('Sudeste');

    });

});
