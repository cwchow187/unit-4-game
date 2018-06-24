
      //initial variables
      var computerPick = Math.floor(Math.random() * (120-20+1)) + 20;
      
      //log the computers pick to console to make it easier to troubleshoot
      console.log("computerPick is: " + computerPick);
      //add computer pick to random number div container
      $('#computer-pick').text(computerPick);

      //create for loop for buttons(crystals) and assign value to crystals
      // for(var i = 0, i <4; i++){
      function random(){
      	var random = Math.floor(Math.random() *11) + 1;
      	console.log(random);
      };
      random();
      // $('#red').on('click', function random(){
      // //update wins and losses

      // $('#wins').append();

      // $('#losses').append();

      // });