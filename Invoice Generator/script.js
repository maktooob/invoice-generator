
const serviceEl = document.getElementById("service-el");
const amount = document.getElementById("amount-el");
const ulService = document.getElementById("ul-service");
const ulAmount = document.getElementById("ul-amount");
const addButton = document.getElementById("add-btn");
const totalPrice = document.getElementById("total-price");
let myServices =[];
let myAmount = [];


// PUSH TO ARRAY ON CLICK and call all functions

 addButton.addEventListener("click", function toList() {
    myServices.push(serviceEl.value);
    myAmount.push(amount.value);
    serviceEl.value = "";
    console.log(myServices); 
    addService();
    addAmount();
    addSum();
})

// LOOK INTO ARRAY AND WRITE TO LIST of Amount and Service
function addService(){
    let listItems = ""
for (let i = 0; i < myServices.length; i++){
    listItems += `<li>${myServices[i]}</li>`;
} 

ulService.innerHTML = listItems;
}

function addAmount(){
    let listNumbers = "";
for (let i = 0; i < myAmount.length; i++){
    listNumbers += `<li>  ${myAmount[i]} €</li>`;
} 
ulAmount.innerHTML = listNumbers;
}

// Get sum of myAmount array and print it to DOM

function addSum (){
let sum = 0;
for (let i = 0; i < myAmount.length; i++){
    myAmount = myAmount.map(Number);
    sum += myAmount[i];
}

totalPrice.innerHTML = `${sum} €`

}

 