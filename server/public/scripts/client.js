console.log('JS is working');

$(readyNow);

function readyNow() {
    console.log('JQ');
    $('#add').on('click', addition);
    $('#subtract').on('click', subtraction);
    $('#multiply').on('click', multiplication);
    $('#divide').on('click', division);
    $('#equals').on('click', sendEquationToServer);
    $('#clear').on('click', clear);
    getEquations();
}

function clear() {
    $('#number-one').val('');
    $('#number-two').val('')
}

let mathOperator = '';
let solution = '';

function addition(){
    mathOperator = '+';
    console.log(mathOperator);
}

function subtraction(){
    mathOperator = '-';
    console.log(mathOperator);
}

function multiplication(){
    mathOperator = '*';
    console.log(mathOperator);
}

function division(){
    mathOperator = '/';
    console.log(mathOperator);
}

function sendEquationToServer() {
    $.ajax({
        type: 'POST',
        url: '/equation',
        data: {
            firstNumber: $('#number-one').val(),
            secondNumber: $('#number-two').val(),
            operator: mathOperator,
            answer: solution
        }
    }).then(function (response) {
        $('#answer').empty();
        $('#answer').append(`
            ${response.answer}`);
        getEquations();
    });
}

function getEquations() { 
    $.ajax({
        method: 'GET',
        url: '/answers',
    }).then(function(response) {
        $('#equations').empty();        // $('#answer').append(`
        //     ${response[response.length - 1].answer}`);  //NOT NEEDED
        for(let equation of response) {
            $('#equations').append(`
            <li>
            ${equation.firstNumber} ${equation.operator} ${equation.secondNumber} = ${equation.answer}
            </li>
            `);
        }
    });
}

