var input = document.getElementById("betAmount");
var betResultColor = document.querySelector('.betResult')
var yourBetForm = document.querySelector('.yourBet');
var wheelImage = document.querySelector('.wheel');
var user_balance;
var current_balance_max;
var colorbet;
var betAmount;
var wheelIMG;
var redWins = document.querySelector('.redWin');
var blackWins = document.querySelector('.blackWin');
var greenWins = document.querySelector('.greenWin');

var yourMoney = document.querySelector('.yourMoney');

jQuery( document ).ready(function($) {
console.log(data_to_pass);
var data = Object.values(data_to_pass);
user_balance = data[0];
wheelIMG = data[1];
current_balance_max = user_balance;
input.setAttribute("max",user_balance);
yourMoney.innerHTML = current_balance_max;

if(wheelIMG==1){

    wheelImage.src = "https://dev-virtualcasino.pantheonsite.io/wp-content/uploads/2021/11/rouletteWheel.png";
}
else if(wheelIMG==2){
    wheelImage.src = "https://dev-virtualcasino.pantheonsite.io/wp-content/uploads/2021/11/rouletteWheel2.png";
}

});



jQuery('#betting').submit(function(){
    event.preventDefault();
    const formData = new FormData(event.target);
    betAmount = formData.get('betAmount'); 
    current_balance_max = user_balance - betAmount; 
    input.setAttribute("max",current_balance_max);
    yourMoney.innerHTML = current_balance_max;
});


ball.addEventListener('transitionend', () => {
    var style = getComputedStyle(betResultColor);
    var backgroundColor = style.backgroundColor

    if(backgroundColor=='rgb(165, 42, 42)'){
        input.setAttribute("max",current_balance_max);
        user_balance = current_balance_max;
        yourMoney.innerHTML = current_balance_max;
    }
    else if(backgroundColor=='rgb(255, 215, 0)' && colorBet == 'green'){
        current_balance_max = parseInt(current_balance_max) + parseInt(2*betAmount);
        input.setAttribute("max",current_balance_max);
        user_balance = current_balance_max;
        yourMoney.innerHTML = current_balance_max;
    }
    else if(backgroundColor=='rgb(255, 215, 0)' && colorBet != 'green'){
        current_balance_max = parseInt(current_balance_max) + parseInt(betAmount);
        input.setAttribute("max",current_balance_max);
        user_balance = current_balance_max;
        yourMoney.innerHTML = current_balance_max;
    }


});

redWins.addEventListener('click', () => {
    colorBet = 'red';
});

blackWins.addEventListener('click', () => {
    colorBet = 'black'; 
});
greenWins.addEventListener('click', () => {
    colorBet = 'green'; 

});