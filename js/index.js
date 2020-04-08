// Your code goes here

// const get = (selector) => {
//     return document.querySelector(selector);
// }


//welcom aler


// function welcomeAlert(event) {

// debugger

//     console.log('an even fired at ${event.timestamp}')
//     return alert('Hi Yall');
// }

// window.addEventListener('click', welcomeAlert);

// const navChng = document.querySelector('.nav');

// function chngNavColor (event) {

//     navChng.
// }




// * [ ] `mouseover`


// MOUSEOVER FUN BUS IMAGE

// DECLARE VAR FOR QUERYSEL TARGET: TARGETING YELLOWBUS
const busImg = document.querySelector('#yellowBus')

// CREATE FUNCT TO HANDLE EVENT
function funBusHover(event) {

    // SELF-CHECK TO ENSURE CONNECTION
    console.log(`the mouse has entered`)

    // TARGET THE DOC'S STYLE ACCESS BGCOLOR AND CHNG TO RED
    document.body.style.backgroundColor = 'red';

}

// INVOKE THE EVENT BY CALL: PARAM1: WHAT WE CARE ABOUT PARAM2: WHAT FUNCT ARE WE USING/APPLYING
busImg.addEventListener('mouseover',funBusHover)

// DECLARE FUNCT TO HANDLE EVENT
function removeBusHover(event) {

    // SELF CHECK
    console.log(`the mouse has exited`)

    // ACCESS THE DOC'S BGCOLOR AND CHANGE TO WHITE
    document.body.style.backgroundColor = 'white';
}

// INVOKE FUNCT 
document.addEventListener('mouseout', removeBusHover);


//mousemove


// SHORT HAND EVENTLISTENER W/ ARROW FUNCT
document.addEventListener('mousemove', event => {

    // LOGS THE COORDS OF THE MOUSE
    console.log(`The X: ${event.offsetX} and The Y: ${event.offsetY}`);


})


// * [ ] `keydown`

// if the esc key is hit close document


// DECLARE FUNCT IF ESC KEY IS PRESSED
function escKeyPressed(event) {

    // IF THE KEY 'ESCAPE' IS PRESSED DO THE BODY
    if (event.key === 'Escape') {

        // CLOSES WINDOW ON KEYPRESS -- WINDOW/TAB
        window.close();

    }
}

// INVOKE EVENTLISTENER WHN KEY IS PRESSED
document.addEventListener('keydown', escKeyPressed)

// if the spacebar is pressed, the nav bar changes color to random color



// * [ ] `drag / drop`






// * [ ] `load`

// UPON ENTRY AND FULL LOADING OF THE PAGE THE POPUP WILL APPEAR

window.addEventListener('load', (event) => {
    window.confirm('page is fully loaded. this is the load event');
  });




// * [ ] `focus`

// WHEN THE MOUSE FOCUSES ON THE LETS GO PHOTO THE PHOTOS SIZE WILL CHANGE

const letsGoImg = document.querySelector('#letsGoPhoto');

letsGoImg.addEventListener('focus', (event) => event.style.backgroundColor) = 'yellow';







// * [ ] `resize`

// ENABLES RESIZING OF THE WINDOW

function resizeWin() {

    // get width and height of window

    const width = document.documentElement.clientWidth;

    const height = document.documentElement.clientHeight;

    // display results/coords

    console.log(`Width: ${width}  Height: ${height}`)

}

// INVOCATION OF THE ACTION
window.addEventListener('resize', resizeWin);




// * [ ] `scroll`

/**
 * CHANGE THE CURRENT SCROLL
 * 
 * window.scrollTo(pageX, pageY) = absolute coords
 * 
 * window.scrollBy(x, y) - scroll relative the current place
 * 
 * elem.scrollIntoView(top) - scroll to make elem visible (align with the top/bottom of the window)
 */


// }
/**
 * 
 * NOT WHAT I WANTED BUT IT IS AN EVENT
 * 
 * WHEN THE PAGE IS SCROLLED ALL THE WAY PAST THE BOTTOM THE PAGE FLIPS TO THE TOP OF THE PAGE
 */

function scrollToEnd(event) {

/**
 * BOTH OF THESE METHODS WORK
 */


    // window.scrollBy(0, -window.innerHeight);

    window.scrollBy(0, -9999);


}

document.addEventListener('wheel',scrollToEnd);


// debugger
// debugger



// debugger





// * [ ] `select`







// * [ ] `dblclick`

// have an alert pop us stating user double clicked

function youDoubleClicked(event) {

    return alert(`YOU DOUBLE CLICKED!!!!!!`)
}

document.addEventListener('dblclick', youDoubleClicked);







// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly


// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`