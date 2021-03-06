/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const webpack = require('gulp-webpack');
const WebSocket = require('ws');
const serverConf = require('./config/server');
const fs = require('fs');

const SERVER_HOST = serverConf.HOST;
const SERVER_PORT = serverConf.PORT;
const WEBPACK_SOCKET_PATH = serverConf.WEBPACK_SOCKET_PATH;

const FILES_FOR_DEV_SERVER_TO_WATCH = [
  'build/**/*.js',
  'package.json',
  '!assets/',
  '!dist/'
];

const FILES_TO_LINT = [
  'src/**/*.js',
  'build/**/*.js',
  '!src/styles/',
];

const FILES_FOR_WEBPACK_TO_WATCH = [
  'src/',
  'assets/',
  'build/',
  '_posts/',
  'config/',
  'templates/'
];

gulp.task('broadcast-reload', (done) => {
  const ws = new WebSocket(`ws://${SERVER_HOST}:${SERVER_PORT}${WEBPACK_SOCKET_PATH}`);
  ws.on('open', () => {
    ws.send('webpack:reload');
    done();
  });

  ws.on('error', done);
});

gulp.task('webpack-prod', () => {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./build/prod.webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('webpack-dev', () => {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./build/dev.webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', gulp.series('lint', 'webpack-prod', 'generate-posts-index'));

gulp.task('webpack-dev-watch', () => gulp.watch(FILES_FOR_WEBPACK_TO_WATCH, gulp.series('webpack-dev', 'broadcast-reload')));

gulp.task('dev-server', () => {
  return nodemon({
    script: 'build/dev-server.js',
    watch: FILES_FOR_DEV_SERVER_TO_WATCH
  });
});

gulp.task('dev',
  gulp.parallel(
    'lint-watch',
    'webpack-dev',
    'dev-server',
    'webpack-dev-watch'
  )
);
