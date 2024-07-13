function plus(a, b) {
    console.log(a+b);
}

plus(10, 20);

const player = {
    name: "nico",
    sayHello: function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("Bob")