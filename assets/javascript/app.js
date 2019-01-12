//create main page with button press to start
//on press populate window with film questions and timer
//30 second timer
//when timer runs out,run function to change div to show tallied up correct answers, wrong answers, left blank.
//add restart button with showquestions function attached
$(document).ready(function () {

    var questions = [
        {
            question: "What famous director scared audiences out of swimming in 1975?",
            answers: {
               a : "Soderberg",
               b : "Lucas",
               c : "Speilberg",
               d : "Howard"
            },
            validAnswer: 'c'
        },

        {
            question: "Quentin Tarantino first bursted on the scene with what breakout film at the Sundance Film Festival?",
            answers: {
                a: "Kill Bill",
                b: "Pulp Fiction",
                c: "Jackie Brown",
                d: "Reservior Dogs"
            },
            validAnswer: 'd'
        },

        {
            question: "The first feature to use technicolor was...",
            answers: {
               a: "Singing in the Rain",
               b: "Wizard of Oz",
               c: "Gone With The Wind",
               d: "Mary Poppins"
            },
            validAnswer: 'b'
        },

        {
            question: "What famous actor is known for his memorable portrayal of an evil oil magnate who says 'I Drink your milkshake!",
            answers: {
               a: "Daniel Day Lewis",
               b: "Robert Deniro",
               c: "Robert Redford",
               d: "Phillip Seymour Hoffman"
            },
            validAnswer: 'a'
        },

        {
            question: "What director is known for doing over one hundred takes for a single scene and has made the films 'Zodiac', 'Alien 3', and 'The Game' ",
            answers: {
                a:"Frank Darabont",
                b:"David Fincher",
                c:"Darren Aronofsky",
                d:"David O. Russel"
            },
            validAnswer: 'b'
        }

    ];

    var userPick;
    var timeLeft = 30;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var question = 0;
    var count=30;
    var results = {};
    var counter;

    $('.start').click(function () {
        $(this).hide();
        counter = setInterval(timer, 1000);
        showQuestions();
    });

    function timer() {
        count--;
        if (count == 0) {
            clearInterval(counter);
           // return;
            showResults();
            function showResults(){
                $('#quiz').empty();
                $('#timer').html('');
                for(var i = 0; i < questions.length; i ++) {
                    if( results[i] == questions[i].validAnswer){
                        correctAnswer++
                    }else {
                        incorrectAnswer--
                    }
                }
                $('#quiz').html(`<div>You had ${correctAnswer} correct answers.</div><br><div>You had ${incorrectAnswer} wrong answers<br><button id=retry attr= showQuestions()>Retry?</button>`)
            }
        }

        $("#timer").html("Time remaining: " + count + " seconds");
    }

    function showQuestions() {

        for( var i = 0; i < questions.length; i++){
            $('#quiz').append(`<div> ${questions[i].question} </div>`);
            $('#quiz').append(`<div data-number=${i} data-option="a" class="option"> ${questions[i].answers.a}</div>`);
            $('#quiz').append(`<div data-number=${i} data-option="b" class="option"> ${questions[i].answers.b}</div>`);
            $('#quiz').append(`<div data-number=${i} data-option="c" class="option"> ${questions[i].answers.c}</div>`);
            $('#quiz').append(`<div data-number=${i} data-option="d" class="option"> ${questions[i].answers.d}</div>`);
         }
         
         $('.option').on('click', function(){
           var option = $(this).attr('data-option');
           var questionNumber = $(this).attr('data-number');
           results[questionNumber] = option;
           console.log(results);
        })
        $('#quiz').append('<button id="submit">Submit</button>')
        $('#submit').on('click', function showResults(){
            $('#quiz').empty();
            $('#timer').text("Timeout!")
            for(var i = 0; i < questions.length; i ++) {
                if( results[i] == questions[i].validAnswer){
                    correctAnswer++
                }else {
                    incorrectAnswer--
                }
            }
            // var newButton = $('<button>');
            // newButton.addClass("Retry");
            // newButton.text("Retry?");
            // $('.rety').on("click", showQuestions());
            // $('#quiz').append(newButton);
            
            $('#quiz').html(`<div>You had ${correctAnswer} correct answers.</div><br><div>You had ${incorrectAnswer} wrong answers<br><button class=retry attr= showQuestions()>Retry?</button>`)
                // $('.retry').on( "click", showQuestions());
            
        });
        
     }

        // for (var i = 0; i < questions.length; i++){
        //     let QADiv = $('<div>');
        //     let question = $('<div>');
        //     let answers = $('<div>');
        //     let choices = $('<div>');
        //     // question.append($('<h1>' + questions[i].question + '</h1>'));
        //     // template literal
        //     question.append($(`<h1>${i+1}: ${questions[i].question}</h1>`));
        //     answers.append($(`<h3>${i+1}: ${questions[i].answers}</h3>`));
        //     QADiv.append(question);
        //     choices.append(answers);
        //     $('#quiz').append(QADiv);
        //     $('#choices_div').append(choices);
        // }

        //     $("#quiz").html(questions[i].question);

        // var answerArr = questions[i].validAnswer;
        // var buttonsArr = [];

        // for (let i = 0; i < answerArr.length; i++) {
        //     var button = $('<button>');
        //     button.text(answerArr[i]);
        //     button.attr('data-id', i);
        //     $('#choices_div').append(button);
        // }

        // $('#choices_div').on('click', 'button', function (e) {
        //     userPick = $(this).data("id");
        //     questions[0].validAnswer;
        //     if (userPick != questions[i].validAnswer) {

        //         $('#choices_div').text("Wrong Answer!");
        //         incorrectAnswer++;

        //     } else if (userPick === questions[i].validAnswer) {
        //         $('#choices_div').text("Correct!");
        //         correctAnswer++;

        //     }

        //     var submitButton = $('<button>');
        //     button.text("Sumbit answers");
        //     button.attr(showResults());
        //     $('#submit').append(button);
        
        //     function showResults() {
        //         $("#quiz").html("Correct Answers:" + correctAnswer, "Incorrect Answers:" + incorrectAnswer)
        //     }
        //     showResults();
        // })
    })

// })

