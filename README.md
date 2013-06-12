# FlipBook [![Build Status](https://travis-ci.org/technicolorenvy/flipbook.png)](https://travis-ci.org/technicolorenvy/flipbook)

I once worked on a site for an animated movie that required this flip-book style component. I figure if it was good enough for a high-traffic, webby-recognized site; it was good enough to share.

Weighing in at 2.2K (uncompressed) FlipBook does not have any dependencies, with the exception of the DOM, so you can plug and play. 

## Usage

Create a flipBook instance, by passing an opts object like so.

    var flipbook = new FlipBook({el: SOME_DOM_NODE});

Valid options are 

#### el: `Object` (required)
The DOM node that contains the images that we will be using in the flipbook.

Accept a native JS element like `document.getElementById('flip-book-image-sequence')`.

#### fps: `Number` (optional)
The target frames per second of the flipbook animation

default value: `24`

#### delay: `Number` (optional)
Amount of time (in milliseconds) that should pass between retarting the flipbook sequence (only evaluated if `isLooping` is set to `true`)

default value: `false`

#### isLooping: `Boolean` (optional)
Set to `true` if the flipbook sequence should restart after finishing

default value: `false`

#### loops: `Number` (optional)
The max number of times the flipbook sequece should restart

default value: `null`

#### onInit: `Object` (optional)
Optional function that is called when the flipBook object is initialized.

#### onComplete: `Object` (optional)
Optional function that is called when the flipBook object is done animating.


## Examples
Check [link to come soon]() for more in-depth examples.

Consider the following.

    <!DOCTYPE html>
    <html>
    <head>
    <title>Example</title>
    <script type="text/javascript" src="flipbook.js"></script>
    </head>

    <body>
      <h1>FlipBook example</h1>
      <div id="flip-book-image-sequence">
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
        var flipbook = new FlipBook({
          el: document.getElementById('flip-book-image-sequence'),
          isLooping: true,
          fps: 30
        });
      })();

    </script>
    </html>

The JS bit above does three things

1. Creates an instance of `FlipBook` named `flipBook` and passes the the `#flip-book-image-sequence` div as the `el` property.
2. Sets the `isLooping` to `true`, so the image sequence will restart when it has completed 
3. Sets the `fps` to `30` frames per second.

Again, check [link to come soon]() for more in-depth examples.

## Contributing
If you have a bug fix or feature proposal, submit a pull request with a clear description of the change, plus tests.

## License
Copyright (c) 2013 Joseph (Jos) Smith  
Licensed under the MIT license.
