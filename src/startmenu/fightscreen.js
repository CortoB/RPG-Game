import monsterStat from "../utils/monsterstat.js"
import { rl } from "../utils/inputmenu.js"

const fight = () => {
  console.log(`
    ---Fight---

Monster:

Hp : ${monsterStat.HP}
Strenght : ${monsterStat.Strenght}
Brain : ${monsterStat.Brain}

  `)
  rl.close()
}

export default fight
