const questions=[
    {
        ques:'which is the largest animals in the world?',
        ans:[
            { text:'sark', correct:false},
            { text:'Blue whel', correct:true},
            { text:'Elephent', correct:false},
            { text:'camel', correct:false},
        ]
    },
    {
        ques:'which is the largest animals in the world?',
        ans:[
            { text:'sark', correct:false},
            { text:'Blue whel', correct:true},
            { text:'Elephent', correct:false},
            { text:'camel', correct:false},
        ]    
    },

    {
        ques:'which is the largest animals in the world?',
        ans:[
            { text:'sark', correct:false},
            { text:'Blue whel', correct:true},
            { text:'Elephent', correct:false},
            { text:'camel', correct:false},
        ]
    },

    {
        ques:'which is the largest animals in the world?',
        ans:[
            { text:'sark', correct:false},
            { text:'Blue whel', correct:true},
            { text:'Elephent', correct:false},
            { text:'camel', correct:false},
        ]
    },

    {
        ques:'which is the largest animals in the world?',
        ans:[
            { text:'sark', correct:false},
            { text:'Blue whel', correct:true},
            { text:'Elephent', correct:false},
            { text:'camel', correct:false},
        ]
    },
    {
        ques:'which is the largest animals in the world?',
        ans:[
            { text:'sark', correct:false},
            { text:'Blue whel', correct:true},
            { text:'Elephent', correct:false},
            { text:'camel', correct:false},
        ]
    }
];
const questionelement=document.getElementById('question');
const answerButton=document.getElementById('answer-button');
const NextButton=document.getElementById('next-button');

let currentQuestionIndex=0;
let score=0;
 function  startQuiz(){
    currentQuestionIndex=0;
    score=0;
    NextButton.innerHTML='Next';
    showQuestion();
 }

 function showQuestion() {
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionelement.innerHTML=questionNo +'.'+currentQuestion.
    question;
 }
currentQuestion.ans.forEach(answer => {
    const button=document.createElement('button');
    button.innerHTML=ans.text;
    button.classList.add('btn');
    answerButton.appendChild(button);
    
});
startQuiz();