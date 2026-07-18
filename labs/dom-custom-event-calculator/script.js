function highlight(elem) {
    const bgColor = 'yellow';
    elem.style.backgroundColor = bgColor;

    // create the event
    let event = new CustomEvent('mark', {
        detail: {
            backgroundColor: bgColor
        }
    });
    // dispatch the event
    elem.dispatchEvent(event);
}

// Select the div element
let div = document.querySelector('.note');

// Add border style
function addBorder(elem) {
    elem.style.border = "solid 1px red";
}

// Listen to the highlight event
div.addEventListener('mark', function (e) {
    addBorder(this);

    // examine the background
    console.log(e.detail);
});

// highlight div element
highlight(div);