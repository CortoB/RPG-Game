import readline from "node:readline/promises"
import endMenu from "../menu/exitmenu.js"
import loadMenu from "../menu/loadgame.js"

import startMenu from "../startmenu/startmenu.js"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const userInputMenu = async () => {
  const userInput = await rl.question("Choose number (1-3) : ")
  const parsedInput = parseInt(userInput)

  if (!parsedInput || parsedInput < 1 || parsedInput > 3) {
    console.log("Enter a number between 1 and 3.")
    await userInputMenu()
  } else if (parsedInput === 1) {
    await startMenu()
  } else if (parsedInput === 2) {
    await loadMenu()
  } else if (parsedInput === 3) {
    endMenu()
  }
}

export default userInputMenu
export { rl }
