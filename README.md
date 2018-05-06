# MDB + Webpack Starter Kit

A Material Design for Bootstrap 4 boilerplate for Webpack 4.

#### Getting Started

---

This project contains everything you need to get setup with the latest version of MDB. Simply follow the instructions under and you're ready to go in seconds.

1.  Clone the repository

```bash
# Navigate to the folder you want to download the project into and run
git clone https://github.com/SpellCraft/mdb4-boilerplate.git
```

2.  **Install dependencies**

```bash
# Installs all development and production dependencies
npm install
```

3.  **Pro Users** (Free users; Skip this step)
    **Step 1:** Navigate to the **/src/vendors/mdb** folder and remove it. Replace it with the _PRO_ package you download from the website or gitlab repository, then rename it to **_mdb_**.
    **Step 2:** Open **webpack.config.js** and remove the commented out line near the top of the file and in the _Plugins_ section.

4)  **Start developing**

```bash
# Start the development server
# http://localhost:8080 - loads automatically
npm run dev
OR
# Build a production version of the project
npm run build
```

---

#### Technologies used

Modules used within the project to give it that complete boilerplate feel.

For development and completeness sake

* Babel
* Webpack 4
* Eslint + Airbnb preset

To make Material Design for Bootstrap work properly

* jQuery 3.3.1
* Popper.JS 1.14
* Bootstrap 4
* Node-Waves v0.7.6
* Fontawesome 4.7
* Material Design for Bootstrap 4

Extras

* Fontawesome 5
