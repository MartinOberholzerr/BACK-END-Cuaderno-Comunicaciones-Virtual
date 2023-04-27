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




//Personales
const input = document.getElementById('my-input') as HTMLInputElement;
const buttonSend = document.getElementById('buttonSend') as HTMLInputElement;
const containerText = document.getElementById('containerText') as HTMLDivElement;

buttonSend.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = input.value;
    containerText.appendChild(paragraph);
});
//Comunicaciones

const inputG = document.getElementById('my-inputG') as HTMLInputElement;
const buttonSendG = document.getElementById('buttonSendG') as HTMLInputElement;
const containerTextG = document.getElementById('containerTextGeneral') as HTMLDivElement;
 
buttonSendG.addEventListener('click', () => {
    const paragraphG = document.createElement('p');
    paragraphG.textContent = inputG.value;
    containerTextG.appendChild(paragraphG);
});
//Generar Nota
const inputN = document.getElementById('myInputN') as HTMLInputElement;
const buttonSendN = document.getElementById('buttonSendN') as HTMLInputElement;
const containerTextN = document.getElementById('containerTextNotas') as HTMLDivElement;
 
buttonSendN.addEventListener('click', () => {
    const paragraphN = document.createElement('p');
    paragraphN.textContent = inputN.value;
    containerTextN.appendChild(paragraphN);
});
//Retiros
const materia = document.getElementById('materia') as HTMLInputElement;
const hora = document.getElementById('hora') as HTMLInputElement;
const dia = document.getElementById('dia') as HTMLInputElement;
const mes = document.getElementById('mes') as HTMLInputElement;
const buttonSendR = document.getElementById('buttonSendR') as HTMLInputElement;
const containerTextMateria = document.getElementById('containerTextMateria') as HTMLDivElement;
const containerTextHora = document.getElementById('containerTextHora') as HTMLDivElement;
const containerTextDia = document.getElementById('containerTextDia') as HTMLDivElement;
const containerTextMes = document.getElementById('containerTextMes') as HTMLDivElement;
 
buttonSendR.addEventListener('click', () => {
    const paragraphMateria = document.createElement('p');
    const paragraphHora = document.createElement('p');
    const paragraphDia = document.createElement('p');
    const paragraphMes = document.createElement('p');
    paragraphMateria.textContent = materia.value;
    paragraphHora.textContent = hora.value;
    paragraphDia.textContent = dia.value;
    paragraphMes.textContent = mes.value;
    containerTextMateria.appendChild(paragraphMateria);
    containerTextHora.appendChild(paragraphHora);
    containerTextDia.appendChild(paragraphDia);
    containerTextMes.appendChild(paragraphMes);
});

//InformacionPeronal
interface Persona {
    nombre: string;
    apellido: string;
    escuela: string;
    ano: string;
    division: string;
    id: number;
  }
  
  const personas: Persona[] = [
    { nombre: 'Juan', apellido: 'Escobazo', escuela: 'EPET20', ano: '6to', division: '2da', id: 1 },
    { nombre: 'Pablo', apellido: 'Peton', escuela: 'EPET20', ano: '6to', division: '2da', id: 2 },
    { nombre: 'Gian', apellido: 'Pete', escuela: 'EPET20', ano: '6to', division: '2da', id: 3 },
    { nombre: 'Luca', apellido: 'Fuentes', escuela: 'EPET20', ano: '6to', division: '2da', id: 4}
  ];
  
  const personasDiv = document.getElementById('personas');
  if (personasDiv) {
    personas.forEach(persona => {
      if (persona.id === 1) {
        const personaP = document.createElement('p');
        personaP.textContent = ` ${persona.nombre}, ${persona.apellido},  ${persona.escuela}, ${persona.ano}, ${persona.division}`;
        personasDiv.appendChild(personaP);
      }
    });
  }