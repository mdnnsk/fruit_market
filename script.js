//declare starting variables
var money = 100;
var haveBananas=0;
var haveOranges=0;
var haveApples=0;
var haveGrapes=0;
var randomUpDown;
var randomIncrement;

// everything below this line works
// calculates and checks remaining money, updates inventory
$( document ).ready(function() {

//generates random prices between 0.50 and 9.99
  $('#bananaPrice').text(((Math.random() * 9.49) + 0.50).toFixed(2));
  var bananaPrice = $('#bananaPrice').text();
  $('#orangePrice').text(((Math.random() * 9.49) + 0.50).toFixed(2));
  var orangePrice = $('#orangePrice').text();
  $('#applePrice').text(((Math.random() * 9.49) + 0.50).toFixed(2));
  var applePrice = $('#applePrice').text();
  $('#grapePrice').text(((Math.random() * 9.49) + 0.50).toFixed(2));
  var grapePrice = ($('#grapePrice').text());
     $('.cash').text('YOUR CASH = $' + money);

//anonymous function that sets intervals to recalc the numbers
setInterval(function(){
  //random price increase/decrease in increments of 0.01-0.50 for each of the fruits
  //banana
  randomUpDown = Math.floor(Math.random() * 2);
  randomIncrement = ((Math.random() * 0.49) + 0.01).toFixed(2);
  if (randomUpDown === 0) {
        bananaPrice = ( parseFloat(bananaPrice) + parseFloat(randomIncrement));
        if (bananaPrice>=10) {bananaPrice = 9.99;}
      }
      else {
        bananaPrice = ( parseFloat(bananaPrice) - parseFloat(randomIncrement));
         if (bananaPrice <= 0) {bananaPrice = 0.01;}
      }
$('#bananaPrice').text(bananaPrice.toFixed(2));
//orange
randomUpDown = Math.floor(Math.random() * 2);
randomIncrement = ((Math.random() * 0.49) + 0.01).toFixed(2);
if (randomUpDown === 0) {
      orangePrice = ( parseFloat(orangePrice) - parseFloat(randomIncrement));
      if (orangePrice>=10) {orangePrice = 9.99;}
    }
    else {
      orangePrice = ( parseFloat(orangePrice) + parseFloat(randomIncrement));
      if (orangePrice <= 0) {orangePrice = 0.01;}
    }
$('#orangePrice').text(orangePrice.toFixed(2));
//apple
randomUpDown = Math.floor(Math.random() * 2);
randomIncrement = ((Math.random() * 0.49) + 0.01).toFixed(2);
if (randomUpDown === 0) {
      applePrice = ( parseFloat(applePrice) - parseFloat(randomIncrement));
      if (applePrice>=10) {applePrice = 9.99;}
    }
    else {
      applePrice = ( parseFloat(applePrice) + parseFloat(randomIncrement));
      if (applePrice <= 0) {applePrice = 0.01;}
    }
$('#applePrice').text(applePrice.toFixed(2));
//grape
randomUpDown = Math.floor(Math.random() * 2);
randomIncrement = ((Math.random() * 0.49) + 0.01).toFixed(2);
if (randomUpDown === 0) {
      grapePrice = ( parseFloat(grapePrice) - parseFloat(randomIncrement));
      if (grapePrice>=10) {bananaPrice = 9.99;}
    }
    else {
      grapePrice = ( parseFloat(grapePrice) + parseFloat(randomIncrement));
      if (grapePrice <= 0) {grapePrice = 0.01;}
    }
$('#grapePrice').text(grapePrice.toFixed(2));
//change the interval here:
     }, 4000);

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
