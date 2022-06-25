const sayGoodMorning = () => {
    console.log("good morning");
    console.log("What's Up!");
    console.log("Good Luck!");
} 

const sayGoodEvening = () => {
    console.log("good evening");
    console.log("good job!");
}

sayGoodMorning();

sayGoodEvening();

const calculateTotal = (price) => {
    console.log(price + 500 + "円");
}
calculateTotal(1200);

const addTwoArguments = (price, shippingFee) => {
    console.log(price + shippingFee + "円");
}
addTwoArguments(1200,800);