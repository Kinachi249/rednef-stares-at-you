const blinks = [
    new Audio(`assets/blinks/blink1.mp3`),
    new Audio(`assets/blinks/blink2.mp3`)
];

async function addClickHandler() {
    const rednefImage = document.querySelector("img.rednef-img");
    rednefImage.onclick = performBlink;
}

async function performBlink(event) {
    event.target.src = 'assets/rednef-blink.png';

    const blink = Math.floor(Math.random() * 2);
    blinks[blink].currentTime = 0;
    await blinks[blink].play();

    await new Promise(r => setTimeout(r, 100));
    
    event.target.src = 'assets/rednef-stare.png';
}

addClickHandler();