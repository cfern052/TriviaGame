//create main page with button press to start
//on press populate window with film questions and timer
//30 second timer
//when timer runs out,run function to change div to show tallied up correct answers, wrong answers, left blank.
$(document).ready(function () {
  
    var questions =[
       {
           question: "What famous director scared audiences out of swimming in 1975?",
           answers:[
             "Soderberg",
             "Lucas",
             "Speilberg",
            "Howard"
           ],
           validAnswer: 2 
       },

       {
           question: "Quentin Tarantino first bursted on the scene with what breakout film at the Sundance Film Festival?",
           answers:[
                "Kill Bill",
                "Pulp Fiction",
                "Jackie Brown",
                "Reservior Dogs"
           ],
           validAnswer: 3
       },

       {
       question: "The first feature to use technicolor was...",
       answers:[
            "Singing in the Rain",
           "Wizard of Oz",
            "Gone With The Wind",
            "Mary Poppins"
       ],
       validAnswer: 1
       },

       {
           question: "What famous actor is known for his memorable portrayal of an evil oil magnate who says 'I Drink your milkshake!",
           answers:[
                "Daniel Day Lewis",
                "Robert Deniro",
                "Robert Redford",
                "Phillip Seymour Hoffman"
           ],
           validAnswer: 0
       },

       {
           question: "What director is known for doing over one hundred takes for a single scene and has made the films 'Zodiac', 'Alien 3', and 'The Game' ",
           answers:[
            "Frank Darabont",
            "David Fincher",
            "Darren Aronofsky",
            "David O. Russel"
           ],
           validAnswer: 1
        }

   ];

    var userPick;
    var timeLeft = 30;
    var correctAnswer = 0;
    var incorrectAnswer= 0;
    var question= 0;
   
   
$('.start').click(function(){
//         function clearBox(){
//    $('.quizWrapper').innerHTML = "";
// };


$(this).hide();
count = setInterval(timer, 3000); 
showQuestions();
}); 

function timer(){
    count--;
if (count <= 0) {
 clearInterval(count);
//  showResults();
}

 $("#timer").html("Time remaining: " + count + " seconds");
}

function showQuestions(){

    $("#quiz").html(questions[0].question);
    question ++;

    var answerArr = questions[0].answers;
    var buttonsArr = []; 

    for (let i = 0; i < answerArr.length; i++) {
        var button = $('<button>');
        button.text(answerArr[i]);
        button.attr('data-id', i);
        $('#choices_div').append(button);
       }

       $('#choices_div').on('click', 'button', function(e){
        userPick = $(this).data("id");
        disneyQuestion[0].validAnswer;
        if(userPick != disneyQuestion[0].validAnswer) {
       
        $('#choices_div').text("Wrong Answer!");
        incorrectAnswer++;
       
       } else if (userPick === disneyQuestion[0].validAnswer) {
       $('#choices_div').text("Correct!");
       correctAnswer++;
       
       }

    function showResults(){
 $("#quiz").html("Correct Answers:" + correctAnswer, "Incorrect Answers:" + incorrectAnswer)
    }
showResults
})
}
})

