//This function closes the navbar when clicked outside or when a nav-item has been clicked
$(document).click(function (event) {
    let clickover = $(event.target);
    let $navbar = $(".navbar-collapse");               
    let _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

//Dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode');
});
