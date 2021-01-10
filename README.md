# Better Roam Research

This is one of the most popular **minimal themes** for [Roam Research](https://roamresearch.com), with system-level **Dark Mode** support.

👀 How does it look? **[See the preview below](#preview).**

💬 Got feedback? **[Say hi on Twitter](https://twitter.com/linuz90).**

🔥 Want to contribute? **[Edit the theme](#editing-this-theme).**

# How to use

1. Inside Roam Research, create a page named exactly `roam/css`

2. Create a `[[Better Roam Research]]` bullet point.

3. Create a child **code block** inside it (you can write three backticks to create it: ```) and change it to **css**

4. Paste this in the code block `@import url("https://linuz90.github.io/better-roam-research/main.css");`

**NEW:** If you want to force light or dark mode, use `light.css` or `dark.css` respectively instead of `main.css` (which uses system detection instead).

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

To create this theme I'm using the **SCSS** syntax. `.scss` files are compiled into regular **CSS** files used for the theme.

To edit the theme, [install Sass here](https://sass-lang.com/install).

Then compile the files running this command in the project folder:

`sass .:. --no-source-map --watch`

The `main.scss` file imports the main components of the theme, using the dark mode based on the system preference.

The `light.scss` and `dark.scss` files instead only import the respective palettes.

The theme styling itself is in `components/style.scss`, the most important file.
