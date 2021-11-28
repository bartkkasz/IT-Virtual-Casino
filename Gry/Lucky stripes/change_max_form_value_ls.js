var input = document.getElementById("betAmount");
var betResult = document.querySelector(".betResult");
var user_balance;
var current_balance_max;
var betAmount;
var yourMoney = document.querySelector('.yourMoney');



jQuery( document ).ready(function($) {
user_balance = balance_to_pass.balance_to_change;
current_balance_max = user_balance;
input.setAttribute("max",user_balance);
yourMoney.innerHTML = current_balance_max;
});



jQuery('#betting').submit(function(){
    event.preventDefault();
    const formData = new FormData(event.target);
    betAmount = formData.get('betAmount'); 
    current_balance_max = user_balance - betAmount; 
    input.setAttribute("max",current_balance_max);
    yourMoney.innerHTML = current_balance_max;
});