const rdmMonsterStat = () => {
  const minStat = 20
  const maxStat = 30

  let rdmStatMonster = Math.round(Math.random() * (maxStat - minStat) + minStat)

  return rdmStatMonster
}

const rdmMonsterHpStat = () => {
  const minHp = 100
  const maxHp = 200

  let rdmHpStatMonster = Math.round(Math.random() * (maxHp - minHp) + minHp)

  return rdmHpStatMonster
}

let monsterStat = {
  hp: rdmMonsterHpStat(),
  strenght: rdmMonsterStat(),
  brain: rdmMonsterStat(),
}

export { monsterStat, rdmMonsterHpStat, rdmMonsterStat }
