const http = require('http');
const parse = require('url').parse;
const cowsay = require('cowsay');
const server = http.createServer(function (req, res) {
    const url = parse(req.url, true);
    const msg = url.query.msg || 'Hello Node.js!';
    const cow = cowsay.say({text: msg});
    const content = `<html>
    <head>
        <title>cowsay</title>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
        <style>
            pre {
                font-family: 'Inconsolata', monospace;
            }
        </style>
    </head>
    <body>
        <pre>${cow}</pre>
    </body>
</html>`;
    res.end(content);
})
server.listen(process.env.PORT || 5000)
