     var t = 1000;

     var framerate = 100;

     var x = 0;

     var y = 0;

     var z = 0;
    if (hasStarted = false) {
     var clicks = 10;
    }
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

     

     
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     
     
   
 //click adder
function addClicks() {

 clicks = clicks + 1 * multiplier;
     
  }
 const hasStarted = true;

//upgrade menu
     
//multiplier



    function buyMult() {
          if (clicks >= multiplierCost) {
               
    clicks = clicks - multiplierCost;
     multiplierCost = multiplierCost * 1.5;
     multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("mult").innerHTML = multiplier
 
     
  }

}
//clicker



    function buyClicker() {
         if (clicks >= clickerCost) {
         
     clicks = clicks - clickerCost;
     clickerCost = clickerCost * 1.5;
     clickers = clickers + 1; 
     hasClickers = true;
     t = t - 0.5;
    document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
  
 
          
    
 
        
  }

}



     setInterval(updater, framerate);
     function updater() {
     localStorage.setItem("clicks", JSON.stringify(clicks));
      document.getElementById("clicks").innerHTML = Math.round(clicks);
         localStorage.getItem(clicks)
    
  

   if (clickers >= 1) {
        setInterval(addClicks, t) 
   }

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    framerate = this.value;
  output.innerHTML = framerate;
  
}



