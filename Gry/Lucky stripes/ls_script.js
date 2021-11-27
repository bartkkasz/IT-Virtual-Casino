const startButton = document.querySelector('.startButton');

var leftImage = document.querySelector('.leftImage');
var middleImage = document.querySelector('.middleImage');
var rightImage = document.querySelector('.rightImage');

var betResult = document.querySelector('.betResult');

var leftIMG;
var middleIMG;
var rightIMG;

//images 
var images = [];
images[0] = './assets/coin_2.png';
images[1] = './assets/fruit_2.png';
images[2] = './assets/bell_2.png';

$("#submitButton").attr("disabled", true);

var time = 300;
var i = 0;
var j = 0;
var form;


startButton.addEventListener('click', () => {
showLeftImage();
showMiddleImage();
showRightImage();
});

function showLeftImage(){
  //  console.log(j);
    leftImage.src=images[i];
    leftIMG = Math.floor(0 + Math.random() * 3);
  //  console.log(leftIMG);
    leftImage.src = images[leftIMG];
    if(j<15){
    setTimeout(showLeftImage, time);
    j++;
    }
    else{
    j = 0;
    }
}

function showMiddleImage(){
    console.log(j);
    middleImage.src=images[i];
    middleIMG = Math.floor(0 + Math.random() * 3);
    console.log(middleIMG);
    middleImage.src = images[middleIMG];
    if(j<20){
    setTimeout(showMiddleImage, time);
    j++;
    }
    else{
    j = 0;
    }

}

function showRightImage(){
    rightImage.src=images[i];
    rightIMG = Math.floor(0 + Math.random() * 3);
    rightImage.src = images[rightIMG];
    if(j<20){
    setTimeout(showRightImage, time);
    j++;
    }
    else if(j==20) {
    showResult(leftIMG,middleIMG,rightIMG);
    j = 0;
    }
}


function showResult(leftIMG, middleIMG, rightIMG){

    if(leftIMG==middleIMG && leftIMG==rightIMG){
      betResult.innerHTML = "You've won!";
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
    else
      betResult.innerHTML = "You've lost!";

      $("#submitButton").attr("disabled", false);
}



jQuery('#betting').submit(function(){
  event.preventDefault();
  $("#submitButton").attr("disabled", true);
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