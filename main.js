let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function (){
    if (window.scrollY >= section.offsetTop - 250) {
        progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
        });
    }
};

let countDownDate = new Date("Dec 31,2026 23:59:59").getTime();

let counter = setInterval(() =>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / ( 1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % ( 1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % ( 1000 * 60 ) / 1000);
    
    document.querySelector(".unit .days").innerHTML = days;
    document.querySelector(".unit .hours").innerHTML = hours;
    document.querySelector(".unit .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if(dateDiff === 0){
        clearInterval(counter);
    }
},1000);