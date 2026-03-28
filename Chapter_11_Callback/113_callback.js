function placeOrder(item, callback) {
    console.log("...Place Order");
    callback();
}
function print() {
    console.log("order is done");
}
placeOrder("Pizza", function () {
    console.log("Anonymous order received");

});
placeOrder("Burger", () => {
    console.log("way 2 Anonymous");
});
