// Third part:
console.log('Script file is loaded');

$('h1').html('This is done by <em>JavaScript!</em>');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

let name = 'Levi';
let age = 20;

function myLittleFunction() {
    $('main').append('<p>A p is appended in the main</p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});

// Single line comment

/*
Multiple
lines
of comments
*/

// First part:

