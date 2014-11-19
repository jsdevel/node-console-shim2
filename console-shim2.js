(function(globalObject, noop){
  var console;

  if(typeof window === 'object' && window){
    globalObject = window;
  } else if(typeof global === 'object' && global) {
    globalObject = global;
  }

  if(globalObject.console){
    console = globalObject.console;
  } else {
    console = {};
  }

  if(!console.debug)console.debug = noop;
  if(!console.error)console.error = noop;
  if(!console.info)console.info = noop;
  if(!console.log)console.log = noop;
  if(!console.warn)console.warn = noop;
  if(!console.dir)console.dir = noop;
  if(!console.dirxml)console.dirxml = noop;
  if(!console.table)console.table = noop;
  if(!console.trace)console.trace = noop;
  if(!console.assert)console.assert = noop;
  if(!console.count)console.count = noop;
  if(!console.markTimeline)console.markTimeline = noop;
  if(!console.profile)console.profile = noop;
  if(!console.profileEnd)console.profileEnd = noop;
  if(!console.time)console.time = noop;
  if(!console.timeEnd)console.timeEnd = noop;
  if(!console.timeStamp)console.timeStamp = noop;
  if(!console.timeline)console.timeline = noop;
  if(!console.timelineEnd)console.timelineEnd = noop;
  if(!console.group)console.group = noop;
  if(!console.groupCollapsed)console.groupCollapsed = noop;
  if(!console.groupEnd)console.groupEnd = noop;
  if(!console.clear)console.clear = noop;

  if(typeof module === 'object' && module && module.exports) {
    module.exports = console;
  } else {
    globalObject.console = console;
  }
})(this, function(){});
