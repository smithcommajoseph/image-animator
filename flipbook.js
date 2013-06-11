function flipBook() {
  var callback,
    _this = this,
    noop = function() {};

  this.$el = initOb.$el;
  this.imgArr = initOb.imgArr;
  this.imgLen = this.imgArr.length;
  this.fps = initOb.fps;
  this.delay = initOb.delay || false;
  this.interval = this.getInterval();
  this.isLooping = initOb.isLooping || false;
  this.loops = typeof initOb.loops !== "undefined" ? initOb.loops : null;
  this.onInit = typeof initOb.onInit !== "undefined" ? initOb.onInit : noop;
  this.animationCallback = typeof initOb.animationCallback !== "undefined" ? initOb.animationCallback : noop;
  this.currentFrame = 0;
  this.currentLoop = 0;

  this.$view = '';

  this.$el.html(this.$view);

  this.$imgs = this.$el.find('.image-sequence-wrap img');

  this.onInit();

  callback = function() {
    _this.play();
  };

  this.imgTimeout = setTimeout(callback, this.interval);
};

flipBook.prototype.getInterval = function() {
  return Math.round(1000 / this.fps);
};

flipBook.prototype.play = function() {
  var cont = true,
      delay = false;

  if (this.currentFrame === this.imgLen) {
    if (this.isLooping === true) {
      this.currentFrame = 0;
      delay = this.delay ? true : void 0;
      if (this.loops) {
        this.currentLoop++;
        if (this.currentLoop >= this.loops) {
          this.isLooping = false;
        }
      }
    } else {
      cont = false;
    }
  } else {
    this.currentFrame++;
  }

  if (cont === true) {
    if (delay === true) {
      return setTimeout(this.continue, this.delay);
    } else {
      return this.continue();
    }
  } else {
    this.animationCallback();
  }
};

flipBook.prototype.continue = function() {
  var callback;
  this.$imgs.hide();
  this.$imgs.eq(this.currentFrame - 1).show();
  callback = function() {
    return this.play();
  };
  return this.imgTimeout = setTimeout(callback, this.interval);
};

flipBook.prototype.stop = function() {
  clearTimeout(this.imgTimeout);
};

