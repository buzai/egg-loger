'use strict';

const koaLog = require('koa-log');

module.exports = options => {
  return koaLog(options.formats);
};
