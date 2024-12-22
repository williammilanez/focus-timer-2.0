import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

state.currentAudio = null;

function stopAllAudios() {
    sounds.forestAudio.pause();
    sounds.rainAudio.pause();
    sounds.coffeeShopAudio.pause();
    sounds.fireplaceAudio.pause();

    sounds.forestAudio.currentTime = 0;
    sounds.rainAudio.currentTime = 0;
    sounds.coffeeShopAudio.currentTime = 0;
    sounds.fireplaceAudio.currentTime = 0;

    state.currentAudio = null;
}

function toggleAudio(audio) {
    if (state.currentAudio === audio) {
        audio.pause();
        state.currentAudio = null;
    } else {
        stopAllAudios();
        audio.play();
        state.currentAudio = audio;
    }
}

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();

    sounds.buttonPressAudio.play();
}

export function set() {
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();

    sounds.buttonPressAudio.play();
}

export function plusTime() {
    const addMinutes = el.minutes;
    const minutes = Number(addMinutes.innerHTML);
    const newPlusMinute = Math.min(minutes + 5, 60);
    addMinutes.innerHTML = newPlusMinute;

    sounds.buttonPressAudio.play();
}

export function minusTime() {
    const subMinutes = el.minutes;
    const minutes = Number(subMinutes.innerHTML);
    const newSubMinute = Math.max(minutes - 5, 0);
    subMinutes.innerHTML = newSubMinute;

    sounds.buttonPressAudio.play();
}

export function forest() {
    toggleAudio(sounds.forestAudio);
}

export function rain() {
    toggleAudio(sounds.rainAudio);
}

export function coffeeShop() {
    toggleAudio(sounds.coffeeShopAudio);
}

export function fireplace() {
    toggleAudio(sounds.fireplaceAudio);
}


