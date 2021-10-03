---
title: An introduction to PostCSS
description: Nowadays, most front-end developer have worked with some preprocessors such as SASS, LESS, Stylus... which are more and more useful and increasingly indispensable tools when working with CSS.
image: https://picsum.photos/800/250?random=4
tags: ['front-end', 'css', 'postcss']
published: '02/10/2021'
---
Think if we go back to writing the pure CSS, without variables, mixins or nested then the work will be heavy and boring.
But which of these tools is the best approach?

## What is PostCSS?
As same as all other programming languages, the evolution of CSS is an iterative process. With each major release, we will get the new features and syntax to make styling easier and more flexible.

Just like the CSS preprocessing tools listed above, PostCSS is also a preprocessor tool, but it is more flexible and powerful than Sass or Less in that it can assist us in creating plugins and reusing someone else's plugin. That is, we can use CSS in module form. With PostCSS you can easily choose what preprocessor you want to use in your project, easily import plugins from the community by including it in the tasks.

An example of this feature is the [PostCSSFontPath](https://github.com/seaneking/postcss-fontpath).

If you use SASS, first of all, you need to create a mixin to create a font-face

```
@mixin importfont($font-family, $font-filename, $font-weight : normal, $font-style :normal, $font-stretch : normal) {
  @font-face {
    font-family: '#{$font-family}';
    src: url('#{$font-filename}.eot');
    src: url('#{$font-filename}.woff') format('woff'),
    url('#{$font-filename}.ttf') format('truetype');
    font-weight: $font-weight;
    font-style: $font-style;
    font-stretch: $font-stretch;
  }
}
```
then call it to use
```
@include importfont('mission script', 'fonts/mission-script-webfont', 300);
```

But if you use `PostCSSFontPath` in PostCSS, you just need to use:
```
@font-face {
  font-family: 'My Font';
  font-path: '/path/to/font/file';
  font-weight: normal;
  font-style: normal;
}
```
you will have a same result:
```
@font-face {
  font-family: 'My Font';
  src: url("/path/to/font/file.eot") format('embedded-opentype'),
       url("/path/to/font/file.woff2") format('woff2'),
       url("/path/to/font/file.woff") format('woff'),
       url("/path/to/font/file.ttf") format('truetype'),
       url("/path/to/font/file.otf") format('opentype'),
       url("/path/to/font/file.svg") format('svg');
  font-weight: normal;
  font-style: normal;
}
```
It's great and convenient, isn't it?

Currently, there are may PostCSS plugins that you can find out more by yourself at this link:  https://www.postcss.parts/. It's completely free to create your own plugin and contribute back to the front-end community.

## How to integrate PostCSS?
Since PostCSS is written in Javascript, we can use task runners like Gulp or Grunt to transform the CSS. Whether to use Gulp or Grunt is up to you guys, but I am used to using Gulp, so what I mentioned here is related to Gulp 😎

### Install PostCSS with Gulp
To install the PostCSS module, just run the command
```
npm i gulp-postcss -D
```
Call then use PostCSS in Gulpfile.js  file
```
var postcss = require('gulp-postcss');

gulp.task('styles', function () {
    return gulp.src('path/to/dev/style.css')
        .pipe(postcss([]))
        .pipe(gulp.dest(path/to/prod))
});
```
Now, to compile the css, we just need to run:
```
gulp styles
```

### Install and use the plugin
If you only use PostCSS as a tool to compile CSS, it is a waste, because the real power of PostCSS lies in plugins. You can follow the specific list of PostCSS plugins at this link: https://github.com/postcss/postcss#plugins. Like NPM packages, PostCSS plugins can be easily installed via the command line:

### An example about focus plugin:
```
npm i postcss-focus -D
```
Now, to use it, you just need modify the Gulpfile.js like this:

```
var processorArray = [
    require('postcss-plugin')()
];

gulp.task('styles', function () {
    gulp.src('path/to/dev/style.css')
        .pipe(postcss(processorArray))
        .pipe(gulp.dest('path/to/prod'))
});
```
Then, if you write:
```
*:focus {
    outline: 0;
}
.button:hover {
    background: red;
}

.a:hover, .b:hover {
    outline: 0;
}
.b:focus {
    background: red;
}
```
it will generate:
```
*:focus {
    outline: 0;
}
.button:hover, .button:focus {
    background: red;
}
.a:hover, .b:hover, .a:focus {
    outline: 0;
}
.b:focus {
    background: red;
}
```

### autoprefix
Install
```
npm i autoprefixer -D
```
How to use: 
```
gulp.task('autoprefixer', () => {
  const autoprefixer = require('autoprefixer')
  const sourcemaps = require('gulp-sourcemaps')
  const postcss = require('gulp-postcss')

  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'))
})
```
then, if you have
```
.item {
  display: flex;
  flex-flow: row wrap;
}
```
it will generate
```
.item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -webkit-flex-flow: row wrap;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
}
```

## SASS compilation
Actually, this is not compiling SASS to CSS, but this is how to write CSS using SASS's syntax to be able to use variables, nested selector, function and include. Now you need to use a plugin called PreCSS. It is now possible to reuse the contents of your SCSS files, but you need to convert the .scss extension to .css

Install:
```
npm i precss -D
var processorsArray = [
  require('precss')()
];
```
Now you can write CSS as SASS/SCSS syntax
```
/*Variables*/
$blue: #0000ff;
$green: #00ff00;
$radius: 10px;

.square {
  background: $blue;
  border-radius: $radius;
}

/*Imports*/
@import "partials/_base.css";

/*Mixins*/
@define-mixin square $dimension {
    width: $dimension;
    height: $dimension;
}

/*Nesting, variables and mixins*/
.button {
  @mixin square 200px;
  background: $green;
  &:hover {
    background: $blue;
  }
}
```
it will generate
```
.square {
  background: #0000ff;
  border-radius: 10px;
}

.button {
  width: 200px;
  height: 200px;
  background: #00ff00;
}

.button:hover {
  background: #0000ff;
}
```

## What does it mean by this?
With the use of PostCSS, it is becoming more and more fun, object-oriented, and "programmatic" to write CSS. CSS can be modular, building and managing your code will be optimized, easy and flexible. Use PostCSS as soon as possible, as it is a community project, the ecosystem will only grow if people use it and create plugins.
