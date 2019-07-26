/*
 * ImageAnimator
 * https://github.com/technicolorenvy/imageAnimator
 *
 * Copyright (c) 2013 Joseph (Jos) Smith
 * Licensed under the MIT license.
 */

function ImageAnimator(initOb) {
  const _this = this,
      noop = () => {};

  this.el                 = initOb.el;
  this.imgs               = ImageAnimator.getImgs(this.el);
  this.imgLen             = this.imgs.length;
  this.fps                = initOb.fps || 24;
  this.delay              = initOb.delay || false;
  this.interval           = Math.round(1000 / this.fps);
  this.isLooping          = initOb.isLooping || false;
  this.loops              = typeof initOb.loops !== 'undefined' ? initOb.loops : null;
  this.onInit             = typeof initOb.onInit !== 'undefined' ? initOb.onInit : noop;
  this.onComplete         = typeof initOb.onComplete !== 'undefined' ? initOb.onComplete : noop;
  this.currentFrame       = 0;
  this.currentLoop        = 0;

  this.onInit();

  this.imgTimeout = setTimeout(() => { _this.play(); }, this.interval);
}

ImageAnimator.getImgs = (el) => {
  let imgs = [];
  try{ imgs = el.querySelectorAll('img'); }
  catch(err) {}
  return imgs;
};

ImageAnimator.prototype.play = () => {
  let cont = true,
      delay = false,
      _this = this;

  if (this.currentFrame === this.imgLen) {
    if (this.isLooping === true) {
      this.currentFrame = 0;
      delay = this.delay ? true : void 0;
      if (this.loops) {
        this.currentLoop++;
        if (this.currentLoop >= this.loops-1) {
          this.isLooping = false;
        }
      }
    } else {
      cont = false;
    }
  }

  if (cont === true) {
    if (delay === true) {
      setTimeout(() => { _this.continue(); }, this.delay);
    } else {
      this.continue();
    }
    this.currentFrame++;
  } else {
    this.onComplete();
  }
};

ImageAnimator.prototype.continue = () => {
  let _this = this;
  for(let i=0; i<this.imgLen; i++) {
    this.imgs[i].style['display'] = 'none';
  }
  this.imgs[this.currentFrame].style['display'] = 'block';
  this.imgTimeout = setTimeout(() => { _this.play(); }, this.interval);
};

ImageAnimator.prototype.stop = () => {
  clearTimeout(this.imgTimeout);
};

if (typeof module === 'object') module.exports = ImageAnimator;
