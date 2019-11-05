import { express } from 'express';
import { compression } from 'compression';
import { path } from 'path';

const app = express();

app.use(express.static(__dirname + '/angularapp'));
app.use(compression);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/angularapp/index.html'));
});

app.listen(process.env.PORT || 8080);
