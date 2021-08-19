<html>
<head>
   <h1>You have <span id="clicks">0</span> clicks.</h1>
  <button type="button" onclick="addClicks(1)">Click me!</button>
  <button type="button" onclick="buyClickers(1)">Buy an autoclicker for <span id="clickerCost">150</span> clicks</button>
  <button type="button" onclick="buyMultiplier(1)">Buy a click multiplier for <span id="multiplierCost">100</span> clicks</button>
  <h2>You have <span id=clickers>0</span> clickers.</h2>
  <h3>You get <span id=mult>1</span> clicks per click.</h3>
</head>
  <script>

     var clicks = 0;
    
    var clickerCost = 150;
    
    var clickers = 0;
    
    var multiplier = 1;
    
    var multiplierCost = 100
     
  function load() {
    clicks = JSON.parse(localStorage.getItem('clicks'));
    multiplier = JSON.parse(localStorage.getItem('multiplier'));
    clickers = JSON.parse(localStorage.getItem('clickers'));
     document.getElementById("multiplierCost").innerHTML = Math.round(multiplierCost);
      document.getElementById("mult").innerHTML = multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
      document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
      document.getElementById("clickers").innerHTML = clickers;
   }
    
    function buyClickers(amount) {
      if (clicks >= clickerCost) {
       clicks = clicks - clickerCost;
       clickers = clickers + 1
       clickerCost = clickerCost * 1.05;
      
    
      document.getElementById("clicks").innerHTML = Math.round(clicks);
      document.getElementById("clickerCost").innerHTML = Math.round(clickerCost);
      document.getElementById("clickers").innerHTML = clickers;
    }
 
 }
    
     function buyMultiplier(amount) {
      if (clicks >= multiplierCost) {
       clicks = clicks - multiplierCost;
       multiplier = multiplier + 1
       multiplierCost = multiplierCost * 1.05;
    
      document.getElementById("clicks").innerHTML = Math.round(clicks);
      document.getElementById("multiplierCost").innerHTML = Math.round(multiplierCost);
      document.getElementById("mult").innerHTML = multiplier;
      
    
    }
  }  
    
    function addClicks(amount) {
      clicks = clicks + amount * multiplier;
      document.getElementById("clicks").innerHTML = Math.round(clicks);
   }
    
    setInterval(function() {
     clicks = clicks + clickers * multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
    }, 1000)  //1000ms is 1 second
 </script>
   <body>
      <button type="button" onclick="save">Save</button>
      <button type="button" onclick="load">Load</button>
      
      <script>
         function save() {
            localStorage.setItem('clicks', JSON.stringify(clicks));
            localStorage.setItem('multiplier', JSON.stringify(multiplier));
            localStorage.setItem('clickers', JSON.stringify(clickers));
      }
         
      </script>
      
   </body>
</html>
