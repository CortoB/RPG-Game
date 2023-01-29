import { readFile } from "node:fs"
import userInputMenu from "../utils/inputmenu.js"

import { userStat } from "../utils/userstat.js"

const loadMenu = async () => {
  console.clear()
  readFile("userStat.json", "utf8", (err, data) => {
    if (err) {
      console.log("You don't have saved stats.")
      userInputMenu()

      return
    }

    console.log("You loaded your saved stats")
    let savedUserStat = JSON.parse(data)

    userStat.hp = savedUserStat.hp
    userStat.strenght = savedUserStat.strenght
    userStat.brain = savedUserStat.brain
    userStat.luck = savedUserStat.luck
    userStat.agility = savedUserStat.agility
    userStat.money = savedUserStat.money
    userStat.xp = savedUserStat.xp
    userInputMenu()
  })
}
export default loadMenu
