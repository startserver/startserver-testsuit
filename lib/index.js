/* ================================================================
 * startserver by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var path = require('path');
var fs = require('fs');
var url = require('url');
var microtemplate = require('microtemplate');

var template = path.join(__dirname, '..', 'static', 'test.tpl');

template = fs.readFileSync(template, 'utf8');
template = microtemplate.compile(template);

module.exports = function(req, res) {
  var _url = this.req.url;
  var u = url.parse(_url);
  var basename = path.basename(_url, path.extname(_url));
  var pathname = u.pathname;
  var query = u.query;

  if (query && !!~query.indexOf('__test')) {
    var extname = path.extname(pathname);
    if (extname !== '.html' && extname !== '.htm') return;
    this.body += template({
      name: basename
    });
  }

  if (!!~pathname.indexOf('/test_suite/') && this.statusCode === 404) {
    var file = path.join(__dirname, '..', _url);
    var data = fs.readFileSync(file, 'utf8');
    this.statusCode = 200;
    this.setHeader('Content-Type', this.mime[path.extname(file)]);
    this.body = data;
    this.end();
  }
}
