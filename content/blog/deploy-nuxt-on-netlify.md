---
title: How to deploy Nuxt on Netlify
desc: Deploying to Netlify is a option for getting a statically generated Nuxt.js site online quickly.
img: https://picsum.photos/800/250?random=2
tags: front-end, css
---
First of all, you need to config your `nuxt.config.js` file with:
```
buildDir: 'dist',
target: 'static',
generate: {
  fallback: true,
}
```
Then create a new custom command called deploy in `package.json` file:
```
  "scripts": {
    ...
    "deploy": "nuxt build && nuxt generate"
  },
```

Finally, you need to set up the Netlify build settings like this:

![you need to set up the Netlify build settings like this](https://www.lilengine.co/sites/default/files/inline-images/Screen%20Shot%202021-02-26%20at%205.06.30%20pm.png "Screenshot of code")

#### Please remember to set the `Base directory` to the `nuxt.config.js` located folder.

