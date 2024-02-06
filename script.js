"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const reloadButton = document.querySelector(".btn--reload");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImage = document.querySelector(".cat-img");
const song = document.querySelector("audio");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

reloadButton.classList.add("hidden");

yesButton.addEventListener("click", handleYesclick);
noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        changeImages(imageIndex);
        resiseYesButton();
        updateNoButtonText();
        if (noCount === 1) {
            titleElement.innerHTML = "Let's try again 🥲";
        }
        if (noCount === 2) {
            titleElement.innerHTML = "Are you sure? 🤔";
        }
        if (noCount === 3) {
            titleElement.innerHTML = "Click on the Yes button 🤗";
        }
        if (noCount === 4) {
            titleElement.innerHTML = "You can do it! 😉";
        }
        if (noCount === 5) {
            titleElement.innerHTML = "I know we would make a great couple so..."
        }
        if (noCount === 6) {
            titleElement.innerHTML = "Do you want to make me the happiest man in the world becoming my Valentine.."
        }
        if (noCount === 7) {
            titleElement.innerHTML = "I'm crying 😭"
        }
        if (noCount === 8) {
            titleElement.innerHTML = "Will you be my VALENTINE?"
        }
        if (noCount === 9) {
            titleElement.innerHTML = "WILL you bE my VALENTINE?"
        }
        if (noCount === 10) {
            titleElement.innerHTML = "WILL YOU BE MY VALENTINE?"
        }
        if (noCount === 11) {
            noButton.classList.add("hidden");
            titleElement.innerHTML = "Try to refuse now";
        }
    }
});

reloadButton.addEventListener("click", function () {
    location.reload();
})

function handleMouseMove(event) {
    song.play();
}

function handleYesclick() {
    titleElement.innerHTML = "Yayyy!! Finally I got you <3. See you on the 14th babygirl 😍😘";
    buttonsContainer.classList.add("hidden");
    reloadButton.classList.remove("hidden");
    changeImage("yes");
}

function changeImage(image) {
    catImage.src = `images/Cat-Yes.gif`;
    catImage.style.transition = 'ease-in opacity 0.5';
    catImage.addEventListener('load', () => {
        catImage.style.opacity = 1;
    });
    catImage.style.opacity = 0;
}

function resiseYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fonstSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fonstSize * 1.3;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const message = [
        "No",
        "Maybe your finger slipped",
        "Yk...I really like potatoes <3",
        "Wait...",
        "Are you sure?",
        "Please accept...you are breaking my heart",
        "I am gonna cry (っ °Д °;)っ",
        "I'm giving up",
        "LOL, i was just kidding",
        "This is a kidnapping",
        "Here is ur last chance （︶^︶）",
    ];

    const messageIndex = Math.min(noCount, message.length - 1);
    return message[messageIndex];
}

function changeImages(image) {
    catImage.src = `images/Cat-${image + 1}.jpeg`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}
