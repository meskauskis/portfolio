var utils = require('utils'),
    url = 'http://meskauskis.com/dailybeast/';
//casper.page.injectJs('/path/to/jquery.js');

// Verify articles exist on the page.
casper.test.begin('article items exist', 1, function(test) {
  casper.start()
  .thenOpen(url, function() {
  })
  .then(function() {
    casper.wait(2000, function() {
      test.assertExists('.article-item');
    });
  })
  .run(function() {
    test.done();
  });
});


// Verify there is json data.
casper.test.begin('json returns data', 1, function(test) {
  casper.start().then(function() {
    this.open(url + 'data/articles.json', {
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
    });
  })
  .then(function() {
    var content = JSON.parse(this.getPageContent());
    //utils.dump(content);
    test.assertType(content, "object");
  })
  .run(function() {
    test.done();
  });
});
