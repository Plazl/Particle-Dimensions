<html>
<head>
</head>
<body>
  <h1>You have <span id="clicks">0</span> clicks.</h1>
  <img src="button.png" height="256px" width="256px" onclick="addClicks(1)">
  <script>
    var clicks = 0;
    
    function addClicks(amount) {
      clicks = clicks + amount;
      document.getElementById("clicks").innerHTML = clicks;
   }
  </script>
</body>
</html>
