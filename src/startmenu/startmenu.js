import userInputStartMenu from "../utils/inputstartmenu.js"
import { userStat } from "../utils/userstat.js"
import xpToStats from "../utils/xptostats.js"

const startMenu = async () => {
  console.clear()
  xpToStats()
  console.log(
    `
    ---Main Menu---

Hp : ${userStat.hp} 
Strenght : ${userStat.strenght}
Brain : ${userStat.brain}
Luck : ${userStat.luck}
Agility : ${userStat.agility} 

Money : ${userStat.money}
XP : ${userStat.xp}

1. Fight
2. Shop
3. Save Game
4. Exit
`
  )
  await userInputStartMenu()
}

export default startMenu
