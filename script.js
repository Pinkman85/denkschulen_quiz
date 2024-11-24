// Definiere Fragen und Antworten
const questions = [
    {
        question: "Was ist für dich der wichtigste Aspekt im Leben?",
        answers: [
            { text: "Logik und rationales Denken", school: "Rationalismus", weight: 3 },
            { text: "Das, was ich durch meine Sinne erfahre", school: "Empirismus", weight: 3 },
            { text: "Meine innere Welt und Gedanken", school: "Idealismus", weight: 3 },
            { text: "Das, was ich durch Erfahrungen und Interaktionen lerne", school: "Konstruktivismus", weight: 3 }
        ]
    },
    {
        question: "Wie würdest du die Realität beschreiben?",
        answers: [
            { text: "Die Realität besteht aus greifbaren, materiellen Dingen", school: "Materialismus", weight: 3 },
            { text: "Unser Bewusstsein formt die Realität", school: "Idealismus", weight: 3 },
            { text: "Realität ist ein Ergebnis sozialer Konstruktionen", school: "Postmodernismus", weight: 3 },
            { text: "Nur messbare Fakten sind real", school: "Empirismus", weight: 3 }
        ]
    },
    {
        question: "Warum ist es wichtig, Wissen zu erlangen?",
        answers: [
            { text: "Um die objektive Wahrheit zu erkennen", school: "Rationalismus", weight: 3 },
            { text: "Damit es praktisch im Alltag genutzt werden kann", school: "Pragmatismus", weight: 3 },
            { text: "Um mich selbst besser zu verstehen", school: "Existentialismus", weight: 3 },
            { text: "Um aktiv mein Verständnis der Welt zu erweitern und zu verändern", school: "Konstruktivismus", weight: 3 }
        ]
    },
    {
        question: "Was prägt deiner Meinung nach die menschliche Natur am meisten?",
        answers: [
            { text: "Unsere Fähigkeit, rational zu denken", school: "Rationalismus", weight: 3 },
            { text: "Die Erfahrungen, die wir im Leben machen", school: "Empirismus", weight: 3 },
            { text: "Die Freiheit, unsere Entscheidungen selbst zu treffen", school: "Existentialismus", weight: 3 },
            { text: "Unsere Fähigkeit, in Einklang mit uns selbst und der Welt zu leben", school: "Harmonismus", weight: 3 }
        ]
    },
    {
        question: "Wie gehst du am liebsten mit Konflikten um?",
        answers: [
            { text: "Indem ich analytisch und logisch nachdenke", school: "Rationalismus", weight: 3 },
            { text: "Indem ich praktische Lösungen suche", school: "Pragmatismus", weight: 3 },
            { text: "Indem ich den Konflikt akzeptiere und darüber reflektiere", school: "Idealismus", weight: 3 },
            { text: "Indem ich den Konflikt als Chance sehe, neue Perspektiven zu entwickeln", school: "Konstruktivismus", weight: 3 }
        ]
    },
    {
        question: "Wohin sollte die Menschheit deiner Meinung nach streben?",
        answers: [
            { text: "Zu wissenschaftlichem und technologischem Fortschritt", school: "Rationalismus", weight: 3 },
            { text: "Zu besserem Verständnis der Welt durch Austausch und Zusammenarbeit", school: "Konstruktivismus", weight: 3 },
            { text: "Zu einem besseren Verständnis des eigenen Selbst", school: "Existentialismus", weight: 3 },
            { text: "Zu neuen Entdeckungen durch Beobachtung und Experimente", school: "Empirismus", weight: 3 }
        ]
    },
    {
        question: "Wie siehst du die Natur von Moral?",
        answers: [
            { text: "Moral basiert auf universellen und rationalen Prinzipien", school: "Kantianismus", weight: 3 },
            { text: "Moral ist relativ und hängt von der Kultur ab", school: "Relativismus", weight: 3 },
            { text: "Moral wird durch die Folgen einer Handlung definiert", school: "Utilitarismus", weight: 3 },
            { text: "Moral ist etwas Persönliches und Subjektives", school: "Existentialismus", weight: 3 }
        ]
    },
    {
        question: "Was ist wichtiger: das Individuum oder die Gesellschaft?",
        answers: [
            { text: "Das Individuum steht im Mittelpunkt", school: "Individualismus", weight: 3 },
            { text: "Die Gesellschaft sollte das Individuum prägen", school: "Sozialismus", weight: 3 },
            { text: "Beide sollten in Harmonie miteinander existieren", school: "Harmonismus", weight: 3 },
            { text: "Das Individuum gibt sich selbst Bedeutung", school: "Existentialismus", weight: 3 }
        ]
    },
    {
        question: "Wie gehst du am liebsten an Probleme heran?",
        answers: [
            { text: "Ich denke logisch nach und analysiere die Situation, um eine klare Lösung zu finden.", school: "Rationalismus", weight: 3 },
            { text: "Ich suche nach praktischen Lösungen, die sofort umsetzbar sind.", school: "Pragmatismus", weight: 3 },
            { text: "Ich tausche mich mit anderen aus und konstruiere gemeinsam Lösungen.", school: "Konstruktivismus", weight: 3 },
            { text: "Ich versuche, kreative Ansätze zu finden und neue Perspektiven einzubringen.", school: "Idealismus", weight: 3 }
        ]
    }
];


// Die Denkschulen mit Beschreibungen
const schoolDescriptions = {
    Rationalismus: "Rationalismus ist eine philosophische Strömung, die die Vernunft als wichtigste Quelle der Erkenntnis ansieht. Wissen entsteht durch logisches Denken, das unabhängig von Sinneserfahrungen zu grundlegenden Wahrheiten führen kann. Philosophen wie Descartes betonten, dass die Vernunft verlässlichere Erkenntnisse liefert als unsere oft täuschenden Sinne.",
    Empirismus: "Empirismus betont, dass alle Erkenntnis aus Sinneswahrnehmungen und Erfahrungen stammt. Der menschliche Geist wird als 'unbeschriebenes Blatt' angesehen, das durch Beobachtungen und Erlebnisse geformt wird. John Locke und David Hume legten dabei großen Wert auf experimentelle Wissenschaft und die Rolle der Sinne.",
    Idealismus: "Idealismus geht davon aus, dass die Realität nicht unabhängig von unserem Geist oder unseren Ideen existiert. Unsere Wahrnehmung und unser Denken formen die Welt, wie wir sie verstehen. Vertreter wie Immanuel Kant oder Hegel untersuchten, wie Ideen und Gedanken die Grundlage unserer Wirklichkeit bilden.",
    Konstruktivismus: "Der Konstruktivismus ist eine Denkrichtung, die davon ausgeht, dass Wissen nicht einfach entdeckt, sondern aktiv vom Individuum konstruiert wird. Unsere Wahrnehmungen und Erfahrungen spielen eine zentrale Rolle bei der Bildung von Wissen. Der Konstruktivismus hebt hervor, dass jedes Individuum die Welt durch seine eigenen Erfahrungen und sozialen Interaktionen aufbaut.",
    Pragmatismus: "Pragmatismus ist eine Philosophie, die die praktische Anwendbarkeit von Wissen in den Vordergrund stellt. Eine Idee oder Handlung gilt als wahr oder sinnvoll, wenn sie in der Praxis funktioniert und positive Konsequenzen hat. Philosophen wie John Dewey und William James betonten, dass Wahrheit flexibel und anpassungsfähig sein muss.",
    Materialismus: "Materialismus ist die Auffassung, dass alles in der Welt, einschließlich Gedanken und Gefühle, auf materielle Prozesse zurückzuführen ist. Diese Philosophie sieht die physische Welt als Grundlage der Realität. Karl Marx verband den Materialismus mit gesellschaftlichen und wirtschaftlichen Analysen, um soziale Entwicklungen zu erklären.",
    Existentialismus: "Existentialismus stellt den einzelnen Menschen, seine Freiheit und Verantwortung in den Mittelpunkt. In einer oft als sinnlos empfundenen Welt liegt es an jedem Individuum, selbst einen Sinn im Leben zu finden. Jean-Paul Sartre und Albert Camus betonten, dass unsere Entscheidungen unsere Existenz definieren.",
    Postmodernismus: "Der Postmodernismus hinterfragt universelle Wahrheiten und objektive Realitäten. Er betont, dass alle Erkenntnis von kulturellen und historischen Kontexten abhängig ist. Vertreter wie Lyotard und Derrida legten den Fokus auf die Rolle von Sprache, Symbolen und Machtstrukturen bei der Konstruktion von Wirklichkeit.",
    Kantianismus: "Der Kantianismus basiert auf den Ideen von Immanuel Kant, der Vernunft und Moral miteinander verband. Eine zentrale Idee ist der kategorische Imperativ, der fordert, dass Menschen nach Prinzipien handeln sollen, die für alle gelten können. Kant betonte auch die Würde des Menschen und die Autonomie des Willens.",
    Utilitarismus: "Der Utilitarismus sieht moralisches Handeln in der Maximierung des Glücks oder Nutzens für die größtmögliche Anzahl von Menschen. Philosophen wie Jeremy Bentham und John Stuart Mill argumentierten, dass die Konsequenzen einer Handlung entscheidend für ihre moralische Bewertung sind.",
    Harmonismus: "Der Harmonismus strebt danach, ein Gleichgewicht zwischen unterschiedlichen Meinungen und Interessen herzustellen. Er sieht Harmonie als Schlüssel, um Konflikte zu lösen und ein friedliches Zusammenleben zu ermöglichen. Diese Philosophie betont die Bedeutung von Ausgleich und gegenseitigem Verständnis."
};


let currentQuestionIndex = 0;
let scores = {};

Object.keys(schoolDescriptions).forEach(school => scores[school] = 0);

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
        nextBtn.style.display = 'block';
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

    const maxScore = questions.length * 3; 

    // Berechnet die Prozentwerte und sortiert die Ergebnisse
    const results = Object.keys(scores).map(school => {
        return { 
            school: school, 
            percentage: ((scores[school] / maxScore) * 100).toFixed(2) 
        };
    }).sort((a, b) => b.percentage - a.percentage); 

    // Zeigt die Ergebnisse an
    quizContainer.style.display = 'none';
    resultBox.style.display = 'block';
    resultBox.innerHTML = `<h2>Ergebnisse</h2>`;
    results.forEach(result => {
        const schoolItem = document.createElement('div');
        schoolItem.classList.add('school-item');
        schoolItem.innerHTML = `
            <p class="school-name" data-school="${result.school}">
                ${result.school}: ${result.percentage}% passend
            </p>
            <div class="school-description" style="display: none; padding: 10px;">
                ${schoolDescriptions[result.school]}
            </div>
        `;
        schoolItem.querySelector('.school-name').addEventListener('click', function() {
            toggleDescription(this);
        });
        resultBox.appendChild(schoolItem);
    });
}

function toggleDescription(element) {
    const description = element.nextElementSibling;
    const isVisible = description.style.display === 'block';

    if (isVisible) {
        description.style.display = 'none';
        element.classList.remove('active-school');
    } else {
        description.style.display = 'block';
        element.classList.add('active-school'); 
    }
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

showQuestion();
