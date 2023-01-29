import { rl } from "../utils/inputmenu.js"
import { userStat } from "../utils/userstat.js"
import startMenu from "./startmenu.js"

const shop = async () => {
  console.clear()
  console.log(`
  1. Buy 5hp for 10money
  2. Buy 5strenght for 10money
  3. Go back to main menu
  `)
  const inputShop = await rl.question("Choose (1-3) : ")

  const parsedInputShop = parseInt(inputShop)

  if (!parsedInputShop || parsedInputShop < 1 || parsedInputShop > 3) {
    await shop()
  } else if (userStat.money >= 10 && parseInt(inputShop) === 1) {
    userStat.hp += 5
    userStat.money -= 10
    await startMenu()
  } else if (userStat.money >= 10 && parseInt(inputShop) === 2) {
    userStat.strenght += 5
    userStat.money -= 10
    await startMenu()
  } else if (parseInt(inputShop) === 3) {
    await startMenu()
  } else {
    await shop()
  }
}

export default shop
