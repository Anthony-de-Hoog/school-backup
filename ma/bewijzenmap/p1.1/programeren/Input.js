let rl = require("readline-sync");

console.log("choose a path");

console.log("N (North");
console.log("S (South");
console.log("E (East");
console.log("W (West");
const answer = rl.question("Please input the letter of your choice");

if (answer == "N") {
    console.log("You go up North and see a big rainbow and find atreasure chest with the best Anime that the world have never seen.");
}

else if (answer == "S") {
    console.log("You go Southwards and realises that your life choices have let you down a path of decision making between North, South, East and West and you regret everything you have ever done.");
}

else if (answer == "E") {
    console.log("You go Eastwards and finds yourself home watching Anime. You're happy but oblivious of the life choises that have you let down this path.");
}

else if (answer == "W") {
    console.log("You go Westward and find the option to go back in time and change the life choises you made or watch anime. You choose the anime.")
}