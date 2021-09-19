const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const express = require("express");

const httpRedirectServer = express();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync('./certificates/key.pem'),
    cert: fs.readFileSync('./certificates/cert.pem')
};

// set up a route to redirect http to https
httpRedirectServer.get('*', (req, res) => {
    res.redirect('https://' + req.headers.host + req.url);
});

httpRedirectServer.listen(80);

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        // TOFIX : deprecated url.parse
        // const baseURL =  'https://' + req.headers.host + '/';
        // const reqUrl = new URL(req.url,baseURL);
        
        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);

    }).listen(443, err => {
        if (err) throw err;
        console.log('> Ready on https://localhost:443');
    });
});