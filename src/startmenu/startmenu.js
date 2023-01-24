import userInputStartMenu from "../utils/inputstartmenu.js"
import { userStat } from "../utils/userstat.js"

const startMenu = () => {
  console.clear()
  console.log(
    `
    ---Main Menu---

Hp : ${userStat.hp} 
Strenght : ${userStat.strenght}
Brain : ${userStat.brain}
Luck : ${userStat.luck}
Agility : ${userStat.agility} 

1. Fight
2. Shop
3. Save Game
4. Exit
`
  )
  userInputStartMenu()
}

export default startMenu
