---
title: Font-face and Font File Types
description: Font-family is limited to the fonts that are already loaded on a user's computer and depending on the system being used. With `@font-face` rule, it allows us to use custom fonts on a webpage.
image: https://picsum.photos/800/250?random=8
tags: ['Font-face', 'Font file']
published: '03/10/2021'
---

## How to use @font-face?
The `@font-face` rule should be added on top of your stylesheet files, it looks like a function which collects many CSS properties to instructs the browser to download the font from where it is hosted.
```
@font-face {
  font-family: 'FontName';
  src: url('FontName.eot'); /* IE9 Compat Modes */
  src: url('FontName.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('FontName.woff2') format('woff2'), /* Super Modern Browsers */
      url('FontName.woff') format('woff'), /* Pretty Modern Browsers */
      url('FontName.ttf')  format('truetype'), /* Safari, Android, iOS */
      url('FontName.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```

Then it can be use
```
body {
  font-family: 'FontName', Helvetica, Arial, sans-serif;
}
```

## Understanding Font File Types
You can see there are a lot of font files with strange extensions, what do they mean?

### EOT
**Stands for**: Embedded Open Type.

This format was created by Microsoft over 15 years ago. EOT is not compressed, this is the only format that can be recognized by IE8 and below when using `@font-face`

### TTF
**Stands for**: TrueType Fonts

This one was created in the end of 1980s by Apple and Microsoft, this format is popular on Mac and Windows OS

### WOFF/WOFF2
**Stands for**: Web Open Font Format

Created in 2009 by Mozilla, it is for use on the web and often loads faster than other formats because it is a compressed version of the structure used by OpenType (OFT) and TrueType (TTF) fonts.

WOFF2 is the next generation of WOFF and boasts better compression than the original.

### SVG
**Stands for**: Scalable Vector Graphics

SVG is a vector re-creation of the font, which makes it much lighter in file size, and also makes it ideal for mobile use. This format is the only one allowed by version 4.1 and below of Safari for iOS. SVG fonts are not currently supported by Firefox, IE or IE Mobile

## Some errors when using web fonts
### CSS3117: @font-face failed cross-origin request. Resource access is restricted
You can see this error on Firefox and IE if you store the web font files on remote servers (ex: CDN), and the browsers requiring a header to be returned if you want to load fonts from a CDN with a different hostname than the one you load the site with.

This issue can be fixed by:

- Store your font files on the server with same your domain to your website

- Adding a few lines to .htaccess file to configure apache to set the Access-Control-Allow-Origin header on font files, to allow access from non-CDN’d domain.
```
<FilesMatch "\.(ttf|otf|eot|woff)$">  
  <IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin http://mydomain.com"
  </IfModule>
</FilesMatch>
```

### CSS3114: @font-face failed OpenType embedding permission check. Permission must be Installable.
There's a legal issue with the TTF file that's preventing it from being usable in Windows. You should use a legal font.

### CSS3111: @font-face encountered unknown error.
This issue cause by generating from TTF to EOT, you should try with other converter or generator tools to convert TTF to EOT.