class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating " + this.breed);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(this.name + " is barking " + this.breed);
    }
}
let dog = new Dog("Buddy", "German Shepherd");
dog.eat();
dog.bark();