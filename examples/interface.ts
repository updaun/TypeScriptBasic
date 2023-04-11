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

// abstract class OtherUser {
//     constructor(
//         protected firstName: string,
//         protected lastName: string
//     ) { }
//     abstract sayHi(name: string): string
//     abstract fullName(): string
// }

// class OtherPlayer extends OtherUser {
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
//     sayHi(name: string) {
//         return `Hello ${name}. My name is ${this.fullName()}`
//     }
// }

interface OtherUser {
    firstName: string,
    lastName: string,
    sayHi(name: string): string,
    fullName(): string
}
interface Human {
    health: number
}
class OtherPlayer implements OtherUser, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) { }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}


function makeUser(user: OtherUser): OtherUser {
    return {
        firstName: "up",
        lastName: "daun",
        fullName: () => "updaun",
        sayHi: (name) => "hi"
    }
}

makeUser({
    firstName: "up",
    lastName: "daun",
    fullName: () => "updaun",
    sayHi: (name) => "hi"
})