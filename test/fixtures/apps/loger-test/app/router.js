'use strict';

module.exports = app => {
  app.get('/', app.loger, function* () {
    this.body = 'hi, ' + app.plugins.loger.name;
  });
};
