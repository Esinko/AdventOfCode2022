const { readFileSync } = require("fs")

const mostCalories = readFileSync("./input.txt").toString().trim().split("\n")
    .map((line) => line.trim())
    .join("\n")
    .split("\n\n")
    .map((line) => line.split("\n")
                    .map(Number)
                    .reduce((a, b) => a + b)
    )
    .sort((a, b) => b - a)
    .splice(0, 3)
    .reduce((a, b) => a + b) 
    
console.log(
    "The top 3 elves with most calories are carrying in total",
    mostCalories,
    "calories."
)