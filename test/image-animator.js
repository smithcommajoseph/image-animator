const should = require('should');
const ImageAnimator = require('../lib/image-animator');

// placeholder 'test'
describe('ImageAnimator', () => {
  it('should have the correct properties', () => {
    let onInit = () => { return 1; },
        onComplete = () => { return 2; },
        imageAnimator;

    //check the defaults
    imageAnimator = new ImageAnimator({el: {someprop: 'foo'}});

    imageAnimator.should.have.property('fps', 24);
    imageAnimator.should.have.property('delay', false);
    imageAnimator.should.have.property('isLooping', false);
    imageAnimator.should.have.property('onInit');
    imageAnimator.should.have.property('onComplete');

    //check w/ some passed vals
    // everything from this point on will cause the test to fail
    // not a high priority to fix at this time - jws
    imageAnimator = new ImageAnimator({
      el: 'moop',
      fps: 10,
      delay: 1000,
      isLooping: true,
      onInit: onInit,
      onComplete: onComplete
    });

    imageAnimator.should.have.property('el', 'moop');
    imageAnimator.should.have.property('fps', 10);
    imageAnimator.should.have.property('delay', 1000);
    imageAnimator.should.have.property('isLooping', true);
    imageAnimator.should.have.property('onInit', onInit);
    imageAnimator.should.have.property('onComplete', onComplete);
  });

});
