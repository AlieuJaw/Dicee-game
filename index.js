var randomNumber1=Math.floor(Math.random() * 6)+1;
var imageSource1="dice"+randomNumber1+".png";
image1="images/"+imageSource1;
document.querySelectorAll("img")[0].setAttribute("src", image1);

var randomNumber2=Math.floor(Math.random() * 6)+1;
var imageSource2="dice"+randomNumber2+".png";
var image2="images/"+imageSource2;
var image2=document.querySelectorAll("img")[1].setAttribute("src",image2);

  
  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
  }
  else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";

  }
  else{
   
    document.querySelector("h1").innerHTML="Draws!";
  }
