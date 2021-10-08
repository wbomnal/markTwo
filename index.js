var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your Name? ");
console.log ("Welcome to my First App, " + userName + ". Lets play a game called - WORLD OF FANGS!");

var score = 0

var highestScore = [

{ name: "Wilson",
  score: 4,
},
{  name: "Mamata",
  score: 4,
},
{  name: "Inder",
  score: 3,
}
]
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())   
  {
  console.log("Correct ");
  score = score + 1;
  }
  else
  {
  console.log("Incorrect ");
  score = score - 1;
  }
  
console.log("Total current Score "+ score);
console.log("-------------------");
}

var questions = [{
    question: "Who owns Tesla? A: Bill Gates B: Vijay Mallya C: Jack Ma D:  Elon Musk ",
  answer: "D"
  },
  {
    question: "Jio is subsidery of?  A: Relaince B: Birla C: Tata D: Chaowdary&Sons  ",
        answer: "A"
  },
  {
    question: "Jeff Bezos of the founder of the company? A: E-bay B: Amazon C: Ali Baba D: Flipkart  ",
    answer: "B"
  },
  {
    question: "Which among these Apps are not owned by Facebook? A: Facebook B: Whatsapp C: Twitter D: Instagram  ",
  answer: "C"
  }];

for(var i=0; i < questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

function showScores() {
console.log("Score board :" )
 highestScore.map(score => console.log(score.name, " : ", score.score))

}

showScores()