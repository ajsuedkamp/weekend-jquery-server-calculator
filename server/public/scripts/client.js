console.log('JS is working');

$(readyNow);

function readyNow() {
    console.log('readyNow');
    $('#add').on('click', add);
}



function add() {
    let firstNumber = parseInt($('#number-one').val());
    let secondNumber = parseInt($('#number-two').val());
    let sum = (firstNumber + secondNumber);
    $('#answer').append(`
        ${sum}
    `)
}

