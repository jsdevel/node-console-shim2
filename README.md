# console-shim2 [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> An unobtrusive console shim that works in node scripts and browsers.

This shim does the following:

1. Check to see if the global object contains `console`.  If it does, use it.  If it does not, shim it.
2. Check to see if the following methods are available on the console object.  If they're not, shim em:
  * `debug`
  * `error`
  * `info`
  * `log`
  * `warn`
  * `dir`
  * `dirxml`
  * `table`
  * `trace`
  * `assert`
  * `count`
  * `markTimeline`
  * `profile`
  * `profileEnd`
  * `time`
  * `timeEnd`
  * `timeStamp`
  * `timeline`
  * `timelineEnd`
  * `group`
  * `groupCollapsed`
  * `groupEnd`
  * `clear`

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/console-shim2.svg
[npm-url]: https://npmjs.org/package/console-shim2
[npm-image]: http://img.shields.io/npm/v/console-shim2.svg

[travis-url]: https://travis-ci.org/jsdevel/node-console-shim2
[travis-image]: http://img.shields.io/travis/jsdevel/node-console-shim2.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-console-shim2
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-console-shim2/master.svg
