module.exports = function (context, req, connection) {
    // Add your own auth logic here
    context.res = { body: connection };
    context.done();
};