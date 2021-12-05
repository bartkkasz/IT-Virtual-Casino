     
        /* WHEELS
        1) wheel_choices[0]['wheel_1']
        2) wheel_choices[0]['wheel_2']
        3) wheel_choices[0]['wheel_3']
        */

var button_0 = document.querySelector('.basicWheel');
var button_1 = document.querySelector('.secondWheel');    

var wheel_0_display = document.querySelector('.wheel_1');
var wheel_1_display = document.querySelector('.wheel_2');
var current_balance = document.querySelector('.yourMoney');

var user_balance = 0;
var wheel_1 = 999;
var wheel_2 = 999;
var wheel_3 = 999;
var selected_wheel=999;
var cost = 0;

/* On default all buttons are disabled */
button_0.style.pointerEvents = 'none';
button_1.style.pointerEvents = 'none';




jQuery( document ).ready(function($) {

        
        wheel_choices = Object.values(wheel_choices_to_pass);
        user_balance = balance_to_pass['balance_to_change'];
        wheel_1 = wheel_choices[0]['wheel_1']; //Basic Wheel
        wheel_2 = wheel_choices[0]['wheel_2']; //Christmas Wheel
        wheel_3 = wheel_choices[0]['wheel_3']; // ???
        selected_wheel=selected_Wheel[0]['WheelImage']; //Selected Wheel 1: Basic, 2: Christmas
        userID = user_id[0]['ID'];
        current_balance.innerHTML = user_balance;

                                                /*Style buttons*/
        if(selected_wheel!=2){

                /* Check if the wheel is not already purchased */
                if(wheel_2==0){
                        /* Check if user can buy the wheel */
                        if(user_balance>=5000){
                        cost = 2500;
                        button_1.style.pointerEvents = 'auto';
                        wheel_1_display.innerHTML = 'Buy for 5000'; 
                          }
                        else{
                        button_1.style.pointerEvents='none';
                        wheel_1_display.innerHTML = 'Buy for 5000';
                        }     
                }
                else if(wheel_2==1){
                cost = 0;
                button_1.style.pointerEvents = 'auto';
                wheel_1_display.innerHTML = 'Select'; 
                }
        }  
        if(selected_wheel==1){ //BASIC_WHEEL
                wheel_0_display.innerHTML = 'Selected';
                button_0.style.pointerEvents = 'none';
        }
        else if(selected_wheel==2){ //CHRISTMAS_WHEEL

                wheel_0_display.innerHTML = 'Select';
                button_0.style.pointerEvents = 'auto';

                wheel_1_display.innerHTML = 'Selected';
                button_1.style.pointerEvents = 'none';
        }
        
       
});


button_0.addEventListener('click', () => {
        basicWheel();
});

button_1.addEventListener('click', () => {

        secondWheel();
});



function basicWheel(){
        var wheelImage = 1;
        cost = 0;
        var link="https://dev-virtualcasino.pantheonsite.io/wp-admin/admin-ajax.php";   
        var dataToSend = {
                action: 'changeWheelImage',
                wheelIMG: wheelImage,
                balance_to_remove: cost,
        }
         jQuery.ajax({
                url:link,
                data: dataToSend,
                dataType: "json",
                type:'post',
                });
        button_0.style.pointerEvents = 'none';
        if(wheel_1==1){
                button_1.style.pointerEvents = 'auto';
        }
        if(wheel_2==1){
                wheel_1_display.innerHTML = 'Select';
                }
                else{
                        wheel_1_display.innerHTML = 'Buy for 5000';
                        if(user_balance>=5000){
                                cost = 5000;
                                button_1.style.pointerEvents = 'auto';
                        }
                        else{
                                button_1.style.pointerEvents = 'none';
                        }
                }
                wheel_0_display.innerHTML = 'Selected';
        }
       

function secondWheel(){
        var wheelImage = 2;

        var link="https://dev-virtualcasino.pantheonsite.io/wp-admin/admin-ajax.php";   
        var dataToSend = {
                action: 'changeWheelImage',
                wheelIMG: wheelImage,
                balance_to_remove: cost,
        }
         jQuery.ajax({
                url:link,
                data: dataToSend,
                dataType: "json",
                type:'post',
                });


        if(wheel_2==0){
                var dataToSendPS = {
                        action: 'prizeShopBuy',
                        column: 'wheel_2',
                }
                 jQuery.ajax({
                        url:link,
                        data: dataToSendPS,
                        dataType: "json",
                        type:'post',
                        });
                wheel_2=1;     
                current_balance.innerHTML = user_balance-5000;   
        }        


        button_1.style.pointerEvents = 'none';      
        button_0.style.pointerEvents = 'auto';
        wheel_1_display.innerHTML = 'Selected';
        wheel_0_display.innerHTML = 'Select';
        
         }