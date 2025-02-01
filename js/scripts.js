//Dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');

const setTheme = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    darkModeToggle.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
};

const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === 'enabled') {
    setTheme(true);
}

darkModeToggle.addEventListener('click', () => {
    const iscurrentlyDark = document.body.classList.contains('dark-mode');
    setTheme(!iscurrentlyDark);
});

// Handles smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = document.querySelector('.your-header-class')?.offsetHeight || 50; // Adjust dynamically
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
            
            window.history.pushState(null, null, this.getAttribute('href')); // Update URL without jumping

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

//Update dynamically the copyrights year
const copyrightsYear = document.getElementById('copyrights-year');
const currentYear = new Date().getFullYear();
console.log(currentYear)
copyrightsYear.textContent = currentYear;