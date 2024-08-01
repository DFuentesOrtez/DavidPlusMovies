// let mouseDown = false;
// let startX, scrollLeft;
// const slider = document.querySelector(".fullList");

// const startDragging = (e) => {
//     mouseDown = true;
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// }

// const stopDragging = (e) => {
//     mouseDown = false;
// }

// const move = (e) => {
//     e.preventDefault();
//     if (!mouseDown) { return; }
//     const x = e.pageX - slider.offsetLeft;
//     const scroll = x - startX;
//     slider.scrollLeft = scrollLeft - scroll;
// }

// // Add the event listeners
// slider.addEventListener('mousemove', move, false);
// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);

const container = document.querySelector('.fullList');

let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown', e => mouseIsDown(e));
container.addEventListener('mouseup', e => mouseUp(e))
container.addEventListener('mouseleave', e => mouseLeave(e));
container.addEventListener('mousemove', e => mouseMove(e));

function mouseIsDown(e) {
    isDown = true;
    startY = e.pageY - container.offsetTop;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    scrollTop = container.scrollTop;
}
function mouseUp(e) {
    isDown = false;
}
function mouseLeave(e) {
    isDown = false;
}
function mouseMove(e) {
    if (isDown) {
        e.preventDefault();
        //Move vertcally
        const y = e.pageY - container.offsetTop;
        const walkY = y - startY;
        container.scrollTop = scrollTop - walkY;

        //Move Horizontally
        const x = e.pageX - container.offsetLeft;
        const walkX = x - startX;
        container.scrollLeft = scrollLeft - walkX;

    }
}

let horizontal = document.getElementById("myList");
horizontal.addEventListener("wheel", (e) => {
    e.preventDefault();
    horizontal.scrollLeft += e.deltaY;
})

// var item = document.getElementById("myList");

// window.addEventListener("wheel", function (e) {
//     if (e.deltaY > 0) item.scrollLeft += 100;
//     else item.scrollLeft -= 100;
// });