import app from './app';
import * as http from 'http';
//-----------------------------------------------------
const PORT = 4000;
app.set('port', PORT);
let server = http.createServer(app);
//-----------------------------------------------------
server.listen(PORT, function () {
    console.log("listening on *:" + PORT);
});
