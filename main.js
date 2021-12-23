     var t =  1000;
     
     var framerate = 100;
   
     var clicks = 10
    
     var clickerCost = 125;
    
     var clickers = 0;
    
     var multiplier = 1
    
     var multiplierCost = 45;   
		     
     var hasStarted = false;
   
     var canInfinity = false;

     var infiniclicks = 0;
  
     var icmultiplier = 1;

     var infinities = 0;

     var infinimult = 1;

     var infmousecost = 150;

     var infinimice = 0;

     var clearIntervalId;

     var devMode = false;

     var gameSave;

     var openedInfTab;

     var isFinitee = isFinite(clicks);

     var x = document.getElementById("infinitybtn");

     var footer = document.getElementsByClassName("footer")[0];
   
     var y = document.getElementById("clickmenu")
     
      var r = document.getElementsByClassName("itablink")[0]
      var tabcontent = document.getElementsByClassName("tabcontent");
    var infTabOpen = false;
    var f = document.getElementById("footer2")
    
    $(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
 
});
clicks = clicks * multiplier;

 openTab('clickmenu');
function openTab(tab,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(tab).style.display = "block";
       if (f.style.display === "block") {
    f.style.display = "none";
         infTabOpen = false;
           document.getElementsByClassName("tablink").style.display = "shown"
  } 
 

    function smthn1() {
      openedInfTab = 'infUpgrades';
	    
    }
	
	  function smthn2() {
      openedInfTab = 'breakinfinity';
    }
	
	  function smthn3() {
      openedInfTab = 'infmice';
    }
    
    
    }

function openMainInfTab(itab,ielmnt,icolor) {
  if (infTabOpen == false) {
    infTabOpen = true;  
  }    if (f.style.display === "none") {
    f.style.display = "block";
  } 
  } 
   
   
    function openInfTab(itab,ielmnt,icolor) {
  var e, intabcontent, itablinks;
  intabcontent = document.getElementsByClassName("intabcontent");
  for (e = 0; e < intabcontent.length; e++) {
    intabcontent[e].style.display = "none";
  }
  itablinks = document.getElementsByClassName("itablink");
  for (e = 0; e < itablinks.length; e++) {
    itablinks[e].style.backgroundColor = "";
  }
  document.getElementById(itab).style.display = "block";
        if (f.style.display === "none") {
    f.style.display = "block";
  } 
 

}   
   
   function htp() {

window.open("https://plazl.github.io/howtoplay.html");
   }
 var interval = setInterval(updatee, framerate)
 
 function updatee() {
   if (infTabOpen == true) { 
     tabcontent[0].style.display = "none"; tabcontent[1].style.display = "none"; tabcontent[2].style.display = "none" 
        if (f.style.display === "none") {
    f.style.display = "block";
  } 
	  
 } 
 
   if (infinities >= 1) {
	   footer.style.left = "15%"
           f.style.display = "shown"
       	   r.style.display = "shown"
   } else if (infinities < 1){
           footer.style.left = "20%"
	   f.style.display = "none"
           r.style.display = "none"
   } else {
	   alert("Idk what you did but you broke something. Saves cannot be fixed at this point so you must reset. Sorry ¯\\_(ツ)_/¯")
	     
   }    
  

 }
     
     

     
     


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
	       if (typeof game.clickerCost !== "undefined") {infinimult = game.infinimult};
	       if (typeof game.clickerCost !== "undefined") {clearIntervalId = game.clearIntervalId};
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
     
     function updater() {
      if (clicks < 1000) {
	document.getElementById("clicks").innerHTML = Math.round(clicks);
	} else {	     
     document.getElementById("clicks").innerHTML = (convert(clicks));
	}
	    if (clearIntervalId == 1) {
	     clearIntervalId = setInterval(clicker, t);
	  } else {
	   clearIntervalId = 0;
	}
	     if (infinities >= 1) {
		     if (isFinitee == false) { 
	     document.getElementById("infbutton").style.display = "shown"
		     }
	   } else {
	     document.getElementById("infbutton").style.display = "none"	   
	   }
     isFinitee = isFinite(clicks);    
	   

  
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
      gameSave = {
	clicks: clicks,
	clickers: clickers,
	clickerCost: clickerCost,
	multiplier: multiplier,
	multiplierCost: multiplierCost,
	t: t,
        hasStarted: hasStarted,
	infinities: infinities,
	infinimult: infinimult,
	clearIntervalId: clearIntervalId
	   
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
   


document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
            
        });

window.onLoad = loadSave();
 if (clickers == 1) {
	     clearIntervalId = 1
	  }
function clearSave() { 
	if (confirm("Are you sure you want to reset your save? This cannot be undone.") == true)
	{
	
	gameSave = {	clickers: 0,
	clickerCost: 125,
	multiplier: 1,
	multiplierCost: 45,
	t: 1000,
        hasStarted: false,
	infinities: 0,
	infinimult: 1,
        clearIntervalId: 0,
        clicks: 10
		   }
	localStorage.removeItem("gameSave")
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
	location.reload()
	} else {}
}


function buyInfMouse() {
   if (infiniclicks >= infmousecost) {
     infiniclicks = infiniclicks - infmousecost 
     infinimice = infinimice + 1
	   if (infmousecost < 1e20) {
     infmousecost = infmousecost * 2
		   document.getElementById("infmousePrice").innerHTML = (infmousecost + "IC")
	   } else {
	      infmousecost = infmousecost * 5
		   document.getElementById("infmousePrice").innerHTML = (infmousecost + "IC")
	   }
   } else {}
}
var inerval2 = setInterval(showStupidButton, 50);
function showStupidButton() {
    if (openedInfTab == 'infmice') {
	        document.getElementById("infmousebtn").style.display = "block"
	     } else {
	        document.getElementById("infmousebtn").style.display = "none"
	     }
}
