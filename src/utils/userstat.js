const rdmUserStat = () => {
  const min = 10
  const max = 35
  const rdm = Math.round(Math.random() * (max - min) + min)

  return rdm
}

const rdmUserHpStat = () => {
  const min = 160
  const max = 190
  const rdm = Math.round(Math.random() * (max - min) + min)

  return rdm
}

const userStat = {
  hp: rdmUserHpStat(),
  strenght: rdmUserStat(),
  brain: rdmUserStat(),
  luck: rdmUserStat(),
  agility: rdmUserStat(),
}

export { userStat }
