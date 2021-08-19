<html>
<head>
</head>
<body>
  <h1>You have <span id="clicks">0</span> clicks.</h1>
  <button type="button" onclick="addClicks(1)">Click me!</button>
  <button type="button" onclick="addMultiplier(1)">Buy click multiplier!</button>
  <script>
    var clicks = 0;
    
    function addClicks(amount) {
      clicks = clicks + amount * multiplier;
      document.getElementById("clicks").innerHTML = clicks;
   }
    
    var multiplier = 1;
     
    function addMultiplier(1) {
      multiplier = multiplier + amount;
    
    }
  </script>
</body>
</html>
