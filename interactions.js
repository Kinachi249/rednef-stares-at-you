async function addClickHandler() {
    const rednefImage = document.querySelector("img.rednef-img");
    rednefImage.onclick = performBlink;
}

async function performBlink(event) {
    event.target.src = 'assets/rednef-blink.png';

    const blink = Math.floor(Math.random() * 2) + 1;
    new Audio(`assets/blinks/blink${blink}.mp3`).play();

    await new Promise(r => setTimeout(r, 100));
    
    event.target.src = 'assets/rednef-stare.png';
}

addClickHandler();