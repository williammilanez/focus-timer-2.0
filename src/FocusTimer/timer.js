import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {
    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }
    
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
    // setTimeout é uma função que recebe um callback
    // countdown é uma função que vai ser chamada de volta
    // 1000 é uma unidade de tempo que representa milissegundo (ms) ou equivalente a 1 segundo (s)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
    // ?? se chama nullish coalescing operator

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}


