document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quizForm');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    const retryBtn = document.getElementById('retryBtn');

    document.getElementById('submitBtn').addEventListener('click', function() {
        const correctAnswers = { q1: 'a', q2: 'a', q3: 'a', q4: 'a', q5: 'a', q6: 'a', q7: 'a', q8: 'a', q9: 'a', q10: 'a', q11: 'a', q12: 'a', q13: 'a', q14: 'a', q15: 'a', q16: 'a', q17: 'a', q18: 'a', q19: 'a', q20: 'a' };
        let score = 0;

        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            const selectedAnswer = form.querySelector(`input[name="${question}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === correctAnswer) {
                score++;
            }
        }

        let resultMessage = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
       

        resultText.innerHTML = resultMessage;
        resultContainer.style.display = 'block';
    });

    retryBtn.addEventListener('click', function() {
        form.reset();
        resultContainer.style.display = 'none';
    });
});
