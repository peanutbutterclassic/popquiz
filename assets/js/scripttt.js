const startButton = document.getElementById("start-btn")
const questionContainerElement = getElementById("question-container")
const questionElement = getElementById("question")
const answerButtonsElement = getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = 
    questionContainerElement.classList.remove("hide")
    setNextQuestion
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const question = [
    {
        question: "What is 2 + 2?",
        answers: [
            {text: "4", correct: true},
            {text: "22", correct: false}
        ]
    }
]