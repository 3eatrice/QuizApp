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
        "answer_2": "Mit einer Katze",
        "answer_3": "In dem man ihn umarmt",
        "answer_4": "In dem man ihm Essen gibt",
        "right_answer": 1
    }
];

let rightQuestions = 0;

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
};

function showQuestion(){
    if(currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none;';
        document.getElementById('amount-questions').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;
    } else { // Show Question

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;    

        let question = questions[currentQuestion];

        document.getElementById('questions-number').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
};

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
};

function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();    
    showQuestion();
};

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
};

function restartGame() {
    
}