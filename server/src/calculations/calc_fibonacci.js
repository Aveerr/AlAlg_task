module.exports = {
    calc: (n) => {
        let container = [0, 1]; 

        for (let i = 2; i < n; i++) {
            let nextNum = container[i - 1] + container[i - 2];
            container.push(nextNum);
        }

        return container;
    }
}