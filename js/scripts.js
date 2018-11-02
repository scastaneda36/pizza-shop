

$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    event.preventDefault();


    var q1 = $("select#q1").val();
    var q2 = $("select#q2").val();
    var q3 = $("select#q3").val();
    var q4 = $("select#q4").val();
    var q5 = $("select#q5").val();

    if (q1==="pro" && q2==="large" && q3==="software" && q4==="databases" && q5==="hammer"){
      $("#c").show();
    } else if (q1==="skill" && q2==="large" && q3==="interfaces" && q4==="fundamentals" && q5==="sword"){
          $("#java").show();
    } else if (q1==="fun" && q2==="small" && q3==="apps" && q4==="simplicity" && q5==="axe"){
          $("#ruby").show();
    }
  });
});
