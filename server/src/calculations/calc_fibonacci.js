module.exports = {
    calc: (n) => {
        if (typeof n !== 'number' || !Number.isInteger(n)) 
            throw new TypeError('Параметр n должен быть числом');

        if (n < 0)
            throw new RangeError('Факториал отрицательного числа не определен');
        
        let container = [0, 1]; 

        for (let i = 2; i < n+1; i++) {
            let nextNum = container[i - 1] + container[i - 2];
            container.push(nextNum);
        }

        return container;
    }
}