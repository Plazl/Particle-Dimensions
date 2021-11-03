     var t =  1000;
     
     var framerate = 100;
   
     var clicks = 10;
    
     var clickerCost = 125;
    
     var clickers = 0;
    
     var multiplier = 1;
    
     var multiplierCost = 45;   
		     
     var hasStarted = false;
   
     var canInfinity = false;

     var infiniclicks = 0;
  
     var icmultiplier = 1;

     var clickerIntervalId;

     var x = document.getElementById("infinity");
   
     var y = document.getElementById("clickmenu")
     
     

     
     


     function loadSave() {
        var game = JSON.parse(localStorage.getItem("gameSave"))
               if (typeof hasStarted !== "undefined") {
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
if (hasStarted = false) {
  hasStarted = true;
}
//upgrade menu
     
//multiplier



    function buyMult() {
	  
		  if (clicks >= multiplierCost) {
    clicks = clicks - multiplierCost;
     multiplierCost = multiplierCost * 2;
     multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("mult").innerHTML = multiplier
		  }
	 }
  






    function buyClicker() {
	 
	  if (clicks >= clickerCost) {
     clicks = clicks - clickerCost;
     clickerCost = clickerCost * 1.5;
     clickers = clickers + 1; 
     clearInterval(clickerIntervalId);
     clicks = clicks + 0.5;
     t = t - 15;
     document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
     document.getElementById("clickers").innerHTML = clickers;
     resetClickerInterval()
  
		 }
          
    
 
        
  }
    

 function resetClickerInterval() {
       clearIntervalId = 0;
	 setTimeout(wait, 500);
 }
      function  wait() {
		    clickerIntervalId = setInterval(clicker, t);
	      break;
     }
 
         

function clicker() {
  clicks = clicks + 1 * multiplier;
	if (clickers < 1) {
	   clearInterval(clickerIntervalId);
	}
}

     setInterval(updater, framerate);
     function updater() {
      document.getElementById("clicks").innerHTML = (convert(clicks));
      isFinitee = isFinite(clicks);
	     

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    framerate = this.value;
  output.innerHTML = framerate;
  
}
     }

var convert = clicks => {
	    if (clicks < 1e3) return clicks;
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
   var gameSave = {
	clicks: clicks,
	clickers: clickers,
	clickerCost: clickerCost,
	multiplier: multiplier,
	multiplierCost: multiplierCost,
	t: t,
        hasStarted: hasStarted
	   
	  }
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

setInterval(function() {
saveGame();
}, 10000);

var isFinitee = isFinite(clicks);

setInterval(finiteCheck, framerate)


function finiteCheck() {
	
     
	if (isFinitee == false) {
		canInfinity = true;
         x = document.getElementById("infinity");
  if (x.style.display === "none") {
    x.style.display = "block";
	 
  } 
		if (y.style.display === "block") {
    y.style.display = "none";
	}
	
	
	
	
	
   
 else  {
	x.style.display = "none"
	y.style.display = "block"
}
 }

}



window.onLoad = function() {
loadSave();
}

function infinity() {
	if(canInfinity = true) {
	
		
		clicks = 10;
	        multiplier = 1;
                multiplierCost = 5;
	        clickers = 0;
		clickerCost = 5;
		infiniclicks = infiniclicks + 1 * icmultiplier;
		t = 1000;
		canInfinity = false;
		isFinitee = isFinite(clicks)
		x.style.display = "none";
		y.style.display = "block"
		


	   }
        }
    
