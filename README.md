# Better Roam Research

This is one of the most popular **minimal themes** for [Roam Research](https://roamresearch.com), with system-level **Dark Mode** support.

👀 How does it look? **[See the preview below](#preview).**

💬 Got feedback? **[Say hi on Twitter](https://twitter.com/linuz90).**

🔥 Want to contribute? **[Edit the theme](#editing-this-theme).**

If you’re a screenwriter, try my new [Roam Screenwriter](https://github.com/linuz90/roam-screenwriter) theme.

# How to use

1. Inside Roam Research, create a page named exactly `roam/css`

2. Create a `[[Better Roam Research]]` bullet point.

3. Create a child **code block** inside it (you can write three backticks to create it: ```) and change it to **css**

4. Paste this in the code block `@import url("https://linuz90.github.io/better-roam-research/main.css");`

It will look like this:

![](/assets/how-to.png)

The theme will change when I push updates in this repo ⚡️

# Change Accent Color

Just add an extra CSS block and change the `--accent-color` root variable to customize the theme accent color.

![](/assets/accent.gif)

# Preview

Light:

![](/assets/preview-light.png)

When Dark Mode is enabled on your computer:

![](/assets/preview-dark.png)

This theme improves many areas of Roam, like the Kanban:

![](/assets/kanban.png)

Here it is without the theme, for reference:

![](/assets/kanban-original.png)

# Editing this theme

To create this theme I'm using the **SCSS** syntax. This file is compiled into a regular **CSS** file used for the theme.

To edit the theme, [install Sass here](https://sass-lang.com/install).

Then compile the SASS running this command in the project folder:

`sass main.scss:main.css --no-source-map --watch`
