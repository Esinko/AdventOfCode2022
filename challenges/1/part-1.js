const { readFileSync } = require("fs")

const mostCalories = readFileSync("./input.txt").toString().trim().split("\n")
    .map((line) => line.trim())
    .join("\n")
    .split("\n\n")
    .map((line) => line.split("\n")
                    .map(Number)
                    .reduce((a, b) => a + b)
    )
    .sort((a, b) => b - a)[0]
    
console.log(
    "The elf with the most calories is carrying",
    mostCalories,
    "calories."
)