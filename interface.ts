/*
type Nickname = string
type Health = 1 | 5 | 10
type Friends = Array<string>
type Team = "red" | "blue" | "yellow"
type Player = {
    nickname: string,
    health: Health
    team: Team
}

const updaun: Player = {
    nickname: "updaun",
    team: "red",
    health: 10
}

type Food = string;

const korean_kimchi: Food = "delicious"

interface Person {
    nickname: string,
    health: Health
    team: Team
}
*/
interface GameUser {
    readonly name: string
}

interface GameUser {
    lastName?: string
}


interface Player extends GameUser {

}

const updown: Player = {
    name: "updaun"

}

// updown.name =

