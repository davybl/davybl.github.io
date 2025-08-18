    document.addEventListener('DOMContentLoaded', () => {
    // Hamburger toggle + auto-close
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const body = document.body; // Get the body element for scroll lock

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle body scroll lock
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            body.style.overflow = ''; // Allow scrolling when menu is closed
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            body.style.overflow = ''; // Allow scrolling when a menu link is clicked
        });
    });

    // Close menu if clicking outside of it
    document.addEventListener('click', (event) => {
        // Check if the click target is outside the hamburger icon AND outside the navigation menu itself
        const isClickInsideNav = navLinks.contains(event.target) || hamburger.contains(event.target);

        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active'); // Close the menu
            body.style.overflow = ''; // Allow scrolling
        }
    });

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

    // FAQ toggles
    const allQuestionBtns = document.querySelectorAll('.faq-question');

    allQuestionBtns.forEach(button => {
        button.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');

            // Toggle display of the answer
            if (answer.style.display === 'block' || answer.style.display === '') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }

            // Toggle 'active' class on the question button for styling
            this.classList.toggle('active');
        });
    });

    // Initially hide all FAQ answers
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });

    // FAQ section toggle button
    const faqBtn = document.querySelector('.faq-btn');
    const faqSection = document.querySelector('.faq-section');

    if (faqBtn) {
        faqBtn.addEventListener('click', function() {
            if (faqSection) {
                // Toggle display of the entire FAQ section
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
});