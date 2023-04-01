type PlayerName = string;
type Age = number;
type Player = {
    readonly name: PlayerName,
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
// daunthird.name = "asd"

const numbers: readonly number[] = [1, 2, 3, 4, 5];
// numbers.push(1);

const player: readonly [string, number, boolean] = ["daun", 12, true];
// player[0] = 1;
// player[0] = "hi";

// let a: undefined = undefined
// let a: null = null

const a: any[] = [1, 2, 3, 4]
const b: any = true
a + b
