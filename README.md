[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Travis CI](https://travis-ci.org/nak-sued-webmasters/theme.svg)](https://travis-ci.org/nak-sued-webmasters/theme)

# Bootstrap Theme for Districts of NAC South Germany

This Bootstrap based theme is created by using Themestrap. 
This theme will be used for the districts of the New Apostolic Church at South Germany.

Below you could find the copied description of Themestrap how to setup project.

----

# Themestrap
https://github.com/divshot/themestrap
**Themestrap** is a simple starter kit for constructing Twitter Bootstrap 3+ themes. It provides the skeleton
for a simple, maintainable theme that always uses code directly from Bootstrap with as little replacement as
possible.

## Themestrap's Philosophy

1. A theme should be built *on top* of the framework, with as little intrusive change as possible.
2. As the framework evolves, a theme should be easily updated to the latest version.

To this end, Themestrap provides you with two simple files to modify: **variables.less**
and **theme.less** (both in the `less` directory). You can tweak any and all of the Bootstrap variables 
in **variables.less** and support any additional code or classes you'd like in **theme.less**. The compiled
theme CSS includes the Bootstrap library and will automatically pick up any overrides from variables.

## Creating a Theme with Themestrap

To create a theme, first start by cloning the Themestrap repository into a directory named for
your theme. We recommend a `bootstrap-theme-THEME_NAME` naming scheme:

    git clone https://github.com/divshot/themestrap.git bootstrap-theme-THEME_NAME
    
Next, you should open `bower.json` and change the package name from `bootstrap-theme-themestrap`
to match what you want your theme to be named. Now you're ready to install dependencies using
[Grunt](http://gruntjs.com) and [Bower](https://github.com/bower/bower) (you must have these
installed).

    npm install
    bower install
    
Now you're ready to go! Simply edit `less/variables.less` and `less/theme.less` to your liking.
When you're ready, just run `grunt` and it will compile and minify the distribution for you.
You can also run `grunt watch` to automatically compile as you work.

## Testing Out Your Theme

We've provided a "Bootstrap Kitchen Sink" HTML file at `examples/kitchen-sink.html` that contains
all of the various components in all of their variations. It may not be 100% exhaustive but it
should give you a good idea of what your theme will look like at a glance.

For the specific layout of websites for districts of NAC Southgermany we assambled a prototyp at `examples/nak-bezirk-home.html`.

You can start a development server at `http://localhost:8000` by running `grunt serve`. Your theme will automatically compile while the server is running.

## Deeper Customization

In cases where you need to do a more in-depth overhaul of a portion of Bootstrap's LESS, you may do so by
simply copying over a file from Bootstrap's `less` directory into your theme's `less` directory and then
modifying it as necessary. Example:

    [cp|copy] bower_components/bootstrap/less/alerts.less less/alerts.less

Because it takes path priority over the Bower-installed Bootstrap LESS, it will automatically override the 
Bootstrap default. In fact, this is how `variables.less` works already...delete it and the default Bootstrap
variables will be back in play.

## Credits
- [Bootstrap](http://getbootstrap.com): Great responsive HTML5 Toolbox.
- [Themestrap](https://github.com/divshot/themestrap): Many thanks for providing this usefule basis to develop indvidual themes.
- [Yamm3 - Yet another megamenu for Bootstrap 3](https://github.com/geedmo/yamm3/): We love this mega menu.
- [Paypal Bootstrap Accessibility Plugin](https://github.com/paypal/bootstrap-accessibility-plugin): Thanks Paypal-team to support minorities, we will too.

## Copyright and license

Copyright 2015 [the Apache 2.0 license](LICENSE).
