# egg-loger

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-loger.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-loger
[travis-image]: https://img.shields.io/travis/eggjs/egg-loger.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-loger
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-loger.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-loger?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-loger.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-loger
[snyk-image]: https://snyk.io/test/npm/egg-loger/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-loger
[download-image]: https://img.shields.io/npm/dm/egg-loger.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-loger

<!--
Description here.
-->

## Install

```bash
$ npm i egg-loger --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.loger = {
  enable: true,
  package: 'egg-loger',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.loger = {
    enable: true,
    formats: 'short'
};

if this enable=true , so all the request will loged

if this enable=false , you need add app.loger in where router you need to log;
eg: app.get('/', app.loger, 'home.index');

```
about formats , it is koa-log arguments, default is 'dev'. if you need more formats, Please see [koa-log](https://github.com/vicanso/koa-log)

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
