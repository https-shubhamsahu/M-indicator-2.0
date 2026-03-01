import './style.css'

// Intro Video Logic
document.addEventListener('DOMContentLoaded', () => {
    const introOverlay = document.getElementById('intro-overlay');
    if (introOverlay) {

        // 1.5 second timer before hiding the overlay
        setTimeout(() => {
            introOverlay.classList.add('fade-out');
            document.body.classList.remove('no-scroll');

            // Clean up DOM after transition
            setTimeout(() => {
                introOverlay.remove();
            }, 800); // matches the 0.8s CSS transition
        }, 1500);
    }
});

// Scroll Reveal Observer
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: stop observing once revealed to reduce overhead
                    // observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.15 });

        reveals.forEach(reveal => revealObserver.observe(reveal));
    }

    // Number Counting Animation
    const counters = document.querySelectorAll('.count-up');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const suffix = counter.getAttribute('data-suffix') || '';
                    const duration = 2000; // 2 seconds
                    const step = 20; // 20ms update interval (50 times a second)
                    const totalSteps = duration / step;
                    const increment = target / totalSteps;

                    let current = 0;
                    const updateCounter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.innerText = target + suffix;
                            clearInterval(updateCounter);
                        } else {
                            counter.innerText = Math.ceil(current) + suffix;
                        }
                    }, step);

                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }
});
