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
const section = document.querySelectorAll('section');
const unOrList = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// build the nav

for (let i = 0; i < section.length; i++) {

    let newLink = document.createElement('a');
    // get the text of the nav from section data-nav:
    newLink.innerText = section[i].getAttribute('data-nav'); 
    // add data-* attribute to 'a' element:  
    newLink.setAttribute('data-bar', 'section'+(i+1));    
     /* //we can add a href attribute to the anchor but I found a shorted method using scrollIntoView
    attName = section[i].getAttribute('id')
    newLink.setAttribute('href', '#'+attName); */
    //create list and apend every new link in new list
    let newList = document.createElement('li');
    newList.appendChild(newLink);
    // make the navbar scroll to the section:
    newLink.addEventListener('click', ()=> {
        section[i].scrollIntoView({behavior: "smooth"});
    })
    
    fragment.appendChild(newList);
}
unOrList.appendChild(fragment);


// Add class 'active' to section when near top of viewport

   // add listener to listen to scroll
window.addEventListener('scroll', ()=> {
    // get the distance from the top to the sections by getBoundingClientRect.top
    section.forEach( (sec) => {
        const react = sec.getBoundingClientRect();
        // put the condition if the section near the top max 300 this section will be the active one:
        if (react.top > -50 && react.top < 300) {
            // remove the class of the active class from all sections
            section.forEach( (activ_sec)=> {
                activ_sec.classList.remove('your-active-class');
            })
            // set the active class to the active section only:
            sec.classList.add('your-active-class');
            // declare variables of the anchors and it's name
            const links = document.querySelectorAll('a');
            const secNav = sec.getAttribute('data-nav');
            links.forEach( (link)=> {
            // remove the class of the active class from all barLinks
                if (link.innerText === secNav) {
                    links.forEach( (delLink)=>{
                        delLink.classList.remove('aLink');
                    })
                    // set the active class to the active barLink only:
                    link.classList.add('aLink');
                }
            })
        }
        
    })
    
})  


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


