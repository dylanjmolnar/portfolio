document.addEventListener('DOMContentLoaded', () => {

    // 1. Current Year for Footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    // 2. Theme Switcher
    const themeSwitchBtn = document.getElementById('theme-switch');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Check local storage or system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = window.localStorage.getItem('theme');
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    themeSwitchBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            window.localStorage.setItem('theme', 'dark');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        } else {
            window.localStorage.setItem('theme', 'light');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    });

    // 3. Scroll Animations (Fade In Up)
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // 4. Scroll Spy for Navigation Active State
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 }); // 50% of the section must be visible

    sections.forEach(sec => navObserver.observe(sec));

    // 5. Copy Email Buttons
    const email = "dylanmolnar1@gmail.com";
    
    const setupCopyButton = (btnId) => {
        const btn = document.getElementById(btnId);
        if (!btn) return;
        
        const textSpan = btn.querySelector('.btn-text');
        const copyIcon = btn.querySelector('.copy-icon');
        const checkIcon = btn.querySelector('.check-icon');

        btn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(email);
                
                // Set Copied State
                btn.classList.add('copied');
                if(textSpan) textSpan.textContent = "Copied Email!";
                if(copyIcon) copyIcon.classList.add('hidden');
                if(checkIcon) checkIcon.classList.remove('hidden');
                
                // Reset after 10 sec
                setTimeout(() => {
                    btn.classList.remove('copied');
                    if(textSpan) textSpan.textContent = email;
                    if(copyIcon) copyIcon.classList.remove('hidden');
                    if(checkIcon) checkIcon.classList.add('hidden');
                }, 10000);
            } catch (err) {
                console.error("Failed to copy email:", err);
            }
        });
    }

    setupCopyButton('header-copy-email');
    setupCopyButton('footer-copy-email');

    // 6. Dynamic Languages Text
    const languages = [
        "learning new languages",
        "aprendiendo nuevas lenguas",
        "neue Sprachen lernen"
    ];
    let activeLangIndex = 0;
    const dynamicLangEl = document.getElementById('dynamic-lang');

    if (dynamicLangEl) {
        setInterval(() => {
            // Initiate exit animation
            dynamicLangEl.classList.remove('lang-enter');
            dynamicLangEl.classList.add('lang-exit');
            
            setTimeout(() => {
                // Change text and initiate enter animation
                activeLangIndex = (activeLangIndex + 1) % languages.length;
                dynamicLangEl.textContent = languages[activeLangIndex];
                
                dynamicLangEl.classList.remove('lang-exit');
                dynamicLangEl.classList.add('lang-enter');
            }, 500); // Matches CSS exit animation duration
        }, 8000); // Every 8 seconds
    }
});
