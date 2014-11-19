'use strict';

describe('-console-shim2', function(){
  var sut = require('..');

  [
    'debug', 'error', 'info', 'log', 'warn', 'dir', 'dirxml', 'table', 'trace', 'assert', 'count', 'markTimeline', 'profile', 'profileEnd', 'time', 'timeEnd', 'timeStamp', 'timeline', 'timelineEnd', 'group', 'groupCollapsed', 'groupEnd', 'clear'
  ].forEach(function(method){
    it('should have a method named: ' + method, function(){
      sut[method].should.be.type('function');
    });
  });
});
