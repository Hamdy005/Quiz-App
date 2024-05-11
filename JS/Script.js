 class Quiz {

  #score = 0;
  #currQuestionNo = 0;
  #currOptions = document.getElementsByClassName("choice");
  #questions = [ 

    {question: "What kind of language is Javascript?",
    options: ["Object-oriented"," Object-based"," Procedural"," None of the above"],
    answer: 1},

    {question: "How do you define a variable in Javascript?",
    options: [" var", " let", "Both", " None"],
    answer: 2},

    {question: "What methods can display data in Javascript?",
    options: [" document.write()"," console.log()"," window.alert()"," All of the above"],
    answer: 1}

  ]
  
  #scoreLabel = document.getElementById("curr-score");
  #quizHdr = document.getElementById("right-cont-hdr");
  #questionPar = document.getElementById("question");
  

  constructor() {
    this.display();
  }

  display() {   

    if(this.#currQuestionNo >= this.#questions.length) {

      alert(`Your answers are submitted successfully \n score: ${this.#score} / ${this.#currQuestionNo}`);
      return;

    }

    let ind = this.#currQuestionNo;
    let currObject = this.#questions[ind];
  
    this.#quizHdr.innerHTML = `Question ${ind + 1}`;
    this.#questionPar.innerHTML = currObject.question; //GUI
    console.log(`%c + ${currObject.question}`, "color: #4CAF50; font-size: 18px; font-weight: bold") // console

    for(let j = 0; j < 4; ++j) {

      this.#currOptions[j].innerHTML = currObject.options[j];
      this.#currOptions[j].style.border = "3px solid black";
      console.log(`%c ${j + 1}.${currObject.options[j]}`, "color: #2196F3; font-size: 16px;")

    }
    setTimeout(() => {this.choose()}, 500);
  }

  choose() {

    let choosenAnswer = prompt("Choose the correct answer");

    let correct = false;
    let correctAnswer = this.#questions[this.#currQuestionNo].answer;

    if(choosenAnswer == correctAnswer + 1) {

      correct = true;
      document.getElementById(`choice${choosenAnswer}`).style.border = "5px solid green";

    } 
    
    else {

      document.getElementById(`choice${choosenAnswer}`).style.border = "5px solid red";
      document.getElementById(`choice${correctAnswer + 1}`).style.border = "5px solid green";

    }

    this.#score += correct;
    this.#scoreLabel.innerHTML = `${this.#score} / ${++this.#currQuestionNo}`;
    setTimeout(() => {this.display()}, 500);
    
  }

};

new Quiz();
