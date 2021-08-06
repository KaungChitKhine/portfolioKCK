//Javascript see more ABOUT button 
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less[日本語]";
        moreText.style.display = "inline";
    }
}

//Javascript see more SKILL button 
function myFunctionSkill() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more-skill");
    var btnText = document.getElementById("myBtnSkill");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less[日本語]";
        moreText.style.display = "inline";
    }
}
//---------------------------------------------pubnub.com (Current online script) Start--------------------------------------------------------------//

var active = document.getElementById('active');

function setCurrentlyActiveUsers(numberOfUsers) {
    active.innerText = numberOfUsers.toString();
}
setCurrentlyActiveUsers(1);
var pubnub = new PubNub({
    publishKey: '__YOUR_PUB_KEY__',
    subscribeKey: '__YOUR_SUB_KEY__',
    heartbeatInterval: 30
});
pubnub.addListener({
    presence: function(presenceEvent) {
        setCurrentlyActiveUsers(presenceEvent.occupancy);
    }
});
pubnub.subscribe({
    channels: ['myWebPage1'],
    withPresence: true
});
//---------------------------------------------pubnub.com (Current online script) END--------------------------------------------------------------//
//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}