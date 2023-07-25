//References
let progress = document.querySelector(".progress");

let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let quizArray = [];
let result = document.querySelector("#result-container");
let Data = JSON.parse(localStorage.getItem("userData"));
console.log(Data.quiztype);
//Questions and Options array

if (Data.quiztype == "Js") {
  quizArray = [
    {
      id: "0",
      question: "What is JavaScript primarily used for??",
      options: [
        " Styling web pages",
        "Adding interactivity and dynamic content to web pages",
        "Creating database management systems",
        "Building operating systems",
      ],
      correct: "Adding interactivity and dynamic content to web pages",
    },
    {
      id: "1",
      question: "How do you check the data type of a variable in JavaScript?",
      options: [
        "typeof variableName",
        "checkType(variableName)",
        "typeOf(variableName)",
        "dataType(variableName)",
      ],
      correct: "typeof variableName",
    },
    {
      id: "2",
      question:
        "Which keyword is used to declare a constant variable in JavaScript?",
      options: ["let", "var", "const", "set"],
      correct: "const",
    },
    {
      id: "3",
      question: "How can you create an object in JavaScript?",
      options: [
        "var obj = new Object();",
        "var obj = {};",
        "var obj = Object.create({})",
        "All of the above",
      ],
      correct: "All of the above",
    },
    {
      id: "4",
      question: "What type of language is JavaScript?",
      options: [
        "Compiled language",
        "Interpreted language",
        "Assembly language",
        "Machine language",
      ],
      correct: "Interpreted language",
    },
    {
      id: "5",
      question: "Which of the following is NOT a JavaScript data type?",
      options: [" String", " Float", "Boolean", "Array"],
      correct: "Float",
    },
    {
      id: "6",
      question:
        "Which function is used to print content to the browser's developer console?",
      options: ["console.log()", "print()", "log())", "debug()"],
      correct: "console.log()",
    },

    {
      id: "7",
      question: "The '===' operator in JavaScript checks for:",
      options: [
        "Value equality only",
        "Type equality only",
        "Value and type equality",
        "None of the above",
      ],
      correct: "Value and type equality",
    },

    {
      id: "8",
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: [
        "It refers to the current HTML element.",
        "It refers to the previous function in the call stack.",
        "It refers to the current object in the context.",
        "It refers to the global window object.",
      ],
      correct: "It refers to the current object in the context.",
    },

    {
      id: "9",
      question:
        " Which built-in method is used to convert a string to all lowercase letters?",
      options: [
        "toLowerCase()",
        "lowerCase()",
        "changeCase('lower')",
        "allLowerCase()",
      ],
      correct: "toLowerCase",
    },
  ];
} else if (Data.quiztype == "Css") {
  quizArray = [
    {
      id: "0",
      question: "What is CSS?",
      options: [
        " CSS is a style sheet language",
        "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        "CSS is the language used to style the HTML documents",
        "All of the mentioned",
      ],
      correct: "All of the mentioned",
    },

    {
      id: "1",
      question:
        "Which of the following CSS selectors are used to specify a group of elements?",
      options: ["tag", "id", "class", "++both class and tag"],
      correct: "class",
    },
    {
      id: "2",
      question:
        "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
      options: ["HTML", "PHP", "CSS", "Ajax"],
      correct: "CSS",
    },
    {
      id: "3",
      question:
        "Which of the following CSS framework is used to create a responsive design?",
      options: ["django", "rails", "larawell", "bootstrap"],
      correct: "bootstrap",
    },
    {
      id: "4",
      question:
        "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
      options: [" tag", " id", "class", "both class and tag"],
      correct: "id",
    },

    {
      id: "5",
      question:
        "Which of the following CSS property is used to make the text bold?",
      options: [
        "text-decoration: bold",
        "font-weight: bold",
        "font-style: bold",
        "text-align: bold",
      ],
      correct: "font-weight: bold",
    },

    {
      id: "6",
      question:
        "Which of the following CSS style property is used to specify an italic text?",
      options: ["style", "font", "font-style", "@font-face"],
      correct: "font-style",
    },

    {
      id: "7",
      question:
        "Which of the following are the CSS Extension Prefixes for Webkit?",
      options: ["-chrome", "-web", "-o-", "-webkit"],
      correct: "-webkit",
    },
    {
      id: "8",
      question:
        "Which of the following are the CSS Extension Prefixes for Webkit?",
      options: ["-chrome", "-web", "-o-", "-webkit"],
      correct: "-webkit",
    },
    {
      id: "9",
      question:
        "Which of the following are the CSS Extension Prefixes for Webkit?",
      options: ["-chrome", "-web", "-o-", "-webkit"],
      correct: "-webkit",
    },
  ];
} else if (Data.quiztype == "Html") {
  quizArray = [
    {
      id: "0",
      question: "What is HTML?",
      options: [
        " HyperText Marketup Language",
        "HyperText Mockup Language",
        "HyperTest Markup Language",
        "HyperText Markup Language",
      ],
      correct: "HyperText Markup Language",
    },
    {
      id: "1",
      question: "What are HTML tags?",
      options: [
        "for placing the elements in the proper and appropriate format.",
        "in an HTML file by using indents",
        "are the properties that can be added to an HTML tag.",
        "is a coding style.",
      ],
      correct: "for placing the elements in the proper and appropriate format.",
    },
    {
      id: "2",
      question: "What are HTML Attributes?",
      options: [
        "is a coding style.",
        "We use the anchor tag <a> ",
        " are the properties that can be added to an HTML tag.",
        "in an HTML file by using indents",
      ],
      correct: " are the properties that can be added to an HTML tag.",
    },
    {
      id: "3",
      question: " How do you align list elements in an HTML file?",
      options: [
        "is a coding style",
        "is used to describe the vector or raster graphics",
        "HyperText Markup Language",
        "in an HTML file by using indents",
      ],
      correct: "in an HTML file by using indents",
    },
    {
      id: "4",
      question: "What is an element in HTML?",
      options: [
        "is a set of tags that define a specific part of a web page.",
        "is a coding style",
        "We use the anchor tag <a>",
        "is used to describe the vector or raster graphics",
      ],
      correct: "is a set of tags that define a specific part of a web page.",
    },
    {
      id: "5",
      question: " What is the difference between HTML and CSS?",
      options: [
        " is used to describe the vector or raster graphics",
        " HTML is used to create the structure and content of a web page,while CSS is used to define the appearance and layout of the page",
        "is a coding style",
        "HyperText Markup Language",
      ],
      correct:
        "HTML is used to create the structure and content of a web page,while CSS is used to define the appearance and layout of the page",
    },
    {
      id: "6",
      question: "What are void elements in HTML?",
      options: [
        "We use the anchor tag <a>",
        "is a coding style.",
        "is used to describe the vector or raster graphics",
        " is a set of tags that define a specific part of a web page.",
      ],
      correct: "We use the anchor tag <a>",
    },

    {
      id: "7",
      question: "What is a form in HTML?",
      options: [
        " is a set of input fields and other elements to collect user data.",
        "We use the anchor tag <a>",
        "helps in linking with the different kinds of web pages using a single image.",
        "is a coding style.",
      ],
      correct:
        " is a set of input fields and other elements to collect user data.",
    },

    {
      id: "8",
      question: "How do you create a hyperlink in HTML?",
      options: [
        "is used to describe the vector or raster graphics.",
        "HyperText Markup Language.",
        "is a set of input fields and other elements to collect user data.",
        "is a set of tags that define a specific part of a web page.",
      ],
      correct:
        "is a set of input fields and other elements to collect user data.",
    },

    {
      id: "9",
      question: " Define an image map?",
      options: [
        "is used to describe the vector or raster graphics",
        "is a coding style.",
        "helps in linking with the different kinds of web pages using a single image",
        "is a set of tags that define a specific part of a web page.",
      ],
      correct:
        "helps in linking with the different kinds of web pages using a single image",
    },
  ];
}

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
  result.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      result.classList.remove("hide");

      //user score

      userScore.innerHTML =
        "Your score is " +
        scoreCount * 10 +
        "% out of " +
        questionCount * 10 +
        "%";
      scoreCount >= 5
        ? (userScore.style.color = "green")
        : (userScore.style.color = "red");
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}
