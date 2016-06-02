//declare starting variables
var money = 100;
var haveBananas=0;
var haveOranges=0;
var haveApples=0;
var haveGrapes=0;


$( document ).ready(function() {
     $('.cash').text('YOUR CASH = $' + money);
// Buy button functions
     $('#buyBananaBtn').click(function(){
      //  if ((money-bananaPriceVariable)<0){
      //    alert('NOT ENOUGH CASH!')
      //  }
      //  else {
          haveBananas += 1;
          //  money -= PRICE VARIALBE
          console.log(haveBananas);
          $('.cash').text('YOUR CASH = $' + money);
          $('.bananaInventory').text(haveBananas + ' Bananas');
          // }
     });

     $('#buyOrangeBtn').click(function(){
      //  if ((money-bananaPriceVariable)<0){
      //    alert('NOT ENOUGH CASH!')
      //  }
      //  else {
         haveOranges += 1;
         //  money -= PRICE VARIALBE
         console.log(haveOranges);
         $('.cash').text('YOUR CASH = $' + money);
         $('.orangeInventory').text(haveOranges + ' Oranges');
      // }
     });

     $('#buyAppleBtn').click(function(){
      //  if ((money-bananaPriceVariable)<0){
      //    alert('NOT ENOUGH CASH!')
      //  }
      //  else {
         haveApples += 1;
         //  money -= PRICE VARIALBE
         console.log(haveApples);
         $('.cash').text('YOUR CASH = $' + money);
         $('.appleInventory').text(haveApples + ' Apples');
      //  }
     });

     $('#buyGrapeBtn').click(function(){
      //  if ((money-bananaPriceVariable)<0){
      //    alert('NOT ENOUGH CASH!')
      //  }
      //  else {
         haveGrapes += 1;
         //  money -= PRICE VARIALBE
         console.log(haveGrapes);
         $('.cash').text('YOUR CASH = $' + money);
         $('.grapeInventory').text(haveGrapes + ' Grapes');
      //  }
     });
});
