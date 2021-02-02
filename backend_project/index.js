const http = require('http');
const url = require('url');
const { parse } = require('querystring');
const fs = require('fs');
const path = require('path');
const db = require('./db');

const Notes = db.notes;
const randomstring = require("randomstring");



http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log('server work');
    if (req.method == 'GET') {
        res.end('server work');
    }
    else {
        // POST Method
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let params = JSON.parse(body);
            res.writeHead(200, { "Content-Type": "application/json" });
            if (params.note) {
                let note = params.note;
                note = note.trim();
                console.log(note);
                Notes.create({
                    url: randomstring.generate({
                        length: 24,
                        capitalization : 'lowercase'
                    }),
                    text: note,
                    timestamp: Math.floor(Date.now() / 1000),
                }).then(result => {
                    res.end(JSON.stringify({ 'result': true, "url": result.url }));
                }).catch(err => {
                    console.log(err);
                    res.end(JSON.stringify({ 'result': false, "error": err }));

                });
            }
            else if (params.url) {
                let url = params.url;
                url = url.trim();
                console.log(url);
                Notes.findOne({
                    where: {
                        "url": url
                    }
                })
                    .then(result => {
                        if (result) {
                            res.end(JSON.stringify({ 'result': true, "note": result.text }));
                            // Notes.destroy({where: {id: result.id}}); // if you want delete message!!!
                        }
                        else {
                            res.end(JSON.stringify({ 'result': false, "text": 'note not found' }));
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        res.end(JSON.stringify({ 'result': false, "error": err }));
                    });
            }
        });
    }

}).listen(3500);