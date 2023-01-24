import { monsterStat } from "./src/utils/monsterstat.js"
import { userStat } from "./src/utils/userstat.js"

const newUserStrBr = (userStat.strenght + userStat.brain) * 2
const newMonsterStrgBr = monsterStat.strenght + monsterStat.brain



while (userStat.hp > 0 && monsterStat.hp > 0) {
    newUserStrBr
}

console.log(newUserStrBr)
console.log(newMonsterStrgBr)
