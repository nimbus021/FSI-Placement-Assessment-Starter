// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Nghia Nguyen" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`



    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons

let quantity = 0;
const quantityDown= document.querySelector('#quanity-down')
const quanityUp= document.querySelector('#quanity-up')

document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
    let plusButton =document.querySelector('.add-gb');
    
        quantity ++;
        document.getElementById('qty-gb').textContent = gb
        updateQuantity(`Quantity: ${quantity}`)
       
})
document.getElementById('minus-gb').addEventListener('click', function() {
    console.log('Gingerbread + minus button was clicked!')
    let minusButton =document.querySelector('.minus-gb')
    if(quantity > 0) {
    quantity -= 1;}
        document.getElementById('qty-gb').textContent = gb
        updateQuantity(`Quantity: ${quantity}`)
})


document.getElementById('add-cc').addEventListener('click', function(){
    console.log('Chocolate Chip + button was clicked')
    let plusButton =document.querySelector('.add-cc');
    quantity ++;
    document.getElementById('qty-cc').textContent = cc
})
document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip + minus button was clicked!')
    let minusButton =document.querySelector('.minus-cc')
    if(quantity > 0) {
        quantity -= 1;}
        document.getElementById('qty-cc').textContent = cc
})



document.getElementById('add-sugar').addEventListener('click', function(){
    console.log('Sugar Sprinkle + button was clicked')
    let plusButton =document.querySelector('.add-sugar');
    quantity ++;
    document.getElementById('qty-sugar').textContent = sugar
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle + minus button was clicked!')
    let minusButton =document.querySelector('.minus-sugar')
    if(quantity > 0) {
        quantity -= 1;}
        document.getElementById('qty-sugar').textContent = sugar
})


