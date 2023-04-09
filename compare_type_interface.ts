type PlayerA = {
    name: string
}
type PlayerAA = PlayerA & {
    lastName: string
}
// type PlayerAA = {
//     health: number
// }
const playerA: PlayerAA = {
    name: "updaun",
    lastName: "xxx",
    // health: 100
}

interface PlayerB {
    name: string
}
interface PlayerBB extends PlayerB {
    lastName: string
}
interface PlayerBB {
    health: number
}
const playerB: PlayerBB = {
    name: "updaun",
    lastName: "xxx",
    health: 100
}


type PlayerC = {
    firstName: string
}
interface PlayerD {
    firstName: string
}

// type and interface can be used interchangeably
// class PlayerUser implements PlayerC {
class PlayerUser implements PlayerD {
    constructor(
        public firstName: string
    ) { }
}