const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});

router.get('/userFilter', (req, res) => {
    fs.readFile('server/db/userFilter.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});

router.post('/', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            const newCart = JSON.stringify(JSON.parse(data).list.push(req.body));
            fs.writeFile('server/db/userCart.json', newCart, (err) => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
                } else {
                    res.send(JSON.stringify({ result: 1 }))
                }
            });
        }
    });
});

module.exports = router;