var wins = 0;
var losses = 0;

var questionsArray = {

    question1: {
        question: "Who designed the dress that Lady Gaga wore at the 2018 Venice Film Festival?",
        answer1: "Versace",
        answer2: "Prada",
        answer3: "Valentino",
        //   above is correct
        answer4: "Chanel",
        answer5: "Dolce and Gabana",
    },
    question2: {
        question: "Name Lady Gaga’s co-star in Telephone (2009).",
        answer1: "Ariana Grande",
        answer2: "Jessie J.",
        answer3: "Banks",
        answer4: "Beyonce",
        // above is correct
        answer5: "Rihanna",
    },
    question3: {
        question: "What nonprofit organization did Lady Gaga begin?",
        answer1: "You Are Who You Are",
        answer2: "Born This Way",
        // above is correct
        answer3: "Suck It Up, It Gets Better",
        answer4: "Big Monster, Little Monster",
        answer5: "You and I",
    },
    question4: {
        question: "What production has Lady Gaga NOT been a part of?",
        answer1: "American Horror Story",
        answer2: "Saturday Night Live",
        answer3: "RuPaul’s Drag Race",
        answer4: "The Simpsons",
        answer5: "Family Guy",
        // above is correct
    },

    time: 30,



    start: function () {
        var counter = setInterval(questionsArray.count, 1000);
        if (questionsArray.time < 0) {
            questionsArray.results();
            clearInterval(counter);
        }

    },
    timeConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },
    stop: function () {
        var currentTime = timeConverter(questionsArray.time);
        if (questionsArray.time < 0) {
            questionsArray.results();
            clearInterval(currentTime);
        }
    },
    count: function () {
        questionsArray.time--;
        currentTime = questionsArray.timeConverter(questionsArray.time);
        $("#timer").html("<h3>" + currentTime + "</h3>");
        if (questionsArray.time < 0) {
            questionsArray.results();
            clearInterval(currentTime);
        }
    },

    displayFirstQuestion: function () {
        $("#question").html("<h2>" + questionsArray.question1.question + "</h2>");
        $("#a1").html("<p id='a1'>" + questionsArray.question1.answer1 + "</p>");
        $("#a2").html("<p id='a2'>" + questionsArray.question1.answer2 + "</p>");
        $("#a3").html("<p id='a3'>" + questionsArray.question1.answer3 + "</p>");
        $("#a4").html("<p id='a4'>" + questionsArray.question1.answer4 + "</p>");
        $("#a5").html("<p id='a5'>" + questionsArray.question1.answer5 + "</p>");

        $("#a3").click(function () {
            wins++;
            console.log("correct answer 1 clicked");
            alert("Correct!");
            questionsArray.nextQuestion();
        });
        $("#a2, #a1, #a4, #a5").click(function () {
            if ($("#a3").data('clicked')) {
                alert("Correct!");
                questionsArray.nextQuestion();
            }
            else {
                losses++;
                console.log("Incorrect answer 1 clicked");
                alert("Incorrect!");
                questionsArray.nextQuestion();
            }
            losses++;
            console.log("Incorrect answer 1 clicked");
            alert("Incorrect!");
            questionsArray.nextQuestion();
        });
    },

    nextQuestion: function () {
        $("#question, #a1, #a2, #a3, #a4, #a5").html(null);
        $("#2a3").data('clicked', null);
        $("#2question").html("<h2>" + questionsArray.question2.question + "</h2>");
        $("#2a1").html("<p id='2a1'>" + questionsArray.question2.answer1 + "</p>");
        $("#2a2").html("<p id='2a2'>" + questionsArray.question2.answer2 + "</p>");
        $("#2a3").html("<p id='2a3'>" + questionsArray.question2.answer3 + "</p>");
        $("#2a4").html("<p id='2a4'>" + questionsArray.question2.answer4 + "</p>");
        $("#2a5").html("<p id='2a5'>" + questionsArray.question2.answer5 + "</p>");

        $("#2a4").click(function () {
            wins++;
            console.log("correct answer 2 clicked");
            alert("Correct!");
            questionsArray.thirdQuestion();
        });
        $("#2a1, #2a2, #2a5, #2a3").click(function () {
            if ($("#2a4").data('clicked')) {
                alert("Correct!");
                questionsArray.thirdQuestion();
            }
            else {
                losses++;
                console.log("incorrect answer 2 clicked");
                alert("Incorrect!");
                questionsArray.thirdQuestion();
            }
        });
    },

    thirdQuestion: function () {
        $("#2question, #2a1, #2a2, #2a3, #2a4, #2a5").html(null);
        $("#3a4").data('clicked', null);
        $("#3question").html("<h2>" + questionsArray.question3.question + "</h2>");
        $("#3a1").html("<p id='3a1'>" + questionsArray.question3.answer1 + "</p>");
        $("#3a2").html("<p id='3a2'>" + questionsArray.question3.answer2 + "</p>");
        $("#3a3").html("<p id='3a3'>" + questionsArray.question3.answer3 + "</p>");
        $("#3a4").html("<p id='3a4'>" + questionsArray.question3.answer4 + "</p>");
        $("#3a5").html("<p id='3a5'>" + questionsArray.question3.answer5 + "</p>");


        $("#3a2").click(function () {
            wins++;
            console.log("correct answer 3 clicked");
            alert("Correct!");
            questionsArray.lastQuestion();
        });
        $("#3a1, #3a4, #3a5, #3a3").click(function () {
            if ($("#3a2").data('clicked')) {
                alert("Correct!");
                questionsArray.lastQuestion();
            }
            else {
                losses++;
                console.log("incorrect answer 3 clicked");
                alert("Incorrect!");
                questionsArray.lastQuestion();
            }
        });
    },

    lastQuestion: function () {
        $("#3question, #3a1, #3a2, #3a3, #3a4, #3a5").html(null);
        $("#4a2").data('clicked', null);
        $("#4question").html("<h2>" + questionsArray.question4.question + "</h2>");
        $("#4a1").html("<p id='4a1'>" + questionsArray.question4.answer1 + "</p>");
        $("#4a2").html("<p id='4a2'>" + questionsArray.question4.answer2 + "</p>");
        $("#4a3").html("<p id='4a3'>" + questionsArray.question4.answer3 + "</p>");
        $("#4a4").html("<p id='4a4'>" + questionsArray.question4.answer4 + "</p>");
        $("#4a5").html("<p id='4a5'>" + questionsArray.question4.answer5 + "</p>");

        $("#4a5").click(function () {
            wins++;
            console.log("correct answer 4 clicked");
            alert("Correct!");
            $("#timer").html(null);
            questionsArray.results();
        });
        $("#4a1, #4a2, #4a4, #4a3").click(function () {
            if ($("#4a5").data('clicked')) {
                alert("Correct!");
                $("#timer").html(null);
                questionsArray.results();
            }
            else {
                losses++;
                console.log("correct answer 4 clicked");
                alert("Incorrect!");
                $("#timer").html(null);
                questionsArray.results();
            }
        });

    },
    results: function () {
        $("#timer").html(null);
        $("#complete").html("<h2> Trivia completed! </h2>");
        $("#correct").html("<p id='a1'> Correct answers: " + wins + "</p>");
        $("#incorrect").html("<p id='a2'> Incorrect answers: " + losses + "</p>");
        $("#again").html("<p> Refresh the page if you want to play again </p>");
        $("#a4, #a5, #2question, #2a1, #2a2, #2a3, #2a4, #2a5, #3question, #3a1, #3a2, #3a3, #3a4, #3a5, #4question, #4a1, #4a2, #4a3, #4a4, #4a5").html(null);
        questionsArray.stop();
    },
}

$("#start-button").click(function () {
    $(this).hide();
    questionsArray.start();
    $("#question").on('click', questionsArray.displayFirstQuestion());
})



