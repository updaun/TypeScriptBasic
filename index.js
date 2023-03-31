var playerDaun = {
    name: "daun"
};
var playerDaun2 = {
    name: "daun2"
};
// function playerMaker(name: string): Player {
//     return {
//         name
//     }
// }
var playerMaker = function (name) { return ({ name: name }); };
var daunthird = playerMaker("daun3");
daunthird.age = 12;
console.log(daunthird.name);
