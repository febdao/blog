---
title: CSS and Javascript media queries
desc: The responsive display is an important thing in web design, it can't be done without using media queries.
img: https://picsum.photos/800/250?random=1
tags: front-end, css
---
## CSS Media Queries:
CSS media queries are a core in the responsive design, the @media rule is used in media queries allows the front-end developer can apply different styles to different media types/devices.

In a CSS file, the media queries looks like this:
```
.menu {
  font-size: 20px;
}

@media (min-width: 1024px) {
  .menu {
    font-size: 16px;
  }
}

```
They can be used to check:
* Width and height of the viewport
* Width and height of the device
* Orientation (landscape or portrait mode)
* Resolution
Using media queries are a popular technique for delivering a style sheet to desktops, laptops, tablets and mobile display. You can also use media queries to specify the styles are only for printed documentation or screen readers.

```
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}

@media screen {
  body {
    color: green;
  }
}

@media print {
  body {
    color: black;
  }
}

@media screen and (max-width: 992px) {
  .column {
    width: 50%;
  }
}
```

Media features also provide more specific details to media queries, for example: you can apply styles for only the screens that are greater or smaller than a width.
```
@media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px) {
  body {
    background: yellow;
  }
}
```
### SASS/SCSS mixins
In the real projects, I usually use SCSS, this is how I make the Media queries mixins.

First of all, we need to have the breakpoint variables in file `_variables.scss`
```
// Media breakpoints
$sm: 576px;
$md: 768px;
$lg: 990px;
$xl: 1200px;
```

Then we can create mixins like this
```
// Media query
@mixin miw($media) {
  @media (min-width: $media) { @content; }
}

@mixin maw($media) {
  @media (max-width: $media - 0.02px) { @content; }
}
```

Now, when you want to use the media queries, just do
```
.btn {
    margin-bottom: 0;

    @include min($md) {
      + .btn {
        margin-top: 10px;
      }
    }

    @include maw($lg) {
      + .btn {
        margin-top: 20px;
      }
    }
  }
```
We will have:
```
.btn {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .btn + .btn {
    margin-top: 10px;
  }
}

@media (max-width: 990px) {
  .btn + .btn {
    margin-top: 20px;
  }
}
```

## Javascript Media Queries:
**Working with media queries in JavaScript is very different than working with them in CSS, even though the concepts are similar: match some conditions and apply some stuff.**

There are 2 ways to implement the Javascript media queries

### 1. The old way
This is the most common approach, it's binding a resize event, then check the window.innerWidth with the resize function

```
function checkMediaQuery() {
  if (window.innerWidth > 576) {
    console.log('Larger than Small Media Query Matched!');
  }

  if (window.innerWidth > 768) {
    console.log('Larger than Medium Media Query Matched!');
  }

  if (window.innerWidth > 990) {
    console.log('Large Media Query Matched!');
  }
}

// Initial check
checkMediaQuery();

// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);
```

### 2. Using the matchMedia()
To determine if the document matches the media query string in Javascript, we can use the matchMedia() method. The usage is nearly like CSS media queries, we need to pass the media query string to matchMedia() then check the .matches property.
```
const mediaQuerySm = window.matchMedia('(min-width: 576px)');
const mediaQueryMd = window.matchMedia('(min-width: 768px)');
const mediaQueryLg = window.matchMedia('(min-width: 990px)');
```
Then we can check it the `.matches` returns `true`
```
// Check if the media query is true
if (mediaQuerySm.matches) {
  alert('Larger than Small Media Query Matched!')
}

if (mediaQueryMd.matches) {
  alert('Larger than Medium Media Query Matched!')
}

if (mediaQueryLg.matches) {
  alert('Large Media Query Matched!')
}
```
Finally, we can listen for the changes
```
function handleResizeChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
  }
}

// Register event listener
mediaQuerySm.addListener(handleResizeChange);
mediaQueryMd.addListener(handleResizeChange);
mediaQueryLg.addListener(handleResizeChange);

// Initial check
handleResizeChange(mediaQuerySm);
handleResizeChange(mediaQueryMd);
handleResizeChange(mediaQueryLg);
```
