let notifications: string[] = [
    'general',
    'individual',
    'retiros',
    'boletin'
];

let stateNotifications: string[] = [
    'visto',
    'no-visto'

]

let stateHourNotifications: string[] = [
    '00:00:00',
    '01/01/01'
]

let mensaje: string[] = [
    'Escribe un mensaje'
]

let log = true;

if (log = false) {
    console.log("Bienvenido");
  } else {
    console.log("Valida tu usuario");
  }




//---------------------------------------------------------------------------------------
const input = document.getElementById('my-input') as HTMLInputElement;
const buttonSend = document.getElementById('buttonSend') as HTMLInputElement;

buttonSend.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = input.value;
    document.body.appendChild(paragraph);
});
//Escribir en el html



