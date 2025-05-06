const calc_factorial = require('../calculations/calc_factorial');
const calc_fibonacci= require('../calculations/calc_fibonacci');
const validationSchemas = require('../service/validation')


module.exports = {
    post: async (req, res) => {
        try{
            if(!req.body || Object.keys(req.body).lenght === 0)
                return res.status(400).json({ error: 'Тело запроса не может быть пустым' });

            const baseValidation = validationSchemas.base.validate(req.body, {abortEarly: false})
            if(baseValidation.error){
                const errors = baseValidation.error.details.map(details => details.message)
                return res.status(400).json({errors})
            }

            const {n, calc_type} = req.body;
            console.log(`post calculate called (n: ${n}) (тип расчёта: ${calc_type})`);
            switch (calc_type) {
                case 'calc_factorial':
                    const { factorial_err } = validationSchemas.factorial.validate({ n });
                    if (factorial_err) {
                        return res.status(400).json({ errors: factorial_err.details.map(d => d.message) });
                    }

                    let factorial = calc_factorial.calc(n)
                    console.log(`factorial ${n} calculated`)
                    res.json({result: factorial});
                    break;

                case 'calc_fibonacci':
                    const { fibonacci_err } = validationSchemas.fibonacci.validate({ n });
                    if (fibonacci_err) {
                        return res.status(400).json({ errors: fibonacci_err.details.map(d => d.message) });
                    }

                    let fibonacci = calc_fibonacci.calc(n)
                    console.log(`fibonacci ${n} calculated`)
                    res.json({result: fibonacci});
                    break;
                default:
                    break;
            }
        }catch(err){
            res.status(500).json({ error: err.message });
        }
    }
}