const rdmUserStat = () => {
  const minStat = 20
  const maxStat = 60
  const rdm = Math.round(Math.random() * (maxStat - minStat) + minStat)

  return rdm
}

const userStat = {
  hp: rdmUserStat(),
  strenght: rdmUserStat(),
  brain: rdmUserStat(),
  luck: rdmUserStat(),
  agility: rdmUserStat(),
}

export { userStat }
