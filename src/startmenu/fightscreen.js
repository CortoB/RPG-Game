import fightScript from "../../fightscript.js"
import userInputFightScreen from "../utils/inputfightscreen.js"

const fight = async () => {
  await fightScript()
  await userInputFightScreen()
}

export default fight
