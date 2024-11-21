
let score = 0;

//äänitiedosto
const catVoice = new Audio("voices/cat.mp3")
catVoice.volume = 1.0;
const tigerVoice = new Audio("voices/tiger.mp3")
let playSound = true
const kisu = document.getElementById("kisu");

kisu.addEventListener("click", () => {
    score++;
    document.getElementById('score').innerText = score;
    if (playSound) {
        catVoice.play();

        if (score % 50 === 0) {
            tigerVoice.play();
        }
    }   
    kisu.classList.add("jump");
    setTimeout(() => {
        kisu.classList.remove("jump");
    }, 200);
});


const backgroundSound = new Audio("voices/jungle.mp3")
backgroundSound.loop = true;
backgroundSound.volume = 0.5;

let isBackgroundSoundOn = false;

function toggleBackgroundSound() {
    if (isBackgroundSoundOn) {
        backgroundSound.pause();
        isBackgroundSoundOn = false;
    } else {
        backgroundSound.play();
        isBackgroundSoundOn = true;
        
    }
}

document.getElementById('resetButton').addEventListener('click', function() {
    score = 0;
    document.getElementById('score').innerText = score;
})

backgroundSound.play();




