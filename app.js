const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// row 7-15 are the example from the tutorial 
// function PageTransitions(){
//     for(let i = 0; i < secBtn.length; i++){
//         secBtn[i].addEventListener('click', () => {
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
//             this.className += 'active-btn'
//         })
//     }
// }

function PageTransitions(){
    // Iterate over the secBtn elements.
    for(let i = 0; i < secBtn.length; i++){
      // Add an event listener to each secBtn element.
      secBtn[i].addEventListener('click', function() {
        // Get the current active button.
        let currentBtn = document.querySelectorAll('.active-btn');
        // Remove the active-btn class from the current active button.
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        // Add the active-btn class to the button that was clicked.
        this.className += 'active-btn';
      })
    }

    // Sections Active class
    allSections.addEventListener('click', (e) =>{
      const id = e.target.dataset.id;
      if(id){
        // remove selected from other buttons
        sectBtns.forEach((btn) => {
          btn.classList.remove('active')
        })
        e.target.classList.add('active')

        // hide other sections
        sections.forEach((section) => {
          section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');
      }
    })

    // allSections.addEventListener('click', (e) => {
    //   console.log(e.target);
    // })
  }


PageTransitions();