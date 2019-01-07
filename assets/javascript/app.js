//create main page with button press to start
//on press populate window with film questions and timer
//30 second timer
//when timer runs out,run function to change div to show tallied up correct answers, wrong answers, left blank.
$(document).ready(function () {
  
    var questions =[
       {
           question: "What famous director scared audiences out of swimming in 1975?",
           answers:{
            A: "Soderberg",
            B: "Lucas",
            C: "Speilberg",
            D: "Howard"
           },
           correctAnswer: "C" 
       },

       {
           question: "Quentin Tarantino burst on the scene with what breakout film at the Sundance Film Festival?",
           answers:{
               A: "Kill Bill",
               B: "Pulp Fiction",
               C: "Jackie Brown",
               D: "Reservior Dogs"
           },
           correctAnswer: "D"
       },

       {
       question: "The first feature to use technicolor film was...",
       answers:{
           A: "Singing in the Rain",
           B: "Wizard of Oz",
           C: "Gone With The Wind",
           D: "Mary Poppins"
       },
       correctAnswer:"B"
       },

       {
           question: "What famous actor is known for his memorable portrayal of an evil oil magnate who says 'I Drink your milkshake!",
           answers:{
               A: "Daniel Day Lewis",
               B: "Robert Deniro",
               C: "Robert Redford",
               D: "Phillip Seymour Hoffman"
           },
           correctAnswer:"A"
       },

       {
           question: "What director is known for doing over one hundred takes for a single scene and has made the films 'Zodiac', 'Alien 3', and 'The Game' ",
           answers:{
            A:"Frank Darabont",
            B:"David Fincher",
            C:"Darren Aronofsky",
            D:"David O. Russel"
           },
           correctAnswer:"B"
        }

   ];

    var timeLeft = 30;
    var score= 0;
   
   
$('.start').click(function(){
        function clearBox(){
    $('.quizWrapper').innerHTML = "";
};

clearBox();
$('.quizWrapper').text("test")
var timeCount = $('#timer');

var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        timeCount.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
    })
});