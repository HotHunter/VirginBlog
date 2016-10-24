/**
 * Created by Erum on 16/10/24.
 */
var router = require('express').Router();

router.get('/', function (req, res, next) {
    res.end('Hello');
});

module.exports = router;