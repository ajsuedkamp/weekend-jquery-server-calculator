console.log('JS is working');

$(readyNow);

function readyNow() {
    console.log('readyNow');
    $('#equals').on('click', sendAnswerToServer)
    $('#add').on('click', add);
}


function sendAnswerToServer() {
    $.ajax({
        type: 'POST',
        url: '/answers',
        data: {
            firstNumber: $('#number-one').val(),
            secondNumber: $('number-two').val(),
        }
    })
}

// working addition function
// function add() {
//     let firstNumber = parseInt($('#number-one').val());
//     let secondNumber = parseInt($('#number-two').val());
//     let sum = (firstNumber + secondNumber);
//     $('#answer').append(`
//         ${sum}
//     `)
// }

