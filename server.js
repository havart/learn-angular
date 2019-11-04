import * as express from "express";
import * as path from "path";

const app = express();

app.use(express.static(__dirname + '/dist/learn-angular-change-detaction'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/learn-angular-change-detaction/index.html'));
});

app.listen(process.env.PORT || 8080);