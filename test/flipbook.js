var should = require('should'),
    FlipBook = require('../../flipbook');

// placeholder 'test'
describe('FlipBook', function() {
  it('should have the correct properties', function(){
    var onInit = function(){ return 1; },
        onComplete = function(){ return 2; },
        flipBook;

    //check the defaults
    flipBook = new FlipBook({el: {someprop: 'foo'}});

    flipBook.should.have.property('fps', 24);
    flipBook.should.have.property('delay', false);
    flipBook.should.have.property('isLooping', false);
    flipBook.should.have.property('onInit');
    flipBook.should.have.property('onComplete');

    //check w/ some passed vals
    flipBook = new FlipBook({
      el: 'moop',
      fps: 10,
      delay: 1000,
      isLooping: true,
      onInit: onInit,
      onComplete: onComplete
    });

    flipBook.should.have.property('el', 'moop');
    flipBook.should.have.property('fps', 10);
    flipBook.should.have.property('delay', 1000);
    flipBook.should.have.property('isLooping', true);
    flipBook.should.have.property('onInit', onInit);
    flipBook.should.have.property('onComplete', onComplete);
  });

});
