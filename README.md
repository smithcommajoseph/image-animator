# Image Animator 

[![NPM version][npm-image]][npm-url]
[![Travis Build][travis-image]][travis-url]

I once worked on a site for an animated movie that required this low-res style image animation component. I figure if it was good enough for a high-traffic, webby-recognized site; it was good enough to share.

Weighing in at 2.2K (uncompressed), ImageAnimator has zero dependencies, with the exception of the DOM, so you can pretty much plug and play. 

## Install


```sh
npm i image-animator --save
```

or using yarn

```sh
yarn add image-animator
```

**Note: If using a package manager (recommended) you will _likely_ want to integrate w/ your own build tools. However, the `dist` directory contains prebuilt versions of the project for easy inclusion in a web page.**

## Usage

Create a imageAnimator instance, by passing an opts object like so.

```javascript
let imageAnimator = new imageAnimator({el: SOME_DOM_NODE_THAT_CONTAINS_IMAGES});
```

Valid options are 

#### el: `Object` (required)
The DOM node that contains the images that we will be using in the imageAnimator.

Accept a native JS element like `document.getElementById('image-animator-image-sequence')`.

#### fps: `Number` (optional)
The target frames per second of the imageAnimator animation

default value: `24`

#### delay: `Number` (optional)
Amount of time (in milliseconds) that should pass between retarting the imageAnimator sequence (only evaluated if `isLooping` is set to `true`)

default value: `false`

#### isLooping: `Boolean` (optional)
Set to `true` if the imageAnimator sequence should restart after finishing

default value: `false`

#### loops: `Number` (optional)
The max number of times the imageAnimator sequece should restart

default value: `null`

#### onInit: `Object` (optional)
Optional function that is called when the imageAnimator object is initialized.

#### onComplete: `Object` (optional)
Optional function that is called when the imageAnimator object is done animating.


## Examples
Check [Here](http://technicolorenvy.github.io/flipbook/) for more in-depth examples.

Consider the following.

    <!DOCTYPE html>
    <html>
    <head>
    <title>Example</title>
    <script type="text/javascript" src="browserified-image-animator.min.js"></script>
    </head>

    <body>
      <h1>imageAnimator example</h1>
      <div id="image-animator-image-sequence">
        <img src="img1.png" alt="some alt"/>
        <img src="img2.png" alt="some alt"/>
        <img src="img3.png" alt="some alt"/>
        <img src="img4.png" alt="some alt"/>
        <img src="img5.png" alt="some alt"/>
        ...
      </div>
    </body>

    <script type="text/javascript">
      (function(){
        var imageAnimator = new imageAnimator({
          el: document.getElementById('image-animator-image-sequence'),
          isLooping: true,
          fps: 30
        });
      })();

    </script>
    </html>

The JS bit above does three things

1. Creates an instance of `imageAnimator` named `imageAnimator` and passes the the `#image-animator-image-sequence` div as the `el` property.
2. Sets the `isLooping` to `true`, so the image sequence will restart when it has completed 
3. Sets the `fps` to `30` frames per second.

## Contributing
If you have a bug fix or feature proposal, submit a pull request with a clear description of the change, plus tests.

## License

MIT © Joseph (Jos) Smith

[npm-url]: https://npmjs.org/package/image-animator
[npm-image]: https://img.shields.io/npm/v/image-animator.svg?style=flat-square

[travis-url]: https://travis-ci.org/technicolorenvy/image-animator
[travis-image]: https://img.shields.io/travis/technicolorenvy/image-animator.svg?style=flat-square