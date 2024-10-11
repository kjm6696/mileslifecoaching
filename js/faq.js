document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        
        // Toggle the display of the answer
        if (answer.style.display === 'block') {
            answer.classList.remove('show');
            answer.style.display = 'none';
        } else {
            // Hide any currently visible answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('show');
                a.style.display = 'none';
            });
            answer.classList.add('show');
            answer.style.display = 'block';
        }
    });
});