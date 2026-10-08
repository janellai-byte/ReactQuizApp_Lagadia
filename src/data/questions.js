const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    choices: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    id: 3,
    question: "Which language is used to make websites interactive?",
    choices: ["HTML", "CSS", "JavaScript", "SQL"],
    correctAnswer: "JavaScript",
  },
  {
    id: 4,
    question: "Which symbol is used for an ID selector in CSS?",
    choices: [".", "#", "*", "@"],
    correctAnswer: "#",
  },
  {
    id: 5,
    question: "Which symbol is used for a class selector in CSS?",
    choices: ["#", ".", "@", "&"],
    correctAnswer: ".",
  },
  {
    id: 6,
    question: "Which HTML tag is used to create a hyperlink?",
    choices: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    id: 7,
    question: "Which HTML tag is used to display an image?",
    choices: ["<picture>", "<image>", "<img>", "<src>"],
    correctAnswer: "<img>",
  },
  {
    id: 8,
    question: "Which keyword declares a variable in JavaScript?",
    choices: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    id: 9,
    question: "Which method prints something in the browser console?",
    choices: [
      "console.log()",
      "print()",
      "document.print()",
      "log.console()",
    ],
    correctAnswer: "console.log()",
  },
  {
    id: 10,
    question: "Which company developed React?",
    choices: ["Google", "Microsoft", "Facebook / Meta", "Apple"],
    correctAnswer: "Facebook / Meta",
  },
];

export default questions;