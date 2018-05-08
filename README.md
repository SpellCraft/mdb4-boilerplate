# MDB + Webpack Starter Kit

[![Build Status](https://travis-ci.org/SpellCraft/mdb4-boilerplate.svg?branch=master)](https://travis-ci.org/SpellCraft/mdb4-boilerplate)

A Material Design for Bootstrap boilerplate for Webpack 4.

#### Getting Started

This project contains everything you need to get setup with the latest version of MDB. Simply follow the instructions under and you're ready to go in seconds.

1.  Clone the repository

```bash
# Navigate to the folder you want to download the project into and run
git clone --recursive https://github.com/SpellCraft/mdb4-boilerplate.git
```

2.  **Install dependencies**

```bash
# Installs all development and production dependencies
npm install
```

3.  **Pro Users**
    **Step 1:** Overwrite the contents of the **mdb** folder in **/src/vendors/** with the contents of your Pro package.
    **Step 2:** Open **webpack.config.js** and uncomment the following:
    ```javascript
    // const CopyWebpackPlugin = require('copy-webpack-plugin');
    ```
    and
    ```javascript
    // new CopyWebpackPlugin([{ from: 'src/vendors/mdb/mdb-addons', to: 'mdb-addons' }]),
    ```

4)  **Start developing**

```bash
# Start the development server
# http://localhost:8080 - loads automatically
npm run dev

# Build a production version of the project
npm run build
```

&nbsp;

#### Project workflow

ES6 ready environment
**Tools**

* Babel
* Webpack 4
* Eslint
* Airbnb style guide

**Libraries**

* jQuery
* Popper.js
* Bootstrap 4
* FontAwesome 4.7
* FontAwesome 5
* Material Design for Bootstrap

---

## Special Thanks

The developers of [MDBootstrap.com](https://mdbootstrap.com)
