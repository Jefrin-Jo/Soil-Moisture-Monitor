var fs = require("fs");
var path = require("path");

module.exports = function (context, req) {
let index = path.join(
    context.executionContext.functionDirectory,
    "index.html"
);
fs.readFile(index, "utf8", function (err, data) {
    if (err) {
        console.log(err);
        context.done(err);
        return;
    }
    context.res = {
        status: 200,
        headers: {
            "Content-Type": "text/html",
        },
        body: data,
    };
    context.done();
    });
};