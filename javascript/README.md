# Javascript project

Project developed copying the instructor coding during the Rocketseat Starter Course.

First of all, I am making this course just to review some basic concepts
that I use every day in my currently job and to learn new things.

## What I learned in this project?

### In a nutshell:

1.  Native JavaScript notation to DOM navigation and manipulate.
2.  HTML5 Web Storage

### In detail:

1.  All methods that I learned to navigate e manipulate the HTML DOM exist on `document` or `element` object.

        To navigate, I reviewed the methods getElementById, getElementByClassName, getElementByTagName.

    I learned the method querySelector that use a CSS Selector to search on DOM Tree and return the first Element
    that matches the selector. I also learned querySelectorAll that work the same way, but return a NodeList object
    witch all Elements that matches the selector.

        To manipulate, I reviewed the methods createElement, createTextNode, createAttribute and appendChild.

2.  Everytime when a page is open, the javascript can save data on variables, but when the page is reload
    this data is lost. To make this data persistent on a single browser, the HTML5 specified the Web Storage.
    I learned that with `localStorage` object we can storage string data with method setItem e retrieve them
    with the method getItem.
