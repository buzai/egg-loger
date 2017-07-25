'use strict';

const koaLog = require('koa-log');
const LOG = Symbol('Application#loger');

module.exports = {
  get loger() {
    if (!this[LOG]) {
      this[LOG] = koaLog(this.config.loger.formats);
    }
    return this[LOG];
  },
};
