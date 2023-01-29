import { rdmMonsterStat, monsterStat, rdmMonsterHpStat } from "./monsterstat.js"
import { userStat } from "./userstat.js"

const newUserStrBr = userStat.strenght + userStat.brain
const newMonsterStrgBr = monsterStat.strenght + monsterStat.brain
const MAXRDM = 20
const MINRDM = 10

const beginingFight = async () => {
  console.clear()

  console.log(`
  ---Battle---
    
    Monster :                 
    Hp : ${monsterStat.hp}
    Strenght : ${monsterStat.strenght}            
    Brain : ${monsterStat.brain}

    User : 
    Hp : ${userStat.hp}
    Strenght : ${userStat.strenght}            
    Brain : ${userStat.brain}            

    `)
}

const fightScript = async (damageToMonster, rdmDamage, damageToUser) => {
  console.clear()
  const xp = Math.round(Math.random() * (20 - 1) + 1)
  const money = Math.round(Math.random() * (30 - 5) + 5)
  const chanceCritical = userStat.luck * 0.2
  const chanceDodge = userStat.agility * 0.1
  let newMonsterStat = {
    hp: rdmMonsterHpStat(),
    strenght: rdmMonsterStat(),
    brain: rdmMonsterStat(),
  }

  if (monsterStat.hp <= 0) {
    monsterStat.hp = newMonsterStat.hp
    monsterStat.strenght = newMonsterStat.strenght
    monsterStat.brain = newMonsterStat.brain
  }

  while (monsterStat.hp > 0 && userStat.hp > 0) {
    for (let i = 1; monsterStat.hp && userStat.hp > 0; i++) {
      rdmDamage = Math.round(Math.random() * (MAXRDM - MINRDM) + MINRDM)
      damageToMonster = newUserStrBr - newMonsterStrgBr + rdmDamage
      damageToUser = monsterStat.strenght + monsterStat.brain - rdmDamage * 2
      const criticalHit = Math.round(Math.random() * (100 - 1) + 1)
      const dodge = Math.round(Math.random() * (100 - 1) + 1)

      console.log(`---Round ${i}---`)

      //Rajout de damageToMonster car si il est négatif on a une boucle infini

      if (damageToMonster < 0) {
        damageToMonster += 38
      }

      if (criticalHit < chanceCritical) {
        damageToMonster = (newUserStrBr - newMonsterStrgBr + rdmDamage) * 2
        console.log("Critical hit!")
      }

      monsterStat.hp -= damageToMonster

      console.log(`Monster lost : ${damageToMonster}`)

      if (monsterStat.hp > 0) {
        console.log(`Monster hp : ${monsterStat.hp}
        `)
      } else if (monsterStat.hp <= 0) {
        console.log(`Monster hp : 0
        
          Monster is dead ! You WIN !
          You won ${xp}XP and ${money} money !
        `)
        userStat.xp += xp
        userStat.money += money

        break
      }

      if (dodge < chanceDodge) {
        console.log(`You DODGE !
User lost : 0
User hp : ${userStat.hp}`)
      } else {
        userStat.hp -= damageToUser
        console.log(`User lost : ${damageToUser}`)

        if (userStat.hp <= 0) {
          console.log(`User hp : 0

        You are dead ! You LOST`)

          break
        } else {
          console.log(`User hp : ${userStat.hp}
        `)
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }
}

export { fightScript, beginingFight }
