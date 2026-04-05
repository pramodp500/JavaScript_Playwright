class car {
    constructor(name) {
        this.name = name;

    }
    drive() {
        console.log("Car is driving " + this.name);
    }
    printDetailsCars() {
        console.log("Car Details " + this.name);
    }
}

let car1 = new car("Tesla model v3");
car1.drive();
car1.printDetailsCars();