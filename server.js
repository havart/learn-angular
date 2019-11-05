const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/angularapp'));
app.use(compression);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/angularapp/index.html'));
});

app.listen(process.env.PORT || 8080);
