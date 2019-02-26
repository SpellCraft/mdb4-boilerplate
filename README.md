# A Material Design Bootstrap & Webpack boilerplate

[![Build Status](https://travis-ci.org/SpellCraft/mdb4-boilerplate.svg?branch=master)](https://travis-ci.org/SpellCraft/mdb4-boilerplate)

<h2 align="center"><b>Special Thanks</b></h2>
<p align="center" style="text-align:center;">
    <a href="https://mdbootstrap.com" target="_blank">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" alt="Developers of MDB for jQuery">
    </a>
</p>
<p align="center">Huge thanks to the developers of MDBootstrap for creating such an in-depth and awesome UI-Kit.</p>
<p align="center">
    Using the <b>Free</b> version of MDB?<br>
    Consider upgrading to the <b>Pro</b> version for even more features!<br>
    <a href="https://mdbootstrap.com/material-design-for-bootstrap/?utm_ref_id=29943" target="_blank">MDBootstrap Upgrade</a>
</p>
<br>
<br>
<h2 align="center"><b>New version of MDB-Boilerplate coming in March!</b></h2>
<br>
<br>
<h1 align="center"><b>Quickstart Guide</b></h1>

This boilerplate comes complete with everything you need to get a quick start on any project. This boilerplate supports both the **Free** and **Pro** version of MDB for jQuery.
To begin, simply navigate to where you want to clone this boilerplate then run the following commands:
```bash
# Clone the project
git clone --recursive https://github.com/SpellCraft/mdb4-boilerplate.git
# Then install dependencies
npm install
```


#### **Note:** ***MDB PRO JQuery users***
When you're cloning the project, the **free** version of MDB is automatically checked out and placed inside **/src/vedors/mdb**. To use the **Pro** version of MDB for jQuery, simply replace the contents of this folder with the **PRO** package to upgrade from the free version.
<br>
<br>
<br>
<h2 align="center"><b>Development Mode</b></h2>

To start developing your new web-app right away, run this command:
```bash
npm start
```
This starts the Webpack development server with Hot Module Replacement enabled and open the project in a new broser window/tab.
<br>
<br>
<br>
<br>
<h2 align="center"><b>Production Mode</b></h2>

This boilerplate is also optimized for development use. Unfortunately, I can't cover all use-cases, but the most common tasks will be done automatically:

* Converts SCSS/SASS files to CSS
* Removal of comments (Special comments preserved)
* Optimizing filenames & assets
* Minimizing CSS and JS output files
* Large js/css files split into chunks for faster loading
```bash
# Build folder structure
/dist/
  |-/assets/ # All other files
  |-/css/ # CSS files
  |-/js/ # JS files
  index.html
```
In addition to this, all files will be placed in a **/dist** folder in the project root. This folder is purged every time the project builds.
<br><br>

To build your project, use this command:
```bash
npm run build
```
