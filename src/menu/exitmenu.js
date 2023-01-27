import { rl } from "../utils/inputmenu.js"

const endMenu = () => {
  console.clear()
  console.log(`
---Game over---
    
Thanks for playing !`)
  rl.close()
}

export default endMenu
