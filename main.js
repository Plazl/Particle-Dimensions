      var t =  1000;
     
     var framerate = 100;
   
     var clicks = 10;
    
     var clickerCost = 5;
    
     var clickers = 0;
    
     var multiplier = 1;
    
     var multiplierCost = 5;

     function loadSave() {
     var game = JSON.parse(localStorage.getItem("game"))
     if (typeof game.hasStarted !== "undefined") {
     	       if (typeof clicks !== "undefined") clicks = clicks;
	       if (typeof multiplier !== "undefined") multiplier = multiplier;
	       if (typeof multiplierCost !== "undefined") multiplierCost = multiplierCost;
	       if (typeof clickers !== "undefined") clickers = clickers;
	       if (typeof clickerCost !== "undefined") clickerCost = clickerCost;
	       if (typeof clickerCost !== "undefined") t = t;
        }
              
     }

     
      document.getElementById("mult").innerHTML = multiplier;
      document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
      document.getElementById("clickers").innerHTML = clickers;
      document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
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
             if (multiplierCost = 5) { 

		 clicks = clicks - multiplierCost;
     multiplierCost = 100;
     multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("mult").innerHTML = multiplier;
  
	 
	 }    
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
         if (clickerCost = 5) { 

		 clicks = clicks - clickerCost;
     clickerCost = 150;
     clickers = clickers + 1; 
    document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
  
	 
	 }
     clicks = clicks - clickerCost;
     clickerCost = clickerCost * 1.5;
     clickers = clickers + 1; 
     t = t - 0.5;
    document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
    document.getElementById("clickers").innerHTML = clickers;
  
 
          
    
 
        
  }

}



     setInterval(updater, framerate);
     function updater() {
      document.getElementById("clicks").innerHTML = (convert(clicks));
      
  

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
     }

var convert = clicks => {
	    if (clicks < 1e3) return game.clicks;
	    if (clicks >= 1e3 && clicks < 1e6) return +(clicks / 1e3).toFixed(1) + "K";
	    if (clicks >= 1e6 && clicks < 1e9) return +(clicks / 1e6).toFixed(1) + "M";
	    if (clicks >= 1e9 && clicks < 1e12) return +(clicks / 1e9).toFixed(1) + "B";
	    if (clicks >= 1e12 && clicks < 1e15) return +(clicks / 1e12).toFixed(1) + "T";
            if (clicks >= 1e15 && clicks < 1e18) return +(clicks / 1e15).toFixed(1) + "Qa";
            if (clicks >= 1e18 && clicks < 1e21) return +(clicks / 1e18).toFixed(1) + "Qi";
            if (clicks >= 1e21 && clicks < 1e24) return +(clicks / 1e21).toFixed(1) + "Sx";
            if (clicks >= 1e24 && clicks < 1e27) return +(clicks / 1e24).toFixed(1) + "Sp";
            if (clicks >= 1e27 && clicks < 1e30) return +(clicks / 1e27).toFixed(1) + "Oc";
            if (clicks >= 1e30 && clicks < 1e33) return +(clicks / 1e30).toFixed(1) + "No";
            if (clicks >= 1e31) return clicks.toExponential(2);
		}


function saveGame() {
	localStorage.setItem("game", JSON.stringify(game));
}

setInterval(function() {
saveGame();
}, 10000);

window.onLoad = function() {
loadSave();
}
