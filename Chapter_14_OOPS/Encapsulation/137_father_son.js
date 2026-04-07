class father {
    #child1;
    #child2;
    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }
    getchild1() {
        return this.#child1;
    }
    setchild1(chnaged_name) {
        this.#child1 = chnaged_name;
    }
}
let p = new father("mike", "steve", "bill");
console.log(p.name);
console.log(p.getchild1());
p.setchild1("Rock");
console.log(p.getchild1());