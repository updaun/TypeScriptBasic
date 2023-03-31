type PlayerName = string;
type Age = number;
type Player = {
    name: PlayerName,
    age?: Age,
}

const playerDaun: Player = {
    name: "daun",
}

const playerDaun2: Player = {
    name: "daun2",
}

// function playerMaker(name: string): Player {
//     return {
//         name
//     }
// }

const playerMaker = (name: string): Player => ({ name })

const daunthird = playerMaker("daun3");
daunthird.age = 12;
console.log(daunthird.name);