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
//Personales
var input = document.getElementById('my-input');
var buttonSend = document.getElementById('buttonSend');
var containerText = document.getElementById('containerText');
buttonSend.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.textContent = input.value;
    containerText.appendChild(paragraph);
});
//Comunicaciones
var inputG = document.getElementById('my-inputG');
var buttonSendG = document.getElementById('buttonSendG');
var containerTextG = document.getElementById('containerTextGeneral');
buttonSendG.addEventListener('click', function () {
    var paragraphG = document.createElement('p');
    paragraphG.textContent = inputG.value;
    containerTextG.appendChild(paragraphG);
});
//Generar Nota
var inputN = document.getElementById('myInputN');
var buttonSendN = document.getElementById('buttonSendN');
var containerTextN = document.getElementById('containerTextNotas');
buttonSendN.addEventListener('click', function () {
    var paragraphN = document.createElement('p');
    paragraphN.textContent = inputN.value;
    containerTextN.appendChild(paragraphN);
});
//Retiros
var materia = document.getElementById('materia');
var hora = document.getElementById('hora');
var dia = document.getElementById('dia');
var mes = document.getElementById('mes');
var buttonSendR = document.getElementById('buttonSendR');
var containerTextMateria = document.getElementById('containerTextMateria');
var containerTextHora = document.getElementById('containerTextHora');
var containerTextDia = document.getElementById('containerTextDia');
var containerTextMes = document.getElementById('containerTextMes');
buttonSendR.addEventListener('click', function () {
    var paragraphMateria = document.createElement('p');
    var paragraphHora = document.createElement('p');
    var paragraphDia = document.createElement('p');
    var paragraphMes = document.createElement('p');
    paragraphMateria.textContent = materia.value;
    paragraphHora.textContent = hora.value;
    paragraphDia.textContent = dia.value;
    paragraphMes.textContent = mes.value;
    containerTextMateria.appendChild(paragraphMateria);
    containerTextHora.appendChild(paragraphHora);
    containerTextDia.appendChild(paragraphDia);
    containerTextMes.appendChild(paragraphMes);
});
var personas = [
    { nombre: 'Juan', apellido: 'Escobazo', escuela: 'EPET20', ano: '6to', division: '2da', id: 1 },
    { nombre: 'Pablo', apellido: 'Peton', escuela: 'EPET20', ano: '6to', division: '2da', id: 2 },
    { nombre: 'Gian', apellido: 'Pete', escuela: 'EPET20', ano: '6to', division: '2da', id: 3 },
    { nombre: 'Luca', apellido: 'Fuentes', escuela: 'EPET20', ano: '6to', division: '2da', id: 4 }
];
var personasDiv = document.getElementById('personas');
if (personasDiv) {
    personas.forEach(function (persona) {
        if (persona.id === 1) {
            var personaP = document.createElement('p');
            personaP.textContent = " ".concat(persona.nombre, ", ").concat(persona.apellido, ",  ").concat(persona.escuela, ", ").concat(persona.ano, ", ").concat(persona.division);
            personasDiv.appendChild(personaP);
        }
    });
}
