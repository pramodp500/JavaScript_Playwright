// Objects 
// Key value pair
let student1 = { name: "Amit", Age: 30 };
let student2 = { name: "Ramaic" };
let student3 = { name: "Roshan", Age: 33, Mobile: 9632545269 };

console.log(student1.Age);
console.log(student2.name);
console.log(student3.Mobile);
console.log(student3);

let a = { status: "Pass" };
let b = a;
console.log(b);

let c = { status: "pending" };
let d = { status: "pending" };
console.log(c == d);

const user = {
    name: "xyz123",
    password: "[PASSWORD]",
    role: "admin"
}

console.log(user.name);
console.log(user.password);
console.log(user.role);
console.log(user);

user.city = "NY";
user.age = 55;
console.log(user);

let obj1 = { value: 20 };
let obj2 = obj1;
obj2.value = 99;
console.log(obj2.value);
