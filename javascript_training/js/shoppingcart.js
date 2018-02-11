function ShoppingCart(productPrice, country){
  
  var _country = country || 'India';
  var _shipping = 50;
  var _currency = "Rs.";
  if(_country !== "India"){
    _currency = "USD";
  }
  
  function updateCart() {
      var totalPrice = productPrice+_shipping;
      return `${_currency} ${totalPrice}`;
      
      
  }
  
  return updateCart;
}

var cart =  ShoppingCart(499, "USA");
console.dir(cart);
console.log(cart());

var cart1 =  ShoppingCart(699, "India");
console.dir(cart1);
console.log(cart1());
