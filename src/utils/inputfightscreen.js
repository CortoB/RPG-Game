import endMenu from "../menu/exitmenu.js"
import startMenu from "../startmenu/startmenu.js"
import deleteSavedStats from "./deletesavedstats.js"
import { rl } from "./inputmenu.js"
import { userStat } from "./userstat.js"

const userInputFightScreen = async () => {
  const inputFightScreen = await rl.question("PRESS ENTER TO CONTINUE ")

  if (inputFightScreen === "") {
    if (userStat.hp > 0) {
      await startMenu()
    } else if (userStat.hp <= 0) {
      deleteSavedStats()
      endMenu()
    }
  } else {
    await userInputFightScreen()
  }
}

export default userInputFightScreen
