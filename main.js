let previous = document.querySelector("#previous");
let next = document.querySelector("#next");

let pic1 = document.querySelector(".pic1");
let pic2 = document.querySelector(".pic2");
let pic3 = document.querySelector(".pic3");

let count = 1;
next.addEventListener("click", function () {
    count++;
    if(count>3){
        count=3;
    }
    if (count == 2) {
        pic1.style.left = "-100%";
        pic2.style.left = "0";
        pic3.style.left = "100%";
        pic1.style.transition = "0.5s";
        pic2.style.transition = "0.5s";
        pic3.style.transition = "0.5s";

    } else if (count == 3) {
        pic2.style.left = "-100%";
        pic3.style.left = "0";
        pic1.style.left = "-200%";
        pic1.style.transition = "0.5s";
        pic2.style.transition = "0.5s";
        pic3.style.transition = "0.5s";
    }
})
previous.addEventListener("click", function () {
    count--;
    if(count<1){
        count=1;
    }
    if (count == 2) {
        pic3.style.left = "100%";
        pic2.style.left = "0";
        pic1.style.left = "-100%";
        pic1.style.transition = "0.5s";
        pic2.style.transition = "0.5s";
        pic3.style.transition = "0.5s";

    } else if (count == 1) {
        pic2.style.left = "100%";
        pic1.style.left = "0";
        pic3.style.left = "200%";
        pic1.style.transition = "0.5s";
        pic2.style.transition = "0.5s";
        pic3.style.transition = "0.5s";
    }
})