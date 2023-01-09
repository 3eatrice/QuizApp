let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wann wird ein Elf in Harry Potter frei?",
        "answer_1": "In dem man ihm Kleidung schenkt",
        "answer_2": "In dem man ihm Essen gibt",
        "answer_3": "In dem man ihn umarmt",
        "answer_4": "Mit einer Katze",
        "right_answer": 1
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
};

function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
};