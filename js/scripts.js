const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link')

navToggle.addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        document.body.classList.remove('nav-open');
    })
})