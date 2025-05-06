module.exports = {
    calc: (n) => {
        const container = [0, 1]; 

        for (let i = 2; i < n; i++) {
            const nextNum = container[i - 1] + container[i - 2];
            container.push(nextNum);
        }

        return container;
    }
}