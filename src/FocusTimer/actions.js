import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js' 

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()

    sounds.buttonPressAudio.play()
}

export function plusTime() {
    const addMinutes = el.minutes
    const minutes = Number(addMinutes.innerHTML)
    const newPlusMinute = Math.min(minutes + 5, 60);
    addMinutes.innerHTML = newPlusMinute

    sounds.buttonPressAudio.play()
}

export function minusTime() {
    const subMinutes = el.minutes
    const minutes = Number(subMinutes.innerHTML)
    const newSubMinute = Math.max(minutes - 5, 0);
    subMinutes.innerHTML = newSubMinute

    sounds.buttonPressAudio.play()
}





// tocar tudo junto nao...

export function forest() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.forestAudio.play()
        return
    }

    sounds.forestAudio.pause()
}

export function rain() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.rainAudio.play()
        return
    }

    sounds.rainAudio.pause()
}

export function coffeeShop() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.coffeeShopAudio.play()
        return
    }

    sounds.coffeeShopAudio.pause()
}

export function fireplace() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.fireplaceAudio.play()
        return
    }

    sounds.fireplaceAudio.pause()
}


