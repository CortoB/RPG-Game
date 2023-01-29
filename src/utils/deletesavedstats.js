import { unlink } from "node:fs"

const deleteSavedStats = () => {
  unlink("userStat.json", (err) => {
    if (err) {
      return
    }
  })
}

export default deleteSavedStats
