var assert = require('assert');

var myapi = {
    get: function(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts/1', true);

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    callback(null, JSON.parse(xhr.responseText));
                }
                else {
                    callback(xhr.status);
                }
            }
        };

        xhr.send();
    },

    post: function(data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://jsonplaceholder.typicode.com/posts', true);

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                callback();
            }
        };

        xhr.send(JSON.stringify(data));
    }
};


describe('MyAPI', function() {
    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    afterEach(function() {
        this.xhr.restore();
    });


    //Tests etc. go here
});




/*
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
//var $ = require('jquery');

describe('ajax', function() {
  describe('#done', function (done) {
    it('should return article data', function () {

    xhr = new XMLHttpRequest()
    xhr.open('GET', "http://url-bla-bla.json", true)
    xhr.onreadystatechange = function(){
      console.log("xhr "+JSON.stringify(xhr))
      if (xhr.readyState === 4)
          done();
    }
    xhr.send();

      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
*/
