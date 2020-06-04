# Better Roam Research

This is a team for Roam Research. Got feedback? **[Say hi on Twitter](https://twitter.com/linuz90).**

Here's a preview:

![](/assets/preview.png)

## How to use

You can follow [this guide](https://nesslabs.com/roam-research-themes-custom-styling-css) to use it inside Roam Research.

-   Add a page named exactly `roam/css` inside Roam
-   Add the theme as a bracketed link `[[Better Roam Research]]`
-   Add the CSS as a `code block` inside it

![](/assets/how-to.png)

## How to edit and compile

The working [SCSS](https://sass-lang.com/) file is [here](/main.scss).

**The compiled CSS** file is [here](/src/css/main.css). This CSS can be used with [Stylus](https://chrome.google.com/webstore/detail/stylus-beta/apmmpaebfobifelkijhaljbmpcgbjbdo?hl=en).

Command to compile using SASS:

`sass --sourcemap=none --no-cache --watch ./src/css/main.scss:./src/css/main.css`
