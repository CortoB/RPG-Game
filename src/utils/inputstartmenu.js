import endMenu from "../menu/exitmenu.js"
import fight from "../startmenu/fightscreen.js"
import save from "../startmenu/savegame.js"
import shop from "../startmenu/shop.js"

import { rl } from "./inputmenu.js"

const userInputStartMenu = async () => {
  const userInput = await rl.question("Choose number (1-4) : ")
  const parsedInput = parseInt(userInput)

  if (!parsedInput || parsedInput < 1 || parsedInput > 4) {
    console.log("Enter a number between 1 and 4")
    await userInputStartMenu()
  } else if (parseInt(userInput) === 1) {
    await fight()
  } else if (parseInt(userInput) === 2) {
    await shop()
  } else if (parseInt(userInput) === 3) {
    console.log("You saved your stats")
    await save()
  } else if (parseInt(userInput) === 4) {
    endMenu()
  }
}
export default userInputStartMenu
