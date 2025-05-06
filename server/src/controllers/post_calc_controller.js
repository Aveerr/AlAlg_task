const calc_factorial = require('../calculations/calc_factorial');
const calc_fibonacci= require('../calculations/calc_fibonacci');

module.exports = {
    post: async (req, res) => {
        try{
            console.log('post calculate called');
            const {n, calc_type} = req.body;
            switch (calc_type) {
                case 'calc_factorial':
                    let factorial = calc_factorial(n)

                    console.log(`factorial calculated`)
                    res.send(factorial);
                    break;
                case 'calc_fibonacci':
                    let fibonacci = calc_fibonacci.calc(n)

                    console.log(`fibonacci calculated`)
                    res.send(fibonacci);
                    break;
                default:
                    break;
            }
        }catch(err){
            res.status(500).json({ error: err.message });
        }
    }
}