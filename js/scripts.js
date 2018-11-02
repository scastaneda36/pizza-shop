//Builds a Pizza Logic

function Pizza (sauce, toppings, size){
  this.sauce = sauce
  this.toppings = toppings
  this.size = size
}


$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza (sauce, toppings, size)

    $("#total").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var top = $(this).val();
      console.log(top);
    });
    $("#total").show();
    $("input:checkbox[name=sauce]:checked").each(function(){
      var top = $(this).val();
    });
  });
});
