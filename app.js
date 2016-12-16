(function(){
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {

var showlist = this;
showlist.items = ShoppingListCheckOffService.getitemtobuy();
showlist.removeitem = function (itemIndex) {
ShoppingListCheckOffService.boughtitem(itemIndex);
};
showlist.val = function() {
  return showlist.items.length;
};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
var showlist2 = this;
showlist2.items = ShoppingListCheckOffService.getitembought();
showlist2.val = function() {
  return showlist2.items.length;
}; 

}

function ShoppingListCheckOffService () {
	var service = this;

	
var shoppingListtobuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "chips",
    quantity: "5"
  }
];
var shoppingListbought = [];
var msgval = 0;
service.boughtitem = function (itemIndex) {
	var itemmoved = shoppingListtobuy[itemIndex];
    shoppingListbought.push(itemmoved);
	shoppingListtobuy.splice(itemIndex,1);
	msgval =1;
};


service.getitemtobuy = function () {
	return shoppingListtobuy;
}

service.getitembought = function () {

	console.log (shoppingListbought.length);

	return shoppingListbought;
}
service.message2 = function () {
      return shoppingListbought.length;   
}

}

})();