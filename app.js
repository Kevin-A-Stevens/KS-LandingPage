/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const ul = document.getElementById("navbar-list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables


 * Begin Main Functions
 *
*/
// build the nav

sections.forEach(function(section, index) {
  const li = document.createElement("li");
  const alink = document.createElement("a");
  alink.innerHTML = 'Section'+ (index + 1);
  alink.setAttribute("href", `#section${index + 1}`);
  li.appendChild(alink);
  ul.insertAdjacentHTML('beforeend', ul.appendChild(li).innerResultsHTML);
}); // End ForEach and function and building the nav


// Add EventListener to check for click event

document.querySelectorAll('a').forEach(an => {
    an.addEventListener('click', function (event) {
        event.preventDefault();

        // Add class 'active' to section when near top of viewport

        let activeClass = document.getElementsByClassName("current");

        // Remove active class if currenttly set

        while (activeClass.length) {
          activeClass[0].classList.remove('current');
        } // End While loop
        this.className = 'current';

        // Scroll to anchor ID using scrollTO event

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        }); // End scrollIntoView
    }); // End event function
}); // End forEach loop
