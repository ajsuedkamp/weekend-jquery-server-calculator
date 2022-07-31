console.log('JS is working');

$(readyNow);

function readyNow() {
    console.log('JQ');
    $('#add').on('click', addition);
    $('#subtract').on('click', subtraction);
    $('#multiply').on('click', multiplication);
    $('#divide').on('click', division);
    $('#equals').on('click', sendEquationToServer);
}

let mathOperator = '';

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
            operator: mathOperator
        }
    })
}


