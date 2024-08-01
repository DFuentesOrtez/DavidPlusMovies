$(document).ready(function () {

    $(".spoilerWarning:eq(0)").on("click", function () {
        $(".mySpoiler:eq(0)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(1)").on("click", function () {
        $(".mySpoiler:eq(1)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(2)").on("click", function () {
        $(".mySpoiler:eq(2)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(3)").on("click", function () {
        $(".mySpoiler:eq(3)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(4)").on("click", function () {
        $(".mySpoiler:eq(4)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(5)").on("click", function () {
        $(".mySpoiler:eq(5)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(6)").on("click", function () {
        $(".mySpoiler:eq(6)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(7)").on("click", function () {
        $(".mySpoiler:eq(7)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(8)").on("click", function () {
        $(".mySpoiler:eq(8)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(9)").on("click", function () {
        $(".mySpoiler:eq(9)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(10)").on("click", function () {
        $(".mySpoiler:eq(10)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(11)").on("click", function () {
        $(".mySpoiler:eq(11)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(12)").on("click", function () {
        $(".mySpoiler:eq(12)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(13)").on("click", function () {
        $(".mySpoiler:eq(13)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(14)").on("click", function () {
        $(".mySpoiler:eq(14)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(15)").on("click", function () {
        $(".mySpoiler:eq(15)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(16)").on("click", function () {
        $(".mySpoiler:eq(16)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(17)").on("click", function () {
        $(".mySpoiler:eq(17)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(18)").on("click", function () {
        $(".mySpoiler:eq(18)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(19)").on("click", function () {
        $(".mySpoiler:eq(19)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(20)").on("click", function () {
        $(".mySpoiler:eq(20)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(21)").on("click", function () {
        $(".mySpoiler:eq(21)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(22)").on("click", function () {
        $(".mySpoiler:eq(22)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(23)").on("click", function () {
        $(".mySpoiler:eq(23)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(24)").on("click", function () {
        $(".mySpoiler:eq(24)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(25)").on("click", function () {
        $(".mySpoiler:eq(25)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(26)").on("click", function () {
        $(".mySpoiler:eq(26)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(27)").on("click", function () {
        $(".mySpoiler:eq(27)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(28)").on("click", function () {
        $(".mySpoiler:eq(28)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(29)").on("click", function () {
        $(".mySpoiler:eq(29)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerWarning:eq(30)").on("click", function () {
        $(".mySpoiler:eq(30)").toggleClass("open");
    });
});



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