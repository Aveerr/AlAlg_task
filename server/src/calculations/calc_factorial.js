module.exports = {
    calc: (n) => {
        if (n < 0) return NaN

        let result = [1];
        for(let i = 2; i <= n; i++){
            result.push(result[i-2] * i);
        }

        return result
    }
}