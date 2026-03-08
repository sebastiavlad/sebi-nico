// Animație inimioare care cad
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // 3-6 secunde
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300); // Creează o inimă la fiecare 300ms

// Pentru quiz (doar în quiz.html)
function checkQuiz() {
    let score = 0;
    const answers = {
        q1: '10 august 2025',
        q2: 'Teodora Uriciuc',
        q3: 'Andrei Vlad',
        q4: 'Infinit',
        q5: 'Da'
    };

    for (let i = 1; i <= 5; i++) {
        const userAnswer = document.getElementById(`q${i}`).value.trim().toLowerCase();
        if (userAnswer === answers[`q${i}`].toLowerCase()) {
            score++;
        }
    }

    alert(`Ai obținut ${score}/5! Ne iubim atât de mult! ❤️`);
}