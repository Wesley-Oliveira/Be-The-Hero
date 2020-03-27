import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('ONG', () => {
    //Trocar para before all, para rodar apenas uma vez, caso algum teste dependa de outro antes
    beforeEach(async () => {
        // Antes de cada test, remover tudo e rodar migrations
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        // Depois de tudo, destruir conexão
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // Para setar um header
            // .set('Authorization', 'idvalido')
            .send({
                name: "APAD3",
                email: "contato@apad.com.br",
                whatsapp: "+5588992004525",
                city: "Rio do Sul",
                uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
});