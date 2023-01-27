import endMenu from "../menu/exitmenu.js"
import startMenu from "../startmenu/startmenu.js"
import { rl } from "./inputmenu.js"
import { userStat } from "./userstat.js"

const userInputFightScreen = async () => {
  await rl.question("PRESS ENTER TO CONTINUE ")

  if (userStat.hp > 0) {
    startMenu()
  } else if (userStat.hp <= 0) {
    endMenu()
  }
}

export default userInputFightScreen
