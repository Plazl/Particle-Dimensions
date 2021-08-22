<html>
<head>
   <h2>You have <span id="clicks">0</span> clicks.</h2>
  <button type="button" onclick="addClicks(1)" class="button button1">Click me!</button>
  <button type="button" onclick="buyClickers(1)" class="button button2">Buy an autoclicker for <span id="clickerCost">150</span> clicks</button>
  <button type="button" onclick="buyMultiplier(1)" class="button button3">Buy a click multiplier for <span id="multiplierCost">100</span> clicks</button>
  <h3>You have <span id=clickers>0</span> clickers.</h3>
  <h4>You get <span id=mult>1</span> clicks per click.</h4>
   <style>
      
      h2 {
         position: center;    
      }
    
      .button1 {
               position: absolute;
   left: 50%;
   top: 50%; 
      background-color: #04AA6D;
  border: none;
  color: white;
  padding: 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
    border-radius: 100%;  
      }
      
       .button2 {
               position: absolute;
   left: 150px;
   top: 200px; 
      background-color: #04AA6D;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;

      }
      
        .button3 {
               position: absolute;
   left: 150px;
   top: 250px; 
      background-color: #04AA6D;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  
      }
      
       
      
   </style>
</head>
  <script>
     
     var interval = 1000;

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
       interval = interval - 1;
      
    
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
   
     (function loop() {
       clicks = clicks + clickers * multiplier;
     document.getElementById("clicks").innerHTML = Math.round(clicks);
     //1000ms is 1 second
  setTimeout(loop, interval);
})();
 </script>
   <body>
      <button type="button" onclick="save()">Save</button>
      <button type="button" onclick="load()">Load</button>
      
      <script>
         function save() {
            localStorage.setItem('clicks', JSON.stringify(clicks));
            localStorage.setItem('multiplier', JSON.stringify(multiplier));
            localStorage.setItem('clickers', JSON.stringify(clickers));
      }
         
      </script>
      
   </body>
</html>
