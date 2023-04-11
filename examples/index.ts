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

let c: unknown;
if (typeof c === "number") {
    let d = c + 1;
}
if (typeof c === "string") {
    c.toUpperCase();
}
// none return function
function hello() {
    console.log("x");
}

// function never return
function nice(): never {
    throw new Error("x");
}

function hi(name: string | number) {
    if (typeof name === "string") {
        name
    } else if (typeof name === "number") {
        name
    } else {
        name
    }

}

// function add(a: number, b: number) {
//     return a + b;
// }

const add = (a: number, b: number) => a + b;

// call signature
type Add = (a: number, b: number) => number;

const add2: Add = (a, b) => a + b;

// overloading
type Add3 = {
    (a: number, b: number): number
    (a: number, b: string): number
}
const add3: Add3 = (a, b) => {
    if (typeof b === "string") {
        return a
    }
    return a + b
};

type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config)
    } else {
        console.log(config.path)
    }
}

type Add5 = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}

const add5: Add5 = (a, b, c?: number) => {
    if (c) {
        return a + b + c
    }
    return a + b
}

console.log(add5(1, 2))
console.log(add5(1, 2, 3))

// polymorphism
type SuperPrint = {
    // (arr: number[]): void
    // (arr: boolean[]): void
    // (arr: string[]): void
    // (arr: (number | boolean)[]): void
    // generic
    // <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
    <T>(arr: T[]): T
}

const superPrint: SuperPrint = (arr) => arr[0]

const a1 = superPrint([1, 2, 3])
const b1 = superPrint([true, false, true])
const c1 = superPrint(["a", "b", "c"])
const d1 = superPrint([1, 2, true, false, "hello"])

type SuperPrint2 = <T, M>(a: T[], b: M) => T

const superPrint2: SuperPrint2 = (arr) => arr[0]

const e1 = superPrint2([1, 2, true, false, "hello"], "x")


function superPrint3<T>(a: T[]) {
    return a[0]
}

type NewPlayer<E> = {
    name: string
    extraInfo: E
}

type NicoExtra = {
    favFood: string
}
// type DownPlayer = NewPlayer<{ favFood: string }>
type DownPlayer = NewPlayer<NicoExtra>

const down: DownPlayer = {
    name: "daun",
    extraInfo: {
        favFood: "kimchi"
    }
}

const pplayer: NewPlayer<null> = {
    name: "up",
    extraInfo: null
}