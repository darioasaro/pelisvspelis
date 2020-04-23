module.exports = routes = app => {
    app.use("/competencias", require('./competencias.js'));
};
