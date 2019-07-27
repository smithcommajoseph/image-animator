(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 * ImageAnimator
 * https://github.com/technicolorenvy/image-animator
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
  this.onInit             = typeof initOb.onInit  === 'function' ? initOb.onInit : noop;
  this.onComplete         = typeof initOb.onComplete === 'function' ? initOb.onComplete : noop;
  this.currentFrame       = 0;
  this.currentLoop        = 0;

  this.onInit();

  this.imgTimeout = setTimeout(() => { _this.play(); }, this.interval);
}

ImageAnimator.getImgs = function (el) {
  let imgs = [];
  try{ imgs = el.querySelectorAll('img'); }
  catch(err) {}
  return imgs;
};

ImageAnimator.prototype.play = function () {
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

ImageAnimator.prototype.continue = function () {
  let _this = this;
  for(let i=0; i<this.imgLen; i++) {
    this.imgs[i].style['display'] = 'none';
  }
  this.imgs[this.currentFrame].style['display'] = 'block';
  this.imgTimeout = setTimeout(() => { _this.play(); }, this.interval);
};

ImageAnimator.prototype.stop = function () {
  clearTimeout(this.imgTimeout);
};

if (typeof module === 'object') module.exports = ImageAnimator;

},{}]},{},[1]);
