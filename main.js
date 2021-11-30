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

     var infinities = 0;

     var infinimult = 1;

     var clearIntervalId;

     var x = document.getElementById("infinity");
   
     var y = document.getElementById("clickmenu")
     
     var r = document.getElementById("itablink")
     
     

     
     


     function loadSave() {
        var game = JSON.parse(localStorage.getItem("gameSave"))
               if (typeof game.hasStarted !== "undefined") {
     	       if (typeof game.clicks !== "undefined") {clicks = game.clicks};
	       if (typeof game.multiplier !== "undefined") {multiplier = game.multiplier};
	       if (typeof game.multiplierCost !== "undefined") {multiplierCost = game.multiplierCost};
	       if (typeof game.clickers !== "undefined") {clickers = game.clickers};
	       if (typeof game.clickerCost !== "undefined") {clickerCost = game.clickerCost};
	       if (typeof game.clickerCost !== "undefined") {t = game.t};
	       if (typeof game.clickerCost !== "undefined") {infinities = game.infinities};
	       if (typeof game.clickerCost !== "undefined") {infinimukt = game.infinimult};
        } 
	       document.getElementById("mult").innerHTML = multiplier;
      document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
      document.getElementById("clickers").innerHTML = clickers;
      document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
      document.getElementById("clicks").innerHTML = Math.round(clicks);
     }

     
    
     
     
   
 
function addClicks() {

 clicks = clicks + 1 * multiplier;
if (clicks < 1000) {
	document.getElementById("clicks").innerHTML = Math.round(clicks);
	}
     if (hasStarted == false) {
      hasStarted = true;
     }
  }



    function buyMult() {
	  
		  if (clicks >= multiplierCost) {
    clicks = clicks - multiplierCost;
     multiplierCost = multiplierCost * 2;
     multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("mult").innerHTML = multiplier
    if (clicks < 1000) {
	document.getElementById("clicks").innerHTML = Math.round(clicks);
	}
		  }
	 }
  






    function buyClicker() {
	 
	  if (clicks >= clickerCost) {
     clicks = clicks - clickerCost;
     clickerCost = clickerCost * 1.5;
     clickers = clickers + 1; 
     clearInterval(clearIntervalId);
     clicks = clicks + 0.5;
     t = t - 15;
     document.getElementById("clickerPrice").innerHTML = Math.round(clickerCost);
     document.getElementById("clickers").innerHTML = clickers;
     if (clicks < 1000) {
	document.getElementById("clicks").innerHTML = Math.round(clicks);
	}
     resetClickerInterval()
  
		 }
          
    
 
        
  }
    

 function resetClickerInterval() {
       clearIntervalId = 0;
	 setTimeout(wait, 500);
 
      function  wait() {
		    clearIntervalId = setInterval(clicker, t);

     }
}
         

function clicker() {
		if (clickers < 1) {
	   clearInterval(clearIntervalId);
		
	} else {
  clicks = clicks + 1 * multiplier;
	document.getElementById("clicks").innerHTML = Math.round(clicks);

	 if (clicks < 1000) {
	document.getElementById("clicks").innerHTML = Math.round(clicks);
	}
  }
}
     setInterval(updater, framerate);
     function updater() {
      if (clicks < 1000) {
	document.getElementById("clicks").innerHTML = Math.round(clicks);
	} else {	     
     document.getElementById("clicks").innerHTML = (convert(clicks));
	}
	    if (clickers == 1) {
	     clearIntervalId = setInterval(clicker, t);
	  } else {
	   clearIntervalId = 0;
	}
	     if (infinities >= 1) {
	     document.getElementById("itablink").style.display = "shown"
	   }
     isFinitee = isFinite(clicks);
if (hasStarted == false) {
            t =  1000;
     clicks = 10;
     clickerCost = 125;
     clickers = 0;
     multiplier = 1;
     multiplierCost = 45;   	     
     hasStarted = false;
     canInfinity = false;
     infiniclicks = 0;
     icmultiplier = 1;
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
        hasStarted: hasStarted,
	infinities: infinities,
	infinimult: infinimult   
	   
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



window.onLoad = 
loadSave();


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
		infinities = infinities + 1 * infinimult
		x.style.display = "none";
		y.style.display = "block"
		


	   }
	
	
}
    
