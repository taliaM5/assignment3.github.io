console.log('Page loaded');
//responsive navbar
function toggleResponsiveNavbar() {
    var navbar = document.getElementById('navbar'); 
    if (window.innerWidth <= 768) { 
        navbar.classList.add('responsive'); 
    } else {
        navbar.classList.remove('responsive'); 
    }
}

// Toggle responsive class on page load
toggleResponsiveNavbar();

//changes the background of one of the cards on home page
function changeBackground() {
    var text = document.getElementById("para").style.backgroundColor = "red";
}

function backToNormal() {
    var text = document.getElementById("para").style.backgroundColor = "";
}


//Updates the navbar year data
const currentYear = new Date().getFullYear();

const copyrightElement = document.getElementById('copyright');
copyrightElement.textContent = '© ' + currentYear + ' | All Rights Reserved';