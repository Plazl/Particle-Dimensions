     var hasClickers = false;

     var x = 0;

     var y = 0;

     var z = 0;
     
     var interval = 1000;

     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100;

     
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     
     
   

function addClicks(amount) {

 clicks = clicks + amount * multiplier;
      document.getElementById("clicks").innerHTML = clicks;
  }
     function upgradeMenu() {
  var x = document.getElementById("main");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
           var y = document.getElementById("main1");
  if (y.style.display === "none") {
    y.style.display = "block";     
  } else {
    y.style.display = "none";

  }
          var z = document.getElementById("upgradestab");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";

  }  
}

function buyMult() {

if (clicks >= multiplierCost) {


    var clicks = clicks - multiplierCost;
    var multiplierCost = multiplierCost * 1.5;
    var multiplier = multiplier + 1; 
    document.getElementById("multPrice").innerHTML = Math.round(multiplierCost);
    document.getElementById("multiplier").innerHTML = multiplier
    document.getElementById("clicks").innerHTML = Math.round(clicks);
     
  }

}

function buyClicker() {

if (clicks = clickerCost) {


    var clicks = clicks - clickerCost;
    var clickerCost = clickerCost * 1.5;
    var multiplier = multiplier + 1; 
    document.getElementById("clickerCost").innerHTML = Math.round(multiplierCost);
    document.getElementById("clickers").innerHTML = multiplier
    document.getElementById("clicks").innerHTML = Math.round(clicks);
 
      var t = t - 0.05 * 2;

    
          var hasClickers = true;
        
  }

}

     if (hasClickers = true)  {

           // Timer
        var t = 200;
 
        f1();
         
    
        function addClicks(){
         
             clicks = clicks + 1 * multiplier;
        }
         

        function f1() {
       
            addClicks();
            setTimeout(f1, t);
             document.getElementById("clicks").innerHTML = Math.round(clicks);
        }

     }


