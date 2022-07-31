const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static('server/public'));
app.use(express.urlencoded());

const equationParts = [
    {
        firstNumber: 0,
        secondNumber: 0,
        operator: '+'
    }
]

app.post('/equation', (req, res) => {
    
});


app.listen(port, () => {
    console.log('Listening on port', port);
});