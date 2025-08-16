    // Hamburger toggle + auto-close
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));
    // Hire Me scroll
    document.querySelector('.hire-me').addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
    });

    // Basin form confirmation
    const form = document.getElementById('quote-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(form.action, { method: 'POST', body: new FormData(form) })
        .then(res => {
          if (res.ok) {
            form.reset();
            document.getElementById('confirmation').style.display = 'block';
          } else throw 'Error';
        })
        .catch(() => alert('Submission failed.'));
    });


const allQuestionBtns = document.querySelectorAll('.faq-question');

allQuestionBtns.forEach(button => {

    button.addEventListener('click', function() {

        const faqItem = this.closest('.faq-item'); 

        const answer = faqItem.querySelector('.faq-answer');

        if (answer.style.display === 'block' || answer.style.display === '') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }

        this.classList.toggle('active');

    });
});


document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

const faqBtn = document.querySelector('.faq-btn'); 
const faqSection = document.querySelector('.faq-section');

if (faqBtn) { 
    faqBtn.addEventListener('click', function()
    {
    
        if (faqSection) {
            if (faqSection.style.display === 'block' || faqSection.style.display === '') {
                faqSection.style.display = 'none'; 
            } else {
                faqSection.style.display = 'block';
            }
        } else {
            console.warn("faqSection element not found."); 
        }
    });
} else {
    console.warn("faqBtn element with class '.faq-btn' not found.");
}