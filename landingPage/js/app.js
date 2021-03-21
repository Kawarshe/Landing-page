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


var sections = document.querySelectorAll("section"); // Global var for all elements section
var list = document.getElementById("navbar__list");  // Global var for element ul by id for append it by new elements 

            
        // build the nav-bar 

sections.forEach(function1);                         /* here make loop for each section to add number of new links like number of sections and same valu of                                                                                     data-nav and put it as text content of <a> tag */

                                                        
    function function1(item,index){                 // start of function
        
        var nodesLi = document.createElement('li');                     // create <li> tag and store it in variable to put it inside <ul> tag to do list. 
        
        var nodesA = document.createElement('a');                       // create the element <a> and store it in variable to put it inside <li> tag. 
        
        var datanav = item.getAttribute('data-nav');                    // extract value of data-nav attribute and store it in variable.
        
        var textcontent = document.createTextNode(datanav);             // here i add attribute value to be a text content for <a> tag and store in variable 
        
        nodesLi.appendChild(nodesA);                                    // here i append <a> tag as child for <li> tag as parent.
        
        nodesA.appendChild(textcontent);                                // append text content to <a> tag.
        nodesA.setAttribute('data-nav', 'section' + (index+1));         // set attribute to <a> tag because i will need it to make scroll to anchor.
        list.appendChild(nodesLi);                                      // here i append list and links i made it above to global var 'list'.
        };



        // Scroll to anchor When clicking an item from the navigation menu, the link should scroll to the appropriate section
                        
var links = document.querySelectorAll('a');                                     // here i store all anchor tag from nav-menu in variable called 'links' 

    links.forEach(function2);                                                       //  loop for each link to add event listener. 
        
        function function2(item1){                                               // start function 
            
        item1.addEventListener('click',function(){                              // add event type 'click' and listener function
            
        var elements = document.getElementById(item1.getAttribute('data-nav')); /* get the element by id and this id same like value of data-nav attribut for                                                                                                   each link */
        elements.scrollIntoView({behavior:"smooth",block:"start"}); /* here i used scrollIntoView to scroll the appropriate section when clicking on                                                                                            nav-menu conected by value of id = data-nav */  
            });
        };
    


        // Active Section highlights section in viewport upon scrolling.

window.addEventListener('scroll', function(){                          // here i add event listener to window object and event type is scroll 
   
    sections.forEach(function3);                                       // loop for each section to find viewport or size and position of the element section

            function function3 (element){                               //start of function 
                
                var elementSize = element.getBoundingClientRect();          /* used .getBoundingClientRect() to get size and position to each element and store                                                                                             it in variable */

                    if (elementSize.top <= 171) {                       // make condition by 

                        sections.forEach(function4);                    // loop for each section to add and remove active class 
                        
                        function function4 (renew){                     // start of function
                            
                        if(renew.classList.contains('your-active-class')) // make condition if class name is active 
                            
                        { renew.classList.remove("your-active-class"); }    //then remove active class
                           
                    }
                        element.classList.add("your-active-class");         // else add active class
                        
         }};

});






  
















