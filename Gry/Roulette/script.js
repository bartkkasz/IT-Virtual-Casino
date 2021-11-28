    // game core
    const wheel = document.querySelector('.wheel');
    const result = document.querySelector('.result');
    const ball = document.querySelector('.ball');
    const previousResult = document.querySelector('.previousResult');

    let parts = 15;
    let deg = 0;
    let minSpin = 1000;
    let segment = 360/parts;
    let previousWheelDeg = 0;
   
    //betting system
    const yourBet = document.querySelector('.yourBet');
    const redWin = document.querySelector('.redWin');
    const blackWin = document.querySelector('.blackWin');
    const greenWin = document.querySelector('.greenWin');
    const betResult = document.querySelector(".betResult");
    var colorBet='none';
    var resultColor;
    var betTextResult = '-';
    var form;
    var user_balance;
    var flag = 1;


    startTime = new Date();



    const symbolSegments = {
        1: "Green 0",
        2: "Black 10",
        3: "Red 3",
        4: "Black 6",
        5: "Red 7",
        6: "Black 12",
        7: "Red 5",
        8: "Black 4",
        9: "Red 9",
        10: "Black 14",
        11: "Red 1",
        12: "Black 8",
        13: "Red 11",
        14: "Black 2",
        15: "Red 13",

/*

*/
    }

    var redSegments = [3,5,7,9,11,13,15];
    var blackSegments = [2,4,6,8,10,12,14];


    jQuery("#submitButton").attr("disabled", true);
    
    ball.addEventListener('transitionend', () => {
        var endTime = new Date();
        var timeDiff = endTime - startTime;
        wheelDeg = (timeDiff * 360/4000); 
        var wheelDegNormalised = wheelDeg%360;
        var actualDeg = 360-((deg + wheelDeg + previousWheelDeg)%360);
        showResult(actualDeg, colorBet); 
        wheel.style.animationPlayState = 'paused';
        if(betTextResult == "WIN" && colorBet!='green'){
            betResult.style.backgroundColor="gold";
                var link="https://dev-virtualcasino.pantheonsite.io/wp-admin/admin-ajax.php";   
                var formDataWin = new FormData;
                formDataWin.append('action','betWin');
                formDataWin.append('betWin', form);
                jQuery.ajax({
                    url:link,
                    data:formDataWin,
                    processData:false,
                    contentType:false,
                    type:'post',

        
                });
        }
        else if (betTextResult=="WIN" && colorBet=='green'){
            betResult.style.backgroundColor="gold";
            var link="https://dev-virtualcasino.pantheonsite.io/wp-admin/admin-ajax.php";   
            var formDataGreenWin = new FormData;
            formDataGreenWin.append('action','betWinGreen');
            formDataGreenWin.append('betWinGreen', form);
            jQuery.ajax({
                url:link,
                data:formDataGreenWin,
                processData:false,
                contentType:false,
                type:'post',

    
            });
        }
        else if (betTextResult == "LOSE"){
            betResult.style.backgroundColor="brown";
        }
        setTimeout(revertRouletteState, 5000);


    });

    const showResult = (actualDeg, colorBet) => {
        const winningSymbolNr = Math.ceil(actualDeg / segment);
        result.innerHTML = symbolSegments[winningSymbolNr];

        if(redSegments.includes(winningSymbolNr)) {
            resultColor = "red";
            if(colorBet == 'red') {
                betTextResult = "WIN";
                betResult.innerHTML = "You've won!";
            }
            else {
                betTextResult = "LOSE";
                betResult.innerHTML = "You've lost!";
            }
        }
        else if (blackSegments.includes(winningSymbolNr)) {
            resultColor = "black";
            if(colorBet == 'black') {
                betResult.innerHTML = "You've won!";
                betTextResult = "WIN";
            }
            else {
                betTextResult = "LOSE";
                betResult.innerHTML = "You've lost!";
                }      
            }
        else {

            resultColor = "green";
        
        if(colorBet == 'green'){
            betTextResult = "WIN";
            betResult.innerHTML = "You've won!";
        }
            else{
            betTextResult = "LOSE";
            betResult.innerHTML = "You've lost!";
        }
        }
        result.style.backgroundColor=resultColor;      


        
    }


    function revertRouletteState(){

        ball.style.transition = 'none';
        ball.style.transform = `rotate(${0}deg)`;
        $("#submitButton").attr("disabled", false);
        previousWheelDeg = (wheelDeg+previousWheelDeg)%360;
        wheel.style.animationPlayState = 'running';
        startTime = new Date();
        previousResult.innerHTML = result.innerHTML;
        result.innerHTML= "-";
        redWin.style.pointerEvents = 'auto'; 
        blackWin.style.pointerEvents = 'auto'; 
        greenWin.style.pointerEvents = 'auto';
        result.style.backgroundColor = "darkmagenta"
        previousResult.style.backgroundColor = resultColor;
        
    }


    //Betting system


   redWin.addEventListener('click', () => {
        colorBet = 'red';
        $("#submitButton").attr("disabled", false);
        yourBet.innerHTML = colorBet;
        yourBet.style.backgroundColor = "red";
    
    });

    blackWin.addEventListener('click', () => {
        colorBet = 'black'; 
        $("#submitButton").attr("disabled", false);
        yourBet.innerHTML = colorBet;
        yourBet.style.backgroundColor = "black";
    });
    greenWin.addEventListener('click', () => {
        colorBet = 'green'; 
        $("#submitButton").attr("disabled", false);
        yourBet.innerHTML = colorBet;
        yourBet.style.backgroundColor = "green";
    
    });





     

    //Balance change
    
    jQuery('#betting').submit(function(){
        event.preventDefault();
        $("#submitButton").attr("disabled", true);
        deg = Math.floor(minSpin + Math.random() * minSpin);
        ball.style.transition = 'all 5s ease-out';
        ball.style.transform = `rotate(${deg}deg)`; 
        redWin.style.pointerEvents = 'none';
        blackWin.style.pointerEvents = 'none'; 
        greenWin.style.pointerEvents = 'none';
        betResult.style.backgroundColor="darkmagenta";
        betResult.innerHTML="..."; 
        var link="https://dev-virtualcasino.pantheonsite.io/wp-admin/admin-ajax.php";
        form=jQuery('#betting').serialize();    
        var formData = new FormData;
        formData.append('action','betAmount');
        formData.append('betAmount',form);
        jQuery.ajax({
            url:link,
            data:formData,
            processData:false,
            contentType:false,
            type:'post',

        })

    
    });