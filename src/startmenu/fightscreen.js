import { fightScript, beginingFight } from "../utils/fightscript.js"
import userInputFightScreen from "../utils/inputfightscreen.js"

const fight = async () => {
  console.clear()
  await beginingFight()
  await fightScript()
  await userInputFightScreen()
}

export default fight
