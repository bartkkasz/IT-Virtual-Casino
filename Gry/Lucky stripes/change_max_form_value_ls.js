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
images[0] = 'https://dev-virtualcasino.pantheonsite.io/wp-content/uploads/2021/11/coin_2.png';
images[1] = 'https://dev-virtualcasino.pantheonsite.io/wp-content/uploads/2021/11/fruit_2.png';
images[2] = 'https://dev-virtualcasino.pantheonsite.io/wp-content/uploads/2021/11/bell_2.png';

jQuery("#submitButton").attr("disabled", false);

var time = 300;
var i = 0;
var j = 0;
var form;


function showLeftImage(){
    leftImage.src=images[i];
    leftIMG = Math.floor(0 + Math.random() * 3);
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
    middleImage.src=images[i];
    middleIMG = Math.floor(0 + Math.random() * 3);
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
    rightImage.style.transition = 'all 1s linear';
    rightImage.style.transform = `rotate(${1}deg)`;
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
      betResult.style.backgroundColor="gold";
    }
    else{
      betResult.innerHTML = "You've lost!";
      betResult.style.backgroundColor="brown";
    }
      $("#submitButton").attr("disabled", false);
}



jQuery('#betting').submit(function(){
  event.preventDefault();
  $("#submitButton").attr("disabled", true);
  showLeftImage();
  showMiddleImage();
  showRightImage();
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