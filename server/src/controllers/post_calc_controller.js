module.exports = {
    post: async (req, res) => {
        try{
            console.log('post')
            const {url, parserType} = req.body;

            switch (parserType) {
                case 'test':
                    console.log('test')
                    res.send("test success")
                    break;
            
                default:
                    break;
            }
        }catch(err){
            res.status(500).json({ error: error.message });
        }
    }
}