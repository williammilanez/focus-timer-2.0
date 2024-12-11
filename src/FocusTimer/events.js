import state from "./state.js"
import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contendeditable')
    })
}



// arrumar daqui para baixo

export function plusTime() {
    if (minutes >= 60) {
      return
    }
    minutes = minutes + 5
    resetDisplay()
  }

export function minusTime() {
    if (minutes == 0) {
      return
    }
    minutes = minutes - 5
    resetDisplay()
  }



