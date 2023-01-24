export const randomStat = async () => {
  const stat = []
  for (let i = 0; i < 5; i = i + 1) {
    const randomNum = Math.floor(Math.random() * 51)
    stat[i] = randomNum
  }
}
