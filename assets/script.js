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


// TODO: Hook up event listeners for the rest of the buttons



console.log('JavaScript code has loaded')
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread' + ' '+ 'button was clicked!')
    let plusButton =document.querySelector('.add-gb');
    
        gb += 1;
        document.getElementById('qty-gb').textContent = gb;
        document.getElementById('qty-total').textContent= gb + cc+ sugar;
})

//code for gb - 
document.getElementById('minus-gb').addEventListener('click', function() {
    console.log('Gingerbread' + ' ' +  'minus button was clicked!')
  
    if(gb > 0) {
    gb -= 1;
    }
        document.getElementById('qty-gb').textContent = gb;
        document.getElementById('qty-total').textContent= gb + cc+ sugar;
       
        
})

//code for cc +
document.getElementById('add-cc').addEventListener('click', function(){
    console.log('Chocolate Chip' + ' ' + 'button was clicked')
    let plusButton =document.querySelector('.add-cc');
    cc +=1;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent= gb + cc+ sugar;
    

})

//code for cc -

document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip' + ' '+ 'minus button was clicked!')
    
    if(cc > 0) {
        cc -= 1;
    }
        document.getElementById('qty-cc').textContent = cc;
        document.getElementById('qty-total').textContent= gb + cc+ sugar;
       
      
})


//code for sugar +

document.getElementById('add-sugar').addEventListener('click', function(){
    console.log('Sugar Sprinkle' + ' ' +'button was clicked')
    let plusButton =document.querySelector('.add-sugar');
    sugar +=1 ;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent= gb + cc+ sugar;
    
   
})

//code for sugar -
document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle' + ' ' + 'minus button was clicked!')
  
    if(sugar > 0) {
        sugar -= 1;
    }
        document.getElementById('qty-sugar').textContent = sugar;
        document.getElementById('qty-total').textContent= gb + cc+ sugar;
       
    
})
