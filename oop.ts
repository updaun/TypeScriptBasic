abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickname: string,
    ) { }
    abstract getNickName(): void

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Player2 extends User {
    getNickName() {
        console.log(this.nickname)
    }
}

const daun = new Player2("daun", "jeon", "daun3");

// daun.firstName

// daun.nickname

daun.getFullName()
