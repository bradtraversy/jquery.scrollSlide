# ScrollSlide #

**ScrollSlide** is a jQuery plugin that will set off a slide in and slide out animation depending on the y position of the browser's scrollbar.


## Version ##
**1.0.0**

## Demo ##
To view a live demo, please go to - [http://codedemos.com/scrollslide](http://www.codedemos.com/scrollslide)

##Plugin Options##

* **direction** - Which direction the object should slide in (left, right, up, down)
* **speed** - Speed of the slide animation
* **scrollstart** - The position of the scrollbar's y axis
* **slideback** - If the objects should slide back out of view when scroll back up (true, false)

##Dependencies##
You must include the **jQuery UI Library**
```<script src="https://code.jquery.com/ui/1.11.1/jquery-ui.js"></script>```

##Usage##
Include **jQuery, jQuery UI** and **jquery.scrollslide.js**

    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
    <script src="js/jquery.scrollslide.js"></script>


After the document is ready, attatch **.scrollSlide()** to any HTML element

    $('#someElement').scrollSlide({
	    direction   : 'left',
	    speed       : 1000,
        scrollstart : 200,
	    slideback   : false
    });

If you run into any issues with how far you can scroll, try adding a height or min-height to the parent element

## Vendors ##
**ScrollSlide** uses the following open source projects

* JQuery - [http://jquery.com](www.jquery.com)

##Supported Browsers##
* Chrome (stable and canary channel)
* Firefox
* IE 9 and 10
* Opera
* Safari

##License##
GNU/GPL

##Support##
If you are having issues getting this software to work, you can email support@codeskillet.com

##Authors##
Brad Traversy

* [http://twitter.com/bradtraversy](http://twitter.com/bradtraversy)
* [http://www.linkedin.com/in/bradtraversy](http://www.linkedin.com/in/bradtraversy)