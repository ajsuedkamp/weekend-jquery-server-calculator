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
    const equation = req.body;
    // console.log(req.body);
    equation.sum = parseInt(equation.firstNumber) + parseInt(equation.secondNumber);
    equation.difference = parseInt(equation.firstNumber) - parseInt(equation.secondNumber);
    equation.product = parseInt(equation.firstNumber) * parseInt(equation.secondNumber);
    equation.quotient = parseInt(equation.firstNumber) / parseInt(equation.secondNumber);
    // console.log(equation.sum);
    // console.log(equation.difference);
    // console.log(equation.product);
    // console.log(equation.quotient);

    equationParts.push(equation);
    res.sendStatus(201);
});

app.get('/answers', (req, res) => {
    console.log(req);
    res.send(equationParts);
});


app.listen(port, () => {
    console.log('Listening on port', port);
});