Casual-site
============================

[![Greenkeeper badge](https://badges.greenkeeper.io/wh-iterabb-it/casualdistillery.com.svg)](https://greenkeeper.io/)

### Description:

cas•u•al (kăzhˈo͞o-əl)►
adj.	Occurring by chance.
adj.	Occurring at irregular or infrequent intervals; occasional;
adj.	Unpremeditated; offhand;

This repo is for a demo react site to service a single page distillery website. The goals of which is to demonstrate a hobby as well as explore modern react front end technology and artistic styles.

### Directory Structure

```
├── package.json
├── webpack.config.js
├── src
│   ├── app-client.js
│   ├── routes.js
│   ├── server.js
│   ├── components
│   │   ├── AppRoutes.js
│   │   ├── IndexPage.js
│   │   ├── Ingredient.js
│   │   ├── Layout.js
│   │   ├── NotFoundPage.js
│   │   ├── ProductMenu.js
│   │   ├── ProductPage.js
│   │   └── ProductPreview.js
│   ├── data
│   │   ├── about.js
│   │   └── products.js
│   ├── static
│   │   ├── css
│   │   │   └── style.css
│   │   ├── js
│   │   ├── lib
│   │   ├── media
│   │   │   ├── video
│   │   │   └── img
│   │   ├── favicon.ico
│   │   └── index.html
│   └── views
        └──  index.ejs
```

### Installation

`npm install --no-optional`

### Configuration

`NODE_ENV=production node_modules/.bin/webpack -p`

`NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js`

## Available commands

Available commands to run with `npm run`:

 - `start`: build the production package and run the production server (no universal)
 - `start:universal`: build the production package and run the production server with universal rendering
 - `start:dev`: build the dev package and run the server in dev mode (no universal rendering — auto-restarts on changes)
 - `start:dev:universal`: build the dev package and run the server in dev mode with universal rendering (auto-restarts on changes)
 - `build`: build the production package
 - `build:dev`: build the dev package
 - `build:dev:watch`: build the dev package in watch mode (listen for changes and re-build immediately)
