
var bananaPrice;
var applePrice;
var orangePrice;
var grapePrice;

var startPrice = 0;
var minNum = 0.01;
var maxNum = 0.50;
var randomPrice = 0;


var getPrice = function(){

 changePrice = Math.floor(Math.random() * 10);
 startPrice = changePrice;

 var randomChange = Math.floor(Math.random() * 2);
 randomPrice = (Math.random() * (maxNum - minNum) + minNum);
 // var randomTens = Math.floor(Math.random() * 5.00);

 if (randomChange === 0){
   endPrice = (changePrice - randomPrice).toFixed(2);
   //endPrice = (((startPrice - randomPrice) - randomTens) + 1.00).toFixed(2);
 }
 else {
   endPrice = (changePrice + randomPrice).toFixed(2);
   //endPrice = (((startPrice + randomPrice) + randomTens) - 0.51).toFixed(2);
 }

 document.getElementById('randomDisplay').innerHTML = endPrice;
};
