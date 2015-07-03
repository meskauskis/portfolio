$(function() {
  var articlesUrl = 'data/articles.json';
  console.log(articlesUrl);

  var source = document.querySelector('#articleTemplate').innerHTML,
      template = Handlebars.compile(source),
      target = document.querySelector('#articlePlaceholder');

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


  $.ajax({
    url: articlesUrl,
    dataType: 'json',
  })
  .done(function(data) {
    console.log(data);
  target.innerHTML = template(data);
  });



});
