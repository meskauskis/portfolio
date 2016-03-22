$(function() {
  var source = document.getElementById("myTemplate").innerHTML;
  var template = Handlebars.compile(source);
  var data = {
    names: [
      { "name": "foo" },
      { "name": "bar" },
      { "name": "chew" }
    ],
    candy: [
	  	{ brand: "M&M" },
	  	{ brand: "Snickers" }
    ]
  };
	Handlebars.registerHelper("Max", function(A, B){
    return (A > B) ? A : B;
	});
  document.getElementById("placeholder").innerHTML = template(data);
});
