 class Quiz {

  #score = 0;
  #prevQuestionNo = -1;
  #currQuestionNo = 0;
  #currChoices = document.getElementsByClassName("choice");
  #questions = [["Which of the following is not a programming language?", 3], 
                ["Which object in OOP promotes code reusability?", 0],
               [ "What is the file extenstion for c++ source code files?", 1]];

  #choices = [["C++", "HTML", "CSS", "Both B and C"],
              ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], 
              [".c++", ".cpp", ".cpl", "none of the above"]];

  
  #nextBtn = document.getElementById("next-btn");
  #scoreLabel = document.getElementById("curr-score");
  #quizHdr = document.getElementById("right-cont-hdr");
  #questionPar = document.getElementById("question");
  

  Quiz() {

    if(this.#currQuestionNo != this.#prevQuestionNo) {

      if(this.#currQuestionNo == 0)
        this.displayAndChoose();
      
      this.#nextBtn.onclick = this.displayAndChoose.bind(this);

    }
      
    else
      alert("Please choose an answer");
  
  }

  displayAndChoose() {   

    if(this.#currQuestionNo >= this.#questions.length) {

      alert(`Your answers are submitted successfully \n score: ${this.#score} / ${this.#currQuestionNo}`);
      return;

    }

    let ind = this.#currQuestionNo;
    this.#prevQuestionNo = this.#currQuestionNo;
  
    this.#quizHdr.innerHTML = `Question ${ind + 1}`;
    this.#questionPar.innerHTML = this.#questions[ind][0];

    for(let j = 0; j < 4; ++j) {

      this.#currChoices[j].innerHTML = this.#choices[ind][j];
      this.#currChoices[j].onclick = this.isCorrect.bind(this, ind, j);
      this.#currChoices[j].style.border = "3px solid black";

    }

    if(this.#currQuestionNo == this.#questions.length)
      this.#nextBtn.innerHTML = "Submit";

  }

  isCorrect(ind, choosenAnswer) {

    this.#currQuestionNo++;

    let correct = false;
    let correctAnswer = this.#questions[ind][1];

    if(choosenAnswer == correctAnswer) {

      correct = true;
      document.getElementById(`choice${choosenAnswer + 1}`).style.border = "5px solid green";

    }        

    else {

      document.getElementById(`choice${choosenAnswer + 1}`).style.border = "5px solid red";
      document.getElementById(`choice${correctAnswer + 1}`).style.border = "5px solid green";

    }
    this.#score += correct;
    this.#scoreLabel.innerHTML = `${this.#score} / ${this.#currQuestionNo}`;
  }

};

q = new Quiz();
q.Quiz();