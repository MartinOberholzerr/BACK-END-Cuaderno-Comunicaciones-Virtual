var notifications = [
    'general',
    'individual',
    'retiros',
    'boletin'
];
var stateNotifications = [
    'visto',
    'no-visto'
];
var stateHourNotifications = [
    '00:00:00',
    '01/01/01'
];
var mensaje = [
    'Escribe un mensaje'
];
var log = true;
if (log = false) {
    console.log("Bienvenido");
}
else {
    console.log("Valida tu usuario");
}
//---------------------------------------------------------------------------------------
var input = document.getElementById('my-input');
var buttonSend = document.getElementById('buttonSend');
buttonSend.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.textContent = input.value;
    document.body.appendChild(paragraph);
});
//Escribir en el html
