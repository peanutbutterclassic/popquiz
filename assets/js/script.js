// const startButton = document.getElementById("start-btn")

// startButton.addEventListener("click", startQuiz)

// function startQuiz() {
//     console.log("started")
// }

// function getNewQuestion() {

// }

// function selectAnswer() {

// }

// game
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Lionel Messi won his 147th Argentina cap at the Copa América, equalling which player's all-time record?",
        choices: [
            { title: "Diego Maradona", answer: false },
            { title: "Javier Mascherano", answer: true },
            { title: "Gabriel Batistuta", answer: false },
            { title: "Sergio Romero", answer: false },
        ]
    },
    {
        question: "When was the last time England won a world cup",
        choices: [
            { title: "2002", answer: false },
            { title: "1966", answer: true },
            { title: "1998", answer: false },
            { title: "1986", answer: false },
        ]
    },
    {
        question: "Which team won their group at Euro 2020 even though just one of their players scored in their three matches?",
        choices: [
            { title: "Sweden", answer: false },
            { title: "Portugal", answer: false },
            { title: "England", answer: true },
            { title: "Ukraine", answer: false },
        ]
    },
    {
        question: "Shafali Verma hit two half-centuries for India in their Test match against England. Why was that remarkable?",
        choices: [
            { title: "She is only 17 years old", answer: true },
            { title: "She was their No 11", answer: false },
            { title: "She has also represented India in badminton and table tennis at the Olympics", answer: false },
            { title: "She is the team's coach but stepped in to play in the Test due to a Covid outbreak in the squad", answer: false },
        ]
    },
    {
        question: "What was unusual about Karim Benzema’s goals for France in their 2-2 draw with Portugal?",
        choices: [
            { title: "They were both penalties – as were the two goals scored by Portugal", answer: false },
            { title: "They were both scored while the clock read: 46 minutes and 44 seconds", answer: true },
            { title: "They were his first goals for France even though he has scored more than 250 for Real Madrid", answer: false },
            { title: "He scored them both with his left foot – including a penalty – even though he is right-footed", answer: false },
        ]
    },
    
    // Science questions
    {
        question: "What does DNA stand for?",
        choices: [
            { title: "Do Not Abbreviate", answer: false },
            { title: "Do Not Adopt", answer: false },
            { title: "Dark Native Apostle", answer: false },
            { title: "Deoxyribonucleic acid", answer: true },
        ]
    },
    {
        question: "How many bones are in the human body?",
        choices: [
            { title: "205", answer: false },
            { title: "206", answer: true },
            { title: "435", answer: false },
            { title: "178", answer: false },
        ]
    },
    {
        question: "The concept of gravity was discovered by which famous physicist?",
        choices: [
            { title: "Sir Bobby Charlton", answer: false },
            { title: "Sir Alex Ferguson", answer: false },
            { title: "Sir Isaac Newton", answer: true },
            { title: "Riccardo Giacconi", answer: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: [
            { title: "Diamond", answer: true },
            { title: "Gold", answer: false },
            { title: "Copper", answer: false },
            { title: "Lead", answer: false },
        ]
    },
    {
        question: "Which is the main gas that makes up the Earth’s atmosphere?",
        choices: [
            { title: "Carbon dioxide", answer: false },
            { title: "Oxygen", answer: false },
            { title: "Hydrogen", answer: false },
            { title: "Nitrogen", answer: true },
        ]
    },
    {
        question: "Humans and chimpanzees share roughly how much DNA?",
        choices: [
            { title: "80%", answer: false },
            { title: "16%", answer: false },
            { title: "98%", answer: true },
            { title: "33%", answer: false },
        ]
    },
    {
        question: "What is the most abundant gas in the Earth’s atmosphere?",
        choices: [
            { title: "CFC", answer: false },
            { title: "Ozone", answer: false },
            { title: "Nitrogen", answer: true },
            { title: "CO2", answer: false },
        ]
    },
    {
        question: "Roughly how long does it take for the sun’s light to reach Earth – 8 minutes, 8 hours or 8 days?",
        choices: [
            { title: "14 seconds", answer: false },
            { title: "10 seconds", answer: false },
            { title: "1 hour", answer: false },
            { title: "8 minutes", answer: true },
        ]
    },
    {
        question: "Which famous British physicist wrote A Brief History of Time?",
        choices: [
            { title: "Amanda Gorman", answer: false },
            { title: "Stephen Hawking", answer: true },
            { title: "David Beckham", answer: false },
            { title: "Catherine Cho", answer: false },
        ]
    },
    {
        question: "At what temperature are Celsius and Fahrenheit equal?",
        choices: [
            { title: "100", answer: false },
            { title: "86", answer: false },
            { title: "-40", answer: true },
            { title: "0", answer: false },
        ]
    },
    {
        question: "What modern-day country was Marie Curie born in?",
        choices: [
            { title: "Poland", answer: true },
            { title: "France", answer: false },
            { title: "Switzerland", answer: false },
            { title: "Germany", answer: false },
        ]
    },
    {
        question: "What is the biggest planet in our solar system?",
        choices: [
            { title: "Neptune", answer: false },
            { title: "Mars", answer: false },
            { title: "Jupiter", answer: true },
            { title: "Venus", answer: false },
        ]
    },
    {
        question: "What name is given for the number of protons found in the nucleus of an atom?",
        choices: [
            { title: "Prime number", answer: false },
            { title: "Integer", answer: false },
            { title: "Pi", answer: false },
            { title: "Atomic number", answer: true },
        ]
    },
    {
        question: "How many vertebrae does the average human possess?",
        choices: [
            { title: "44", answer: false },
            { title: "33", answer: true },
            { title: "55", answer: false },
            { title: "66", answer: false },
        ]
    },
    {
        question: "What was the name of the first man-made satellite launched by the Soviet Union in 1957?",
        choices: [
            { title: "Apollo 13", answer: false },
            { title: "Sputnik 1", answer: true },
            { title: "Apollo 11", answer: false },
            { title: "Apollo 15", answer: false },
        ]
    },
    {
        question: "Which oath of ethics taken by doctors is named after an Ancient Greek physician?",
        choices: [
            { title: "Promissory Oath", answer: false },
            { title: "Hippocratic Oath", answer: true },
            { title: "Crown Court Witness Oath", answer: false },
            { title: "Witness Affirmation", answer: false },
        ]
    },
    {
        question: "What is a material that will not carry an electrical charge called?",
        choices: [
            { title: "Cellulose", answer: false },
            { title: "Vinyl", answer: false },
            { title: "Insulator", answer: true },
            { title: "Polyurethane Foam", answer: false },
        ]
    },
    {
        question: "Which Apollo moon mission was the first to carry a lunar rover?",
        choices: [
            { title: "Apollo 15", answer: true },
            { title: "Apollo 13", answer: false },
            { title: "Apollo 8", answer: false },
            { title: "Apollo 11", answer: false },
        ]
    },
    {
        question: "How many teeth does an adult human have?",
        choices: [
            { title: "22", answer: false },
            { title: "32", answer: true },
            { title: "36", answer: false },
            { title: "18", answer: false },
        ]
    },
    {
        question: "What is the study of mushrooms called?",
        choices: [
            { title: "Mycology", answer: true },
            { title: "Fungi", answer: false },
            { title: "Biology", answer: false },
            { title: "Endocrology", answer: false },
        ]
    },
    // Questions on current affairs
    {
        question: "The first known LBGTQ rights organization in America was called what?",
        choices: [
            { title: "Human Rights Society", answer: true },
            { title: "Amnesty International", answer: false },
            { title: "UN", answer: false },
            { title: "CDC", answer: false },
        ]
    },
    {
        question: "When was the first protest for gay and lesbian rights in Washington, D.C.?",
        choices: [
            { title: "July 4, 1975", answer: false },
            { title: "July 4, 1965", answer: true },
            { title: "August 8, 1988", answer: false },
            { title: "February 7, 1978", answer: false },
        ]
    },
    {
        question: "What was the first European country to legalize same-sex marriage?",
        choices: [
            { title: "Portugal", answer: false },
            { title: "Italy", answer: false },
            { title: "The Netherlands", answer: true },
            { title: "France", answer: false },
        ]
    },
    {
        question: "When was the last time England won a world cup",
        choices: [
            { title: "2002", answer: false },
            { title: "1966", answer: true },
            { title: "1998", answer: false },
            { title: "1986", answer: false },
        ]
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter === MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        
        return window.location.assign("end.html");
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice, index)  => {
        const c = currentQuestion.choices[index];
        choice.innerText = c.title;
        choice.dataset.answer = c.answer; 
    });

    // Remove the question from the array based on the index
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) {
            return;
        }

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.answer;

        let classToApply = selectedAnswer === "true" ? 'correct' : 'incorrect';
        
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        // set timeout to indicate whether the user answer is right or wrong 
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });

    // Audio buttons
    choice.addEventListener("click", () => {
        click.play();
    });
});

// incremement score
incrementScore = (num) => {
    score += num;
    // additional code 
    scoreText.innerText = score;
};

const setupAudio = () => {
    // Load audios
    const click = new Audio("assets/sound/rucksack.mp3");

    // Audio buttons
    const clickButton = document.querySelectorAll(".click");
    clickButton.forEach((element) => {
        element.addEventListener("click", () => {
            click.play();
        });
    });
};

setupAudio();

startGame();


// volume
const volumeMenu = document.getElementById("volume-up-menu");

// Create modal box for quiz game
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// leaderboard
const renderScores = (scores) => {
    if (scores.length > 0) {
        return scores.map((score, index) => {
            return `<tr class="high-score"><td>${index + 1}</td><td>${score.name}</td><td>${score.score}</td></tr>`;
        }).join('');
    }
    return `<p class="high-score">No score saved.</p>`;
}

function updateScoreTable() {
    const highScoresList = document.querySelector("#highScoresList");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScoresList.innerHTML = renderScores(highScores);
}

// end

const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreButton');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

const saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};

const togglePanel = (panelId, show) => {
    let panel = document.getElementById(panelId);
    panel.classList.toggle('d-none', !show);
};