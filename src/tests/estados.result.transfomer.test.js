const ibgeEstadosResultTransformer = require('../functions/ibge.estados.result.transformer');

describe('Estados Result Transformer', async() => {

    it('should return a json with the value "State (State abbreviation) / Region (Region abbreviation)"', async() => {

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
        
        const result = await ibgeEstadosResultTransformer.execute(defaultJsonResponse);

        //assertions
        expect(result.value).toBe('Rio de Janeiro (RJ) / Sudeste (SE)');

    });

});
