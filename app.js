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

// array에서 데이터 받아오기
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dayOfWeek);


// Add one more day to the array
dayOfWeek.push("sun");
console.log(dayOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab")
console.log(toBuy[0])
