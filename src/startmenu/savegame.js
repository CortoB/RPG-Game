import { writeFile } from "node:fs"
import userInputStartMenu from "../utils/inputstartmenu.js"
import { userStat } from "../utils/userstat.js"
const save = async () => {
  const data = JSON.stringify(userStat)
  writeFile("userStat.json", data, (err) => {
    if (err) {
      throw err
    }
  })
  await userInputStartMenu()
}

export default save
