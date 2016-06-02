//declare starting variables
var money = 100;
var haveBananas=0;
var haveOranges=0;
var haveApples=0;
var haveGrapes=0;




// everything below this line works
// calculates and checks remaining money, updates inventory
$( document ).ready(function() {

//generates random prices between 0.01 and 10.00
  $('#bananaPrice').text(((Math.random() * 10) + 0.01).toFixed(2));
  var bananaPrice = $('#bananaPrice').text()
  console.log(bananaPrice);
  $('#orangePrice').text(((Math.random() * 10) + 0.01).toFixed(2));
  var orangePrice = $('#orangePrice').text()
  $('#applePrice').text(((Math.random() * 10) + 0.01).toFixed(2));
  var applePrice = $('#applePrice').text()
  $('#grapePrice').text(((Math.random() * 10) + 0.01).toFixed(2));
  var grapePrice = $('#grapePrice').text()
     $('.cash').text('YOUR CASH = $' + money);



// Buy button functions
     $('#buyBananaBtn').click(function(){
       if ((money-bananaPrice)<0){
         alert('NOT ENOUGH CASH!')
       }
       else {
          haveBananas += 1;
          money = (money - bananaPrice).toFixed(2);
          console.log(haveBananas);
          $('.cash').text('YOUR CASH = $' + money);
          $('.bananaInventory').text(haveBananas + ' Bananas');
          }
     });

     $('#buyOrangeBtn').click(function(){
       if ((money-orangePrice)<0){
         alert('NOT ENOUGH CASH!')
       }
       else {
         haveOranges += 1;
         money = (money - orangePrice).toFixed(2);
         console.log(haveOranges);
         $('.cash').text('YOUR CASH = $' + money);
         $('.orangeInventory').text(haveOranges + ' Oranges');
      }
     });

     $('#buyAppleBtn').click(function(){
       if ((money-applePrice)<0){
         alert('NOT ENOUGH CASH!')
       }
       else {
         haveApples += 1;
         money = (money - applePrice).toFixed(2);
         console.log(haveApples);
         $('.cash').text('YOUR CASH = $' + money);
         $('.appleInventory').text(haveApples + ' Apples');
       }
     });

     $('#buyGrapeBtn').click(function(){
       if ((money-grapePrice)<0){
         alert('NOT ENOUGH CASH!')
       }
       else {
         haveGrapes += 1;
         money = (money - grapePrice).toFixed(2);
         console.log(haveGrapes);
         $('.cash').text('YOUR CASH = $' + money);
         $('.grapeInventory').text(haveGrapes + ' Grapes');
       }
     });
});
