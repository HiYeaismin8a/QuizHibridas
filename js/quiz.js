/*consultando los elementos del html */
const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');

/*quiz data */
const quizData = [
  {
    question: 'Es un Framework que nacio como libreria para la web',
    a: 'Flutter',
    b: 'Xamarin',
    c: 'React Native',
    correct: 'c',
  },
  {
    question: 'Este Framework puede ser montado usando React, Angular o Vue como auxiliares',
    a: 'Xamarin',
    b: 'Ionic',
    c: 'Apache Cordova',
    correct: 'b',
  },
  {
    question: 'Define a las aplicaciones hibridas',
    a: 'Son aplicaciones hechas para un hardware predefinido',
    b: 'Son aplicaciones web con media querys',
    c: 'Son aplicaciones generales hechas para funcionar en cualquier dispositivo',
    correct: 'c',
  },
  {
    question: 'Cual de los siguientes escenarios es mejor para las aplicaciones hibridas',
    a: 'Se desea crear una app que sea distribuible para Android y IOS',
    b: 'Se desea construir una webapp ',
    c: 'Se desea crear una app que solo funcione en Android',
    correct: 'a',
  },
  {
    question: 'Cual de las siguientes tecnologias nos permite trabajar mejor con el hardware de un dispositivo objetivo',
    a: 'App Nativa',
    b: 'App Hibrida',
    c: 'WebApp',
    correct: 'a',
  },
  {
    question: 'Las aplicaciones nativas hacen mas facil la reutilización de codigo',
    a: 'Verdadero',
    b: 'Falso',
    c: '¿Qué es una aplicación nativa?',
    correct: 'b',
  },
  {
    question: 'Este tipo de aplicaciones son mas dificiles de manejar al distribuirse en varios SO',
    a: 'App Nativa',
    b: 'App Hibrida',
    c: 'No lo sé',
    correct: 'a',
  },
  {
    question: 'Implican un ahorro en el tiempo de desarrollo y distribución',
    a: 'App Nativa',
    b: 'App Hibrida',
    c: 'No lo sé',
    correct: 'b',
  },
  {
    question: 'Tiene una ruta de aprendizaje mas sencilla',
    a: 'Tecnologias Hibridas',
    b: 'Tecnologias Nativas',
    c: 'No lo sé',
    correct: 'a',
  },
  {
    question: 'Tiene la peor velocidad de ejecución y respuesta',
    a: 'App Nativa',
    b: 'App Hibrida',
    c: 'No lo sé',
    correct: 'b',
  },
];


let index = 0;
let score = 0;
//Obtener la respuesta seleccionada
function getSelected() {
  let ans = undefined;
  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}
//Quitar la seleccion de todas las respuestas
function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}
//Cargar las preguntas
function getquiz() {
  deselectans();
  question.innerText = quizData[index].question;
  a.innerText = quizData[index].a;
  b.innerText = quizData[index].b;
  c.innerText = quizData[index].c;
}
//Empezar el juego
function startquiz() {
  btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        score++;
      }
    }
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
      alert('Puntuación :' + score);
      location.reload();
    }
  });
}
getquiz();
startquiz();