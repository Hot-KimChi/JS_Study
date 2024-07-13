// objects check
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false
const playerFat = "little bit"

// property
const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);

player.fat = false;
console.log(player);

player.points = player.points + 15;
console.log(player);
console.log(player["name"]);

player.lastname = "apple"
console.log(player)
