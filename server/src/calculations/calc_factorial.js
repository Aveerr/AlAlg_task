module.exports = {
    calc: (n) => {
        if (typeof n !== 'number' || !Number.isInteger(n)) 
            throw new TypeError('Параметр n должен быть числом');

        if (n < 0)
            throw new RangeError('Факториал отрицательного числа не определен');

        let result = [1];
        for(let i = 2; i <= n; i++){
            result.push(result[i-2] * i);
        }

        return result
    }
}