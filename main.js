/***********
//Question 1:
***********/

//get prices of items
var itemPrices = _.pluck(items,'price');

//add all the prices up
var sum = 0;
_.each(itemPrices,function (price) {
  sum += price;
})

//divide total by number of items
var averagePrice = sum/itemPrices.length;

//put the answer in the document
$("#answer1").text("$"+ averagePrice.toFixed(2));

/***********
//Question 2:
***********/
//filter out the items that aren't in the price range

var filteredItems = _.filter(items, function (item) {
  return (item.price <=18 && item.price>=14 && item.currency_code==="USD");
})

//create empty string variable
var answerText = "";

//for each item that is in the price range, add the title and price to the text string
_.each(filteredItems,function (item) {
  answerText += item.title + ": $" +item.price +"\n";
})

//put the text string on the page
$("#answer2").text(answerText);

/***********
//Question 3:
***********/
//filter out all the items that don't use GBP
var britishCrap = _.filter(items, function (item) {
  return item.currency_code ==="GBP";
})

//create empty string variable
var answerText = "";


//for each item that is british, add the title and price to the text string
_.each(britishCrap,function (item) {
  answerText += item.title + ": £" +item.price +"\n";
})

//put the text string on the page
$("#answer3").text(answerText);

/***********
//Question 4:
***********/
//filter out all the items that don't use GBP
var woodStuff = _.filter(items, function (item) {
  return _.indexOf(item.materials,"wood")!=-1;
})

//create empty string variable
var answerText = "";


//for each item that is wood, add the title to the text string
_.each(woodStuff,function (item) {
  answerText += item.title +"\n";
})

//put the text string on the page
$("#answer4").text(answerText);


/***********
//Question 5:
***********/
//filter out all the items that use fewer than 8 materials
var lotsOfMaterials = _.filter(items, function (item) {
  return item.materials.length>=8;
})

//create empty string variable
var answerText = "";


//for each item that is made of 8 or more materials, add the title, number of materials, and materials to the text string
_.each(lotsOfMaterials,function (item) {
  answerText += item.title + " is made of "+ item.materials.length +" items, which are: " + item.materials + "\n";
})

//put the text string on the page
$("#answer5").text(answerText);


/***********
//Question 6:
***********/
//filter out all the items not made by the seller
var homemade = _.filter(items, function (item) {
  return item.who_made === "i_did";
})

//create answer string
var answerText = homemade.length +" items were made by their seller.";


//put the text string on the page
$("#answer6").text(answerText);
