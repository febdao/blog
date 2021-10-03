---
title: Styling ordered list numbers
description: Now, with model web design, a numbered list is not just a plain figure. It can be a different font, size, position, colour, background and whatever.
image: https://picsum.photos/800/250?random=6
tags: ['ordered']
published: '02/10/2021'
---
If you want to number items in order, you can use the `<ol>` (ordered list) tag. But it is kind of hard to style those list numbers in CSS. There is an easier way to create a number styled list of item using the :before pseudo element along with counter properties.

![Styling ordered list numbers](https://www.lilengine.co/sites/default/files/inline-images/Screen%20Shot%202018-04-27%20at%2012.17.20.png "Screenshot of code")

In this article, I will show you how can we use this method to style for numbered list.

## The markup
```
<ol class="custom-counter">
  <li>This is the first item</li>
  <li>This is the second item</li>
  <li>This is the third item</li>
  <li>This is the fourth item</li>
  <li>This is the fifth item</li>
  <li>This is the sixth item</li>
</ol>
```

### The first thing we need to define is where the counter should be reset
```
.custom-counter {
  counter-reset: section;
}
```
Now, the counter will start from 0. The value of the couter-reset property can be anything you want, it will be used for the counter-increment property later.

### Next, we need to add the CSS to auto increment the number of items
```
.custom-counter li::before {
  counter-increment: step-counter;
  content: counter(step-counter);
}
```
In this code, we are telling the CSS to start incrementing for all li elements inside .custom-couter. The first li element will be numbered 1, the second will be numbered 2 and so on.

We also use content property to show the number with the value `counter(step-counter)`.

### And this is the final result
![Styling ordered list numbers](https://www.lilengine.co/sites/default/files/inline-images/Screen%20Shot%202018-04-27%20at%2012.17.20.png "Screenshot of code")

### Notices:
* You can apply numbered counters with any `html tag` you want, it isn’t limited to ordered list
* The number don’t have to be decimals, they can be anything that `list-style-type` property can be
```
circle (○ ○ ○)
square (▪ ▪ ▪)
decimal (1 2 3)
decimal-leading-zero (01, 02, 03)
lower-roman (i ii iii)
upper-roman (I II III)
lower-greek (α β γ)
lower-latin (a b c)
upper-latin (A B C)
armenian (Ա Բ Գ)
georgian (ა ბ გ)
lower-alpha (a b c)
upper-alpha (A B C)
```
