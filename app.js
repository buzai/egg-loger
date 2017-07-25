'use strict';
const assert = require('assert');
const MIDDLEWARE_NAME_LOGER = 'loger';

module.exports = app => {
  const index = app.config.appMiddleware.indexOf(MIDDLEWARE_NAME_LOGER);
  assert.equal(index, -1, `Duplication of middleware name found: ${MIDDLEWARE_NAME_LOGER}. Rename your middleware other than "${MIDDLEWARE_NAME_LOGER}" please.`);
  app.config.coreMiddleware.unshift(MIDDLEWARE_NAME_LOGER);
};
