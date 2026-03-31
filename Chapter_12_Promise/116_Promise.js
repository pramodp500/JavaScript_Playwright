let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is Delivered");

    }
    else {
        reject("Order Cancelled");
    }

});
console.log(order);