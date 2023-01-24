import endMenu from "../menu/exitmenu.js"
import fight from "../startmenu/fightscreen.js"
import save from "../startmenu/savegame.js"
import shop from "../startmenu/shop.js"

import { rl } from "./inputmenu.js"

const userInputStartMenu = async () => {
  const userInput = await rl.question("Choose number (1-4) : ")

  if (parseInt(userInput) === 1) {
    fight()
  } else if (parseInt(userInput) === 2) {
    shop()
  } else if (parseInt(userInput) === 3) {
    save()
  } else if (parseInt(userInput) === 4) {
    endMenu()
  }
}
export default userInputStartMenu
