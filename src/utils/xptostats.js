import { userStat } from "./userstat.js"

const xpToStats = () => {
  if (userStat.xp >= 5) {
    userStat.hp += 10
    userStat.xp -= 5
  }
}

export default xpToStats
