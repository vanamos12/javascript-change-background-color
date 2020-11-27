const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                 'A', 'B', 'C', 'D', 'E', 'F']
const NUMBER_HEX_SYMBOLS = 16

function randomHexNumber(){
    return letters[Math.floor(Math.random() * (NUMBER_HEX_SYMBOLS - 1))]
}

function generateRandomHexColor(){
    let color = '#'
    for(let i=0; i<6; i++){
        color += randomHexNumber()
    }
    return color
}

$('body').css('background-color', generateRandomHexColor())

$('.col button').click(function(){
    $('body').css('background-color', generateRandomHexColor())
});