/*
 * flipBook
 * https://github.com/technicolorenvy/flipBook
 *
 * Copyright (c) 2013 Joseph (Jos) Smith
 * Licensed under the MIT license.
 */

function flipBook() {
  var _this = this,
      noop = function() {};

  this.el                 = initOb.el;
  this.imgArr             = initOb.imgArr;
  this.imgLen             = this.imgArr.length;
  this.view               = initOb.view;
  this.fps                = initOb.fps;
  this.delay              = initOb.delay || false;
  this.interval           = this.getInterval();
  this.isLooping          = initOb.isLooping || false;
  this.loops              = typeof initOb.loops !== "undefined" ? initOb.loops : null;
  this.onInit             = typeof initOb.onInit !== "undefined" ? initOb.onInit : noop;
  this.animationCallback  = typeof initOb.animationCallback !== "undefined" ? initOb.animationCallback : noop;
  this.currentFrame       = 0;
  this.currentLoop        = 0;

  this.el.innerHTML =this.view;
  this.imgs = this.el.querySelectorAll('img');

  this.onInit();

  this.imgTimeout = setTimeout(function(){ _this.play(); }, this.interval);
};

flipBook.prototype.getInterval = function() {
  return Math.round(1000 / this.fps);
};

flipBook.prototype.play = function() {
  var cont = true,
      delay = false,
      _this = this;

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
      setTimeout(function(){ _this.continue(); }, this.delay);
    } else {
      this.continue();
    }
  } else {
    this.animationCallback();
  }
};

flipBook.prototype.continue = function() {
  var _this = this;

  for(var i=0, len=this.imgs.length; i<len; i++) {
    this.imgs[i].style['display'] = 'none';
  }
  this.imgs[this.currentFrame - 1].style['display'] = 'show';
  this.imgTimeout = setTimeout(function(){ _this.play(); }, this.interval);
};

flipBook.prototype.stop = function() {
  clearTimeout(this.imgTimeout);
};

