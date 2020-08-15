

//(document.querySelectorAll(".drum")).length <- the amount of drums aviable in our website.
var numOfDrums= (document.querySelectorAll(".drum")).length;

//Setting listeners - if user clicks the icon - play the sound
for(var i=0; i<numOfDrums; i++)
{
  //Getting the array of all drums | [i] | adding listener|  what happens when user clicks
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var button=this.innerHTML;
    keyCheck(button);
    buttonAnimation(button);
  });

}


//Global listener - listens if a user clicked on keyboard
document.addEventListener("keydown", function(event){
  keyCheck(event.key);
   buttonAnimation(event.key);
})


//Checks which button was clicked/press and plays the correct audio file
function keyCheck(key)
{
  switch (key) {
      case 'w':
      var Crush=new Audio("sounds/crash.mp3");
      Crush.play();
      break;

      case 'a':
      var Kick=new Audio("sounds/kick-bass.mp3");
      Kick.play();
      break;

      case 's':
      var Snare=new Audio("sounds/snare.mp3");
      Snare.play();
      break;

      case 'd':
      var Tom1=new Audio("sounds/tom-1.mp3");
      Tom1.play();
      break;

      case 'j':
      var Tom2=new Audio("sounds/tom-2.mp3");
      Tom2.play();
      break;

      case 'k':
      var Tom3=new Audio("sounds/tom-3.mp3");
      Tom3.play();
      break;

      case 'l':
      var Tom4=new Audio("sounds/tom-4.mp3");
      Tom4.play();
      break;

    default:console.log("unknown choice");

  }
}

function buttonAnimation(currentKey)
{
  var activeKey=document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed")}, 100)
}
