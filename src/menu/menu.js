import userInputMenu from "../utils/inputmenu.js"

const menu = async () => {
  console.clear()
  console.log(`
  
  ---Welcome---

1. Start
2. Load
3. Exit
`)
  await userInputMenu()
}

export default menu
