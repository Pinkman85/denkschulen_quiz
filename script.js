// Definiere Fragen und Antworten
const questions = [
    {
        question: "Was ist für dich der wichtigste Aspekt im Leben?",
        answers: [
            { text: "Rationalität und Logik", school: "Rationalismus", weight: 3 },
            { text: "Erfahrung und Wahrnehmung", school: "Empirismus", weight: 3 },
            { text: "Inneres Bewusstsein", school: "Idealismus", weight: 3 },
            { text: "Gesellschaftlicher Fortschritt", school: "Sozialphilosophie", weight: 3 }
        ]
    },
    {
        question: "Wie siehst du die Natur der Realität?",
        answers: [
            { text: "Alles ist Materie", school: "Materialismus", weight: 3 },
            { text: "Bewusstsein ist fundamental", school: "Idealismus", weight: 3 },
            { text: "Realität ist ein soziales Konstrukt", school: "Postmodernismus", weight: 3 },
            { text: "Nur messbare Dinge sind real", school: "Empirismus", weight: 3 }
        ]
    },
    {
        question: "Was ist das Ziel des Wissens?",
        answers: [
            { text: "Erkenntnis der objektiven Wahrheit", school: "Rationalismus", weight: 3 },
            { text: "Praktische Anwendung", school: "Pragmatismus", weight: 3 },
            { text: "Verstehen des eigenen Selbst", school: "Existentialismus", weight: 3 },
            { text: "Verbesserung der Gesellschaft", school: "Sozialphilosophie", weight: 3 }
        ]
    },
    {
        question: "Wie betrachtest du die menschliche Natur?",
        answers: [
            { text: "Menschen sind von Natur aus rational", school: "Rationalismus", weight: 3 },
            { text: "Menschen sind Produkte ihrer Erfahrungen", school: "Empirismus", weight: 3 },
            { text: "Der Mensch ist frei und bestimmt sich selbst", school: "Existentialismus", weight: 3 },
            { text: "Gesellschaft ist der Hauptfaktor, der den Menschen prägt", school: "Sozialphilosophie", weight: 3 }
        ]
    },
    {
        question: "Wie gehst du mit Konflikten um?",
        answers: [
            { text: "Durch rationales Denken und Analyse", school: "Rationalismus", weight: 3 },
            { text: "Durch Diskussion und praktisches Handeln", school: "Pragmatismus", weight: 3 },
            { text: "Durch Akzeptanz und Reflektion", school: "Idealismus", weight: 3 },
            { text: "Durch soziale Veränderung und Revolution", school: "Sozialphilosophie", weight: 3 }
        ]
    },
    {
        question: "Welches Ziel hat für dich der Fortschritt der Menschheit?",
        answers: [
            { text: "Wissenschaft und Technologie", school: "Rationalismus", weight: 3 },
            { text: "Gesellschaftliche Gerechtigkeit und Gleichheit", school: "Sozialphilosophie", weight: 3 },
            { text: "Das Streben nach einem besseren Selbst", school: "Existentialismus", weight: 3 },
            { text: "Erweiterung des Wissens durch empirische Beobachtung", school: "Empirismus", weight: 3 }
        ]
    },
    {
        question: "Wie siehst du die Moral?",
        answers: [
            { text: "Moral ist universell und rational", school: "Kantianismus", weight: 3 },
            { text: "Moral ist relativ und von der Kultur abhängig", school: "Relativismus", weight: 3 },
            { text: "Moral hängt von den Folgen der Handlung ab", school: "Utilitarismus", weight: 3 },
            { text: "Moral ist subjektiv und individuell", school: "Existentialismus", weight: 3 }
        ]
    },
    {
        question: "Wie würdest du das Verhältnis zwischen Individuum und Gesellschaft beschreiben?",
        answers: [
            { text: "Das Individuum sollte über allem stehen", school: "Individualismus", weight: 3 },
            { text: "Die Gesellschaft sollte das Individuum prägen", school: "Sozialismus", weight: 3 },
            { text: "Individuen und Gesellschaft sollten im Einklang miteinander existieren", school: "Harmonismus", weight: 3 },
            { text: "Das Individuum bestimmt seine eigene Bedeutung", school: "Existentialismus", weight: 3 }
        ]
    },
    {
        question: "Was ist für dich das wichtigste bei der Lösung von Problemen?",
        answers: [
            { text: "Logische und analytische Überlegung", school: "Rationalismus", weight: 3 },
            { text: "Pragmatische Lösungen und praktische Erfahrung", school: "Pragmatismus", weight: 3 },
            { text: "Menschliche und gesellschaftliche Dimensionen verstehen", school: "Sozialphilosophie", weight: 3 },
            { text: "Neue Perspektiven und Ideen suchen", school: "Idealismus", weight: 3 }
        ]
    }
];

// Die Denkschulen, die wir analysieren
const schools = [
    "Rationalismus", "Empirismus", "Idealismus", "Sozialphilosophie", "Pragmatismus",
    "Materialismus", "Existentialismus", "Postmodernismus", "Kantianismus", "Utilitarismus", "Harmonismus"
];

let currentQuestionIndex = 0;
let scores = {};

// Punktestand für jede Schule initialisieren
schools.forEach(school => scores[school] = 0);

// Zeigt die aktuelle Frage an
function showQuestion() {
    const questionBox = document.getElementById('question-box');
    const answersContainer = document.getElementById('answers-container');
    const nextBtn = document.getElementById('next-btn');

    questionBox.innerText = questions[currentQuestionIndex].question;
    answersContainer.innerHTML = '';
    nextBtn.style.display = 'none';

    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer-option');
        button.innerText = answer.text;
        button.addEventListener('click', () => {
            recordAnswer(answer);
            nextBtn.style.display = 'block';
        });
        answersContainer.appendChild(button);
    });

    // Option "Keine Antwort passt"
    const skipButton = document.createElement('button');
    skipButton.classList.add('answer-option');
    skipButton.innerText = "Keine dieser Antworten passt zu mir";
    skipButton.addEventListener('click', () => {
        nextBtn.style.display = 'block'; // keine Punkteänderung
    });
    answersContainer.appendChild(skipButton);
}

// Speichert die Antwort des Benutzers und aktualisiert die Punktzahl
function recordAnswer(answer) {
    if (answer && scores[answer.school] !== undefined) {
        scores[answer.school] += answer.weight;
    }
}

// Zeigt das Ergebnis an
function showResult() {
    const resultBox = document.getElementById('result-box');
    const quizContainer = document.getElementById('quiz-container');

    // Berechnet den maximal möglichen Punktestand
    const maxScore = questions.length * 3; // da jede Frage ein Gewicht von 3 hat

    // Berechnet die Prozentwerte und sortiert die Ergebnisse
    const results = Object.keys(scores).map(school => {
        return { 
            school: school, 
            percentage: ((scores[school] / maxScore) * 100).toFixed(2) // auf zwei Nachkommastellen
        };
    }).sort((a, b) => b.percentage - a.percentage); // sortiere absteigend

    // Zeigt das Ergebnis an
    quizContainer.style.display = 'none';
    resultBox.style.display = 'block';
    resultBox.innerHTML = `<h2>Ergebnisse</h2>`;
    results.forEach(result => {
        resultBox.innerHTML += `<p>${result.school}: ${result.percentage}% passend</p>`;
    });
}

// Wechselt zur nächsten Frage oder zeigt das Ergebnis an
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Startet das Quiz
showQuestion();
