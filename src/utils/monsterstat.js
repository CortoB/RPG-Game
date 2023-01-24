function rdmMonsterStat() {
  const min = 45
  const max = 100

  const rdmStatMonster = Math.round(Math.random() * (max - min) + min)

  return rdmStatMonster
}

const monsterStat = {
  hp: rdmMonsterStat(),
  strenght: rdmMonsterStat(),
  brain: rdmMonsterStat(),
}

export { monsterStat }
