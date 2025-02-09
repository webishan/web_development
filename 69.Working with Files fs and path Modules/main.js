const fs = require("fs")
// const fs = require("fs/promises")

console.log("starting")
// fs.writeFileSync("ishan.txt", "Ishan is a good boy")

fs.writeFile("ishan2.txt", "Ishan is a good boy2", ()=>{
    console.log("done")
    fs.readFile("ishan2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("ishan.txt", "ishanrobo", (e, d)=>{
    console.log(d)
})
console.log("ending")