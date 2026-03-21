function doing_work(worker, callback) {
    console.log("Started the Work");
    let work = worker;
    console.log("Finished the Work");
    callback();
}

function callWife() {
    console.log("Call Wife when Done");
}
doing_work("PW done", callWife);
