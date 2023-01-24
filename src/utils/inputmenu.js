import readline from "node:readline/promises"
import endMenu from "../menu/exitmenu.js"
import loadMenu from "../menu/loadmenu.js"

import startMenu from "../startmenu/startmenu.js"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const userInputMenu = async () => {
  const userInput = await rl.question("Choose number (1-3) : ")

  if (parseInt(userInput) === 1) {
    startMenu()
  } else if (parseInt(userInput) === 2) {
    loadMenu()
  } else if (parseInt(userInput) === 3) {
    endMenu()
  }
}

export default userInputMenu
export { rl }
