const ibgeEstadosResultTransformer = require('../functions/ibge.estados.result.transformer');

describe('Estados Result Transformer', async() => {

    it('should return {"value": "State (UF) / Region (Region abbrev.)"}', async() => {

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
        
        const actual = await ibgeEstadosResultTransformer.execute(defaultJsonResponse);

        const expected = {
            value: "Rio de Janeiro (RJ) / Sudeste (SE)"
        };

        //assertions
        expect(actual).toStrictEqual(expected);

    });

});
