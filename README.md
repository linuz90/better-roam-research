# Better Roam Research

This is one of the most popular **minimal themes** for [Roam Research](https://roamresearch.com), with system-level **Dark Mode** support.

👀 How does it look? **[See the preview below](#preview).**

💬 Got feedback? **[Say hi on Twitter](https://twitter.com/linuz90).**

🔥 Want to contribute? **[Edit the theme](#editing-this-theme).**

# How to use

1. Inside Roam Research, create a page named exactly `roam/css`

2. Create a `[[Better Roam Research]]` bullet point.

3. Nest this code inside it: \```css @import url("https://linuz90.github.io/better-roam-research/main.css");```

(the old link `https://linuz90.github.io/better-roam-research/src/css/main.css` still works but it's deprecated, I won't update it anymore — it reflected an old folder structure in this repo)

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

To create this theme I'm using the **SCSS** syntax. This file is compiled into a regular **CSS** file used for the theme.

To edit the theme, install [Ruby Sass](https://github.com/sass/ruby-sass) (it's not maintained anymore, will use something else in the future).

Then compile the SASS using this command:

`sass --sourcemap=none --no-cache --watch ./main.scss:./main.css`
