// import { createInterface } from "readline";

import { randomStat } from "./statplayer"

// console.log(`---Welcome---
// 1. Start
// 2. Load
// 3. Exit
// `);

// const readline = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const readLineAsync = (msg) => {
//   return new Promise((resolve) => {
//     readline.question(msg, (menuNum) => {
//       resolve(menuNum);
//     });
//   });
// };

// const startApp = async () => {
//   const menuNum = await readLineAsync("Choose a number (1-3) : ");
//   if (menuNum > 3 || menuNum < 1) {
//     console.log("You have to choose between 1,2 or 3");
//   }
//   readline.close();
//   console.log(menuNum);
// };

// startApp();
randomStat()
