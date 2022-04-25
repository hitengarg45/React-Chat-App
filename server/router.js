const experss   = require('express');
const router    = experss.Router();

router.get('/', (req, res) => {
    res.send('Server is up and running');
});

module.exports = router;