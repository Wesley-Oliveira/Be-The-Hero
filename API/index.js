import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Wesley Oliveira'
    });
});

app.listen(3333);