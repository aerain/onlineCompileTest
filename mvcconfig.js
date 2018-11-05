var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var compile = require('./compile');
function mvcConfig (app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/compile', compile);
}

module.exports = mvcConfig;