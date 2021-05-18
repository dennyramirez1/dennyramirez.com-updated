
//  to make the off canvas menu work = 1) grab the necessary elements 2) add the functions to make the menu appear and disappear 3) add the click event listeners 
// First grab the open menu trigger div and the menu close trigger image and the side menu itself
const menuTrigger = document.getElementById("menu-trigger")
const menuClose = document.getElementById("menu-close")
const sideMenu = document.getElementById("side-menu")

// This adds a show-menu class from the CSS that ALREADY exists, we're adding it in here
// This creates the animation because of the interplay of adding the CSS class via JS
// The browser then interprets the CSS Animations as the classes change
// Go look at the .show-menu code and notes in the CSS
function sideMenuAppears() {
  // console.log('sideMenuAppears() is active'); - if you want to test the function, uncomment this
  sideMenu.classList.add("show-menu");
}

/* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened */
function sideMenuDisappears() {
  // console.log('sideMenuDisappears() is active'); - if you want to test the function, uncomment this
  sideMenu.classList.remove("show-menu");
}

// Add the event listeners onto the menu trigger and menu close elements, and pass in the browser events and functions to execute
menuTrigger.addEventListener("click", sideMenuAppears);
menuClose.addEventListener("click", sideMenuDisappears);