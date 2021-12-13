# Sticky-Navbar

## Background & Objectives
When the user scrolls down and the navbar hits the top of the browser, we want to make it fix so the content scrolls underneath, as well as scroll out the logo.


## Features
* element.offsetTop - it returns the distance of the outer border of the current element relative to the inner border of the top of the offsetParent node;
* window.scrollY - it returns the number of pixels that the document is currently scrolled vertically.

## Technologies
Project created with:
* HTML5
* CSS3
* JavaScript ES6

## Specs

### Cloning
Go to the Terminal, choose a directory where you wish to clone the repository and run:
```bash
git clone git@github.com:Francisco-Webdeveloper/Sticky-Navbar.git
```

### Local Server
Launch local webserver with the Terminal:
```bash
npm install -g parcel-bundler
parcel index.html
open http://localhost:1234 in the browser
