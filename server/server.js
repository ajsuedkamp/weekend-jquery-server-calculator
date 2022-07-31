const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static('server/public'));
app.use(express.urlencoded());

const equationEntered = [{
    firstNumber: ,
    secondNumber: ,
    operation:
}]

app.post('/answers', (req, res) => {
    const equation = req.body;

});





app.listen(port, () => {
    console.log('Listening on port', port);
});