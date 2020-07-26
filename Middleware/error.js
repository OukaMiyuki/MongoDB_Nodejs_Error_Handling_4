const winston = require('winston');
module.exports = function(err, req, res, next){//error middleware function
    winston.error(err.message, err);
    //error = logging eror
    //warn = warning
    //info = storing information
    //verbose
    //debug
    //silly
    res.status(500).send('An error occured!');
}