# Better Roam Research

This is a **minimal theme** for [Roam Research](https://roamresearch.com), with system-level **Dark Mode** support. [Preview below](#preview).

Got feedback? **[Say hi on Twitter](https://twitter.com/linuz90).**

# How to use

1. Inside Roam Research, create a page named exactly `roam/css`

2. Create a `[[Better Roam Research]]` bullet point.

3. Nest this code inside it: \```css @import url("https://linuz90.github.io/better-roam-research/src/css/main.css");```

It should look like this:

![](/assets/how-to.png)

The theme will change when I push updates in this repo ⚡️

More extensive guide [here](https://nesslabs.com/roam-research-themes-custom-styling-css).

# Preview

Light:

![](/assets/preview-light.png)

When Dark Mode is enabled on your computer:

![](/assets/preview-dark.png)

# Editing this theme

The working [SCSS](https://sass-lang.com/) file is [here](/main.scss).

**The compiled CSS** file is [here](/src/css/main.css). This CSS can be used with [Stylus](https://chrome.google.com/webstore/detail/stylus-beta/apmmpaebfobifelkijhaljbmpcgbjbdo?hl=en).

Command to compile using SASS:

`sass --sourcemap=none --no-cache --watch ./src/css/main.scss:./src/css/main.css`
