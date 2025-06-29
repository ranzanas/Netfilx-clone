function toggleAnswer(element) {
    const answerBox = element.nextElementSibling;
    
    if (answerBox.style.display === 'none' || !answerBox.style.display) {
        answerBox.style.display = 'block';
        questionBox.classList.add('active');
    } else {
        answerBox.style.display = 'none';
        questionBox.classList.remove('active');
    }
}

