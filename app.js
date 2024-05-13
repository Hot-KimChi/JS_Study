// variables 만드는 2가지 방법
// - [let] 은 뒤쪽에서 update가 가능
// - [const] 는 constant 라는 의미로 뒤쪽에서 No-update
const a = 2;
const b = 1;

console.log(a + b);
console.log(a * b);
console.log(a / b);

let myName = "nico";
console.log("hello " + myName);

myName = "nicolas"
console.log("your new name is " + myName);

const amIFat = false;
console.log(amIFat);

let something;
console.log(something)

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dayOfWeek);

dayOfWeek.push("sun");
console.log(dayOfWeek);


