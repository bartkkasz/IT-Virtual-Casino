var input = document.getElementById("betAmount");
var betResultColor = document.querySelector(".betResult");
var yourMoney = document.querySelector('.yourMoney');
//var rightImage = document.querySelector('.rightImage');
var button = document.querySelector('.submitButton');
var user_balance;
var current_balance_max;
var betAmount;

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


button.addEventListener('transitionend', () => { 
    var style = getComputedStyle(betResultColor);
    var backgroundColor = style.backgroundColor
    console.log(backgroundColor);
    if(backgroundColor=='rgb(255, 215, 0)'){
        current_balance_max = parseInt(current_balance_max) + parseInt(betAmount);
        input.setAttribute("max",current_balance_max);
        user_balance = current_balance_max;
        yourMoney.innerHTML = current_balance_max;
    }
    else{
        input.setAttribute("max",current_balance_max);
        user_balance = current_balance_max;
        yourMoney.innerHTML = current_balance_max;
    }
});
