const request = require('supertest');
const app = require('../app');

describe('POST /calculate/', () => {
    // Тест 1: Проверка пустого тела запроса
    it('should return 400 for empty request body', async () => {
        const response = await request(app)
            .post('/calculate/')
            .send({})
            .expect(400);
        expect(response.body).toEqual({
        "errors": [
            "Параметр calc_type обязателен",
            "Параметр n обязателен"
        ]});
    });
    it('should return 400 for invalid base schema', async () => {
        const response = await request(app)
            .post('/calculate/')
            .send({ n: 'fa', calc_type: 'err' })
            .expect(400);
        
        expect(response.body.errors).toBeDefined();
        expect(response.body.errors.length).toBeGreaterThan(0);
    });

    describe('factorial calculations', () => {
        it('should calculate factorial for valid input', async () => {
          const response = await request(app)
            .post('/calculate/')
            .send({ n: 5, calc_type: 'calc_factorial' })
            .expect(200);
          
          expect(response.body.result).toStrictEqual([1, 2, 6, 24, 120]);
        });
    
        it('should return 400 for invalid factorial input', async () => {
          const response = await request(app)
            .post('/calculate/')
            .send({ n: -5, calc_type: 'calc_factorial' })
            .expect(400);
          
          expect(response.body.errors).toBeDefined();
        });
    });
})