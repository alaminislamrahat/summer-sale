document.getElementById('modal-parent').style.visibility = 'hidden';
// discount id 
let discountValue = document.getElementById('discount');
let discountValueString = discountValue.textContent;
let discount = parseFloat(discountValueString);

let price = document.getElementById('total-price');
let totalPriceString = price.textContent;
let totalPrice = parseFloat(totalPriceString);

// main total 
let totalValue = document.getElementById('total');
let totalValueString = totalValue.textContent;
let total = parseFloat(totalValueString);
// grab all the single cards 
const cards = document.querySelectorAll('.card');
const ul = document.getElementById('ul');
cards.forEach((card)=>{
   card.addEventListener('click',()=>{
     nameList(card)
   });
});

// function for cart list and price 
// var totalAmount = 0;
function nameList(card){
   // indivisual cards name and price collect 
   const elementName = card.querySelector('.element-name').textContent;
   const elementPriceString = card.querySelector('.element-price').textContent;
   const elementPrice = parseFloat(elementPriceString);
   // creat li and append it 
   const li = document.createElement('li');
   
   li.textContent = elementName;
   ul.appendChild(li);

   // increasing price of total 
   totalPrice = totalPrice + elementPrice;
    
   // incresing main total 
   price.textContent = totalPrice;
   total = total + elementPrice;
   totalValue.textContent = total;
   
 
};








   
document.getElementById('apply-btn').addEventListener('click',()=>{
   let cartInput = document.getElementById('cart-input').value;
   if(totalPrice >= 200 && cartInput == "SELL200"){
      discountPrice();
   }
   });



// discount price function 
function discountPrice(){
   let discountCal = (totalPrice * 20)/100;
   
   discountValue.textContent = discountCal;

   totalValue.textContent = total-discountCal;
 
   
 }


//  purchase btn click 
 document.getElementById('purchase-btn').addEventListener('click',()=>{
   document.getElementById('modal-parent').style.visibility = 'visible';
 })


//  go home btn click 

document.getElementById('refresh-btn').addEventListener('click',()=>{
   document.getElementById('modal-parent').style.visibility = 'none';
   location.reload();
})




// modal 
 




