[![Build Status](https://travis-ci.org/SpellCraft/mdb-boilerplate.svg?branch=master)](https://travis-ci.org/SpellCraft/mdb-boilerplate) [![star this repo](https://githubbadges.com/star.svg?user=SpellCraft&repo=mdb-boilerplate&style=flat)](https://github.com/SpellCraft/mdb-boilerplate) [![fork this repo](https://githubbadges.com/fork.svg?user=SpellCraft&repo=mdb-boilerplate&style=flat)](https://github.com/SpellCraft/mdb-boilerplate/fork) [![Badge](https://img.shields.io/github/license/SpellCraft/mdb-boilerplate.svg)](https://img.shields.io/github/license/SpellCraft/mdb-boilerplate.svg)

# Overview

This boilerplate is a set of utilities and plugins for NodeJs to tune and streamline your MDBootstrap experience for greater productivity. This boilerplate follows the Airbnb-style guide for JavaScript found [here](https://github.com/airbnb/javascript).
<br>
<br>

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

# Installation

First time installation process for both Free and Pro users:

```bash
npm install
```

- If you're only using the Free version, you're good to go!

<br>

- For those who use the **Pro** version, you need to send an email to contact@mdbootstrap.com and request access to the GitLab repo if you haven't done so already. Once you have access, [login and go to your settings](https://git.mdbootstrap.com/profile/), then follow the steps in the image below.
  <br>

  ![img](https://i.imgur.com/vvZwPgk.png)
  <br>

  Once done, the page will update and at the top, a new field will appear called **Your New Personal Access Token**.
  ![img2](https://i.imgur.com/AI5JJjp.png)

  Remember this **access token** as you'll never be able to see it again once/if you leave this page.
  With this **access token**, run the following commands inside the project, remember to replace **_ACCESS_TOKEN_** with your actual token:

  ```bash
  npm uninstall mdbootstrap
  npm install git+https://oauth2:ACCESS_TOKEN@git.mdbootstrap.com/mdb/jquery/jq-pro.git#4.7.7 --save
  ```

  **_Notice_**: _You'll get warned that there are 8 vulnerabilities through NPM, you do not need to worry about these._
  Finally, you'll need to update the paths in **/src/app.js** and **/src/scss/style.scss** from **_~mdbootstrap_** to **_~mdbootstrap-pro_**. Remember to uncomment and/or add any of the pro addons that you need.

<br>

##### Start development server

```bash
npm start
```

Runs the project with webpack-dev-server, opens in a new tab on your default browser. Live-reload enabled.

##### Building your project

```bash
npm run build
```

Builds the project to **/dist/**

# Updating

When you want to update the project, it's dependencies and packages, I recommend installing npm-check-updates

```bash
npm i npm-check-updates -g
```

Once installed, run the following commands inside the repository:

```bash
ncu -u
```

If packages are updated, run:

```bash
npm install
```

Otherwise you are good to go. To update the version of MDBootstrap you use, just uninstall **mdbootstrap** through npm and re-install the package. NCU most likely will not update these packages because we currently force version 4.7.7 instead of the latest **HEAD** version.
