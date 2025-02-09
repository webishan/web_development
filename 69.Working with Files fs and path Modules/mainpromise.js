import fs from "fs/promises"

let a = await fs.readFile("ishan.txt")

let b = await fs.appendFile("ishan.txt", "\n\n\n\nthis is amazing promise")

console.log(a.toString(), b)