const request = require('supertest');
const app = require('../app');

describe('POST /calculate/', () => {
    // Тест 1: Проверка пустого тела запроса
    it('Должен вернуть ошибку 400 на пустое тело', async () => {
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
    it('Должен обработать неправильй тип данных', async () => {
        const response = await request(app)
            .post('/calculate/')
            .send({ n: 'fa', calc_type: 'calc_factorial' })
            .expect(400);
        
        expect(response.body.errors).toBeDefined();
        expect(response.body.errors.length).toBeGreaterThan(0);
    });
    it('Должен обработать неизвестный тип вычисления', async () => {
        const response = await request(app)
          .post('/calculate')
          .send({ n: 5, calc_type: 'unknown_type' })
          .expect(400); 
        
        expect(response.body).toEqual({
            "errors": [
                "Недопустимый тип расчета",
        ]});
    });

    describe('Вычисление факториала', () => {
        it('Должен вычислить числа факториала с верными данными на входе', async () => {
          const response = await request(app)
            .post('/calculate/')
            .send({ n: 5, calc_type: 'calc_factorial' })
            .expect(200);
          
          expect(response.body.result).toStrictEqual([1, 2, 6, 24, 120]);
        });
    
        it('Должен вывести ошибку 400 на неправильно значение n', async () => {
          const response = await request(app)
            .post('/calculate/')
            .send({ n: -5, calc_type: 'calc_factorial' })
            .expect(400);
          
          expect(response.body.errors).toBeDefined();
        });
    });

    describe('Вычисление фибоначи', () => {
        it('Должен вычислить числа фибоначи с верными данными на входе', async () => {
          const response = await request(app)
            .post('/calculate')
            .send({ n: 10, calc_type: 'calc_fibonacci' })
            .expect(200);
          
          expect(response.body.result).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]); 
        });
    
        it('Должен вывести ошибку 400 на неверное значение n', async () => {
          const response = await request(app)
            .post('/calculate')
            .send({ n: -1, calc_type: 'calc_fibonacci' })
            .expect(400);
          
          expect(response.body.errors).toBeDefined();
        });
    });5
})