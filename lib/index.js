"use strict";
var config, logger, registerCommand, registration, _minifyJS;

config = require('./config');

logger = null;

registration = function(mimosaConfig, register) {
  var e;
  if (mimosaConfig.isMinify) {
    logger = mimosaConfig.log;
    e = mimosaConfig.extensions;
    register(['add', 'update', 'buildFile'], 'afterCompile', _minifyJS, e.javascript);
    return register(['add', 'update', 'buildExtension'], 'beforeWrite', _minifyJS, e.template);
  }
};

_minifyJS = function(mimosaConfig, options, next) {
  var file, _i, _len, _ref;
  _ref = options.files;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    file = _ref[_i];
    file.outputFileText = minify(file.outputFileText);
  }
  return next();
};

registerCommand = function(program, retrieveConfig) {
  return program.command('foo').description("Do something fooey").action(function() {
    return retrieveConfig(false, config(function() {}));
  });
};

module.exports = {
  registration: registration,
  registerCommand: registerCommand,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL25jb2hlbi9zb2Z0d2FyZS9kcnlpdC1wcm9qZWN0cy9taW1vc2EtY291Y2hkYi9saWIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIvVXNlcnMvbmNvaGVuL3NvZnR3YXJlL2RyeWl0LXByb2plY3RzL21pbW9zYS1jb3VjaGRiL3NyYy9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsWUFBQSxDQUFBO0FBQUEsSUFBQSx3REFBQTs7QUFBQSxNQUtBLEdBQVMsT0FBQSxDQUFRLFVBQVIsQ0FMVCxDQUFBOztBQUFBLE1BTUEsR0FBUyxJQU5ULENBQUE7O0FBQUEsWUE0Q0EsR0FBZSxTQUFDLFlBQUQsRUFBZSxRQUFmLEdBQUE7QUFFYixNQUFBLENBQUE7QUFBQSxFQUFBLElBQUcsWUFBWSxDQUFDLFFBQWhCO0FBR0UsSUFBQSxNQUFBLEdBQVMsWUFBWSxDQUFDLEdBQXRCLENBQUE7QUFBQSxJQUVBLENBQUEsR0FBSSxZQUFZLENBQUMsVUFGakIsQ0FBQTtBQUFBLElBR0EsUUFBQSxDQUFTLENBQUMsS0FBRCxFQUFPLFFBQVAsRUFBZ0IsV0FBaEIsQ0FBVCxFQUE0QyxjQUE1QyxFQUE0RCxTQUE1RCxFQUF1RSxDQUFDLENBQUMsVUFBekUsQ0FIQSxDQUFBO1dBSUEsUUFBQSxDQUFTLENBQUMsS0FBRCxFQUFPLFFBQVAsRUFBZ0IsZ0JBQWhCLENBQVQsRUFBNEMsYUFBNUMsRUFBNEQsU0FBNUQsRUFBdUUsQ0FBQyxDQUFDLFFBQXpFLEVBUEY7R0FGYTtBQUFBLENBNUNmLENBQUE7O0FBQUEsU0E2RUEsR0FBWSxTQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLElBQXhCLEdBQUE7QUFDVixNQUFBLG9CQUFBO0FBQUE7QUFBQSxPQUFBLDJDQUFBO29CQUFBO0FBQ0UsSUFBQSxJQUFJLENBQUMsY0FBTCxHQUFzQixNQUFBLENBQU8sSUFBSSxDQUFDLGNBQVosQ0FBdEIsQ0FERjtBQUFBLEdBQUE7U0FFQSxJQUFBLENBQUEsRUFIVTtBQUFBLENBN0VaLENBQUE7O0FBQUEsZUErRkEsR0FBa0IsU0FBQyxPQUFELEVBQVUsY0FBVixHQUFBO1NBQ2hCLE9BQ0UsQ0FBQyxPQURILENBQ1csS0FEWCxDQUVFLENBQUMsV0FGSCxDQUVlLG9CQUZmLENBR0UsQ0FBQyxNQUhILENBR1UsU0FBQSxHQUFBO1dBQ04sY0FBQSxDQUFlLEtBQWYsRUFBc0IsTUFBQSxDQUFPLFNBQUEsR0FBQSxDQUFQLENBQXRCLEVBRE07RUFBQSxDQUhWLEVBRGdCO0FBQUEsQ0EvRmxCLENBQUE7O0FBQUEsTUF1SE0sQ0FBQyxPQUFQLEdBQ0U7QUFBQSxFQUFBLFlBQUEsRUFBaUIsWUFBakI7QUFBQSxFQUNBLGVBQUEsRUFBaUIsZUFEakI7QUFBQSxFQUVBLFFBQUEsRUFBaUIsTUFBTSxDQUFDLFFBRnhCO0FBQUEsRUFHQSxXQUFBLEVBQWlCLE1BQU0sQ0FBQyxXQUh4QjtBQUFBLEVBSUEsUUFBQSxFQUFpQixNQUFNLENBQUMsUUFKeEI7Q0F4SEYsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIiMjIyMgTW9kdWxlIEludGVyZmFjZVxuXG4jIFRoZSBjb2RlIGNvbnRhaW5lZCBoZXJlaW4gaXMgYWxsIGV4YW1wbGUgY29kZSBhbmQgc2hvdWxkbid0IGJlIHVzZWQgdmVyYmF0aW0uXG4jIFRoZSBleGFtcGxlIGluIHRoaXMgY2FzZSBpcyBtb2RpZmllZCBmcm9tIHRoZSBtaW1vc2EtbWluaWZ5IG1vZHVsZS5cblxuXCJ1c2Ugc3RyaWN0XCJcblxuIyBQdWxsaW5nIGluIHRoZSA8YSBocmVmPVwiLi9jb25maWcuaHRtbFwiPmNvbmZpZ3VyYXRpb24gbWFuYWdlbWVudDwvYT4gY29kZSB0aGF0IGlzIGFcbiMgcGFydCBvZiB0aGUgbW9kdWxlLlxuXG5jb25maWcgPSByZXF1aXJlICcuL2NvbmZpZydcbmxvZ2dlciA9IG51bGxcblxuIyBUaGUgcmVnaXN0cmF0aW9uIGZ1bmN0aW9uIGlzIHRoZSBrZXkgcGFydCBvZiB5b3VyIG1vZHVsZS4gIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkXG4jIGR1cmluZyBNaW1vc2EncyBzdGFydHVwIGFuZCBpdCBhbGxvd3MgeW91ciBtb2R1bGUgdG8gYmluZCB0byBvbmUgb3IgbWFueSBzdGVwc1xuIyBpbiBhIE1pbW9zYSdzIHdvcmtmbG93LlxuI1xuIyBUaGUgYXJndW1lbnRzIHBhc3NlZCBpbiBhcmU6XG4jXG4jIDEuIG1pbW9zYUNvbmZpZzogVGhlIGZ1bGwgbWltb3NhLWNvbmZpZyBpbmNsdWRpbmcgYWRkZWQgZmxhZ3MgdG8gaW5kaWNhdGUgd2hhdFxuIyBzb3J0IG9mIE1pbW9zYSBjb21tYW5kIGlzIGJlaW5nIHJ1biwgYW5kIGFuIGFkZGVkIGxpc3Qgb2YgZXh0ZW5zaW9ucyBiZWluZyB1c2VkIGJ5XG4jIHRoZSBhcHBsaWNhdGlvbi4gWW91IG1heSBkZWNpZGUgYmFzZWQgb24gdGhlIGZsYWdzIGluIHRoZSBjb25maWcgdG8gbm90IHJlZ2lzdGVyXG4jIGFueXRoaW5nLCB3aGljaCBpcyBmaW5lLiBJbiB0aGUgY2FzZSBvZiB0aGUgbWluaWZpY2F0aW9uIGV4YW1wbGUsIGlmIHRoZSBpc01pbmlmeVxuIyBmbGFnIGlzbid0IHR1cm5lZCBvbiB0aGVuIHRoZSBtaW5pZmljYXRpb24gbW9kdWxlIGNvZGUgaXNuJ3QgcmVnaXN0ZXJlZC5cbiMgMi4gQSByZWdpc3RlciBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyB1c2VkIHRvIGluZm9ybSB3aGF0IG1vZHVsZSBmdW5jdGlvbiB0byBjYWxsXG4jIGFuZCB1bmRlciB3aGF0IGNpcmN1bXN0YW5jZXMgdG8gY2FsbCBpdC5cbiNcbiMgVGhlIHJlZ2lzdGVyIGNhbGxiYWNrIGZ1bmN0aW9uIHRha2VzIDQgcGFyYW1ldGVyczpcbiNcbiMgMS4gd29ya2Zsb3cgdHlwZXMsIGFuIGFycmF5IG9mIHN0cmluZ3MuIFBpY2sgb25lLXRvLW1hbnkgdHlwZXMgZGVwZW5kaW5nIG9uIHRoZVxuIyBzb3J0IG9mIHRhc2sgeW91ciBtb2R1bGUgYWNjb21wbGlzaGVzLiBQb3NzaWJsZSB2YWx1ZXM6IHByZUJ1aWxkLCBidWlsZEZpbGUsXG4jIGJ1aWxkRXh0ZW5zaW9uLCBwb3N0QnVpbGQsIGFkZCwgdXBkYXRlLCByZW1vdmUsIHByZUNsZWFuLCBjbGVhbkZpbGUgYW5kIHBvc3RDbGVhbi5cbiMgMi4gd29ya2Zsb3cgc3RlcCwgYSBzdHJpbmcuIEEgd29ya2Zsb3cgc3RlcCBmb3IgdGhlIHNlbGVjdGVkIHdvcmtmbG93IHR5cGVzLiAgRm9yXG4jIGV4YW1wbGUsIGZvciB0aGUgdHlwZSAndXBkYXRlJywgeW91IG1pZ2h0IGNob29zZSB0byBoYXZlIHlvdXIgbW9kdWxlIGNvZGUgZXhlY3V0ZWRcbiMgJ2FmdGVyQ29tcGlsZScsIHdoaWNoIG1ha2VzIHNlbnNlIGZvciB0aGlzIGV4YW1wbGUuICBUbyBoZWxwIHlvdSBmaWd1cmUgb3V0IHdoaWNoXG4jIHN0ZXAgeW91IG1pZ2h0IHdhbnQgdG8gdXNlLCB2aXNpdCB0aGUgPGEgaHJlZj1cImh0dHA6Ly9taW1vc2EuaW8vbW9kdWxlcy5odG1sXCI+bW9kdWxlczwvYT5cbiMgcGFnZSBvbiB0aGUgd2Vic2l0ZS5cbiMgMy4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLiAgVGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgZHVyaW5nIGEgTWltb3NhIHdvcmtmbG93LlxuIyA0LiBBbiBvcHRpb25hbCBhcnJheSBvZiBleHRlbnNpb25zIHVwb24gd2hpY2ggdG8gZXhlY3V0ZSB0aGUgY2FsbGJhY2suIElmIHRoZSBmaWxlIG9yXG4jIGV4dGVuc2lvbiBiZWluZyBwcm9jZXNzZWQgZG9lc24ndCBtYXRjaCBvbmUgb2YgdGhlc2UgZXh0ZW5zaW9ucywgdGhlIGNhbGxiYWNrIHdpbGxcbiMgbm90IGJlIGV4ZWN1dGVkLiBUaGUgZXh0ZW5zaW9ucyByZWZlciB0byB0aGUgb3JpZ2luYWwgZXh0ZW5zaW9uIG9mIHRoZSBmaWxlIGJlaW5nXG4jIHByb2Nlc3NlZCwgc28gJ2NvZmZlZScgZm9yIGluc3RhbmNlLiBUaGUgbWltb3NhQ29uZmlnIG9iamVjdCBoYXMgYW4gZXh0ZW5zaW9ucyBvYmplY3RcbiMgeW91IGNhbiB1c2UgdG8gY292ZXIgYWxsIG9mIHRoZSBkZXNpcmVkIGV4dGVuc2lvbnMuICBUaGUgZXh0ZW5zaW9ucyBvYmplY3QgaGFzXG4jIDQgcHJvcGVydGllczogamF2YXNjcmlwdCwgY3NzLCB0ZW1wbGF0ZSwgYW5kIGNvcHkuIEluIHRoZSBjYXNlIG9mIHRoaXMgZXhhbXBsZSxcbiMgamF2YXNjcmlwdCBtaW5pZmljYXRpb24sIHlvdSB3b3VsZCB3YW50IHRvIHVzZSB0aGUgZXh0ZW5zaW9ucyBhdmFpbGFibGUgaW5cbiMgbWltb3NhQ29uZmlnLmV4dGVuc2lvbnMuamF2YXNjcmlwdCBzbyB0aGF0IHlvdXIgbW9kdWxlIHdvdWxkIGFwcGx5IHRvIGFsbCBwb3NzaWJsZVxuIyBKYXZhU2NyaXB0IHZhcmlhdGlvbnMuIElmIG5vIGV4dGVuc2lvbnMgYXJlIHByb3ZpZGVkLCBNaW1vc2Egd2lsbCBzZW5kIGFsbCBmaWxlc1xuIyB0aHJvdWdoIHRoZSBtb2R1bGUuXG5cbnJlZ2lzdHJhdGlvbiA9IChtaW1vc2FDb25maWcsIHJlZ2lzdGVyKSAtPlxuXG4gIGlmIG1pbW9zYUNvbmZpZy5pc01pbmlmeVxuXG4gICAgIyBQdWxsaW5nIHRoZSBsb2dnZXIgb3V0IGZvciBmdXR1cmUgdXNlXG4gICAgbG9nZ2VyID0gbWltb3NhQ29uZmlnLmxvZ1xuXG4gICAgZSA9IG1pbW9zYUNvbmZpZy5leHRlbnNpb25zXG4gICAgcmVnaXN0ZXIgWydhZGQnLCd1cGRhdGUnLCdidWlsZEZpbGUnXSwgICAgICAnYWZ0ZXJDb21waWxlJywgX21pbmlmeUpTLCBlLmphdmFzY3JpcHRcbiAgICByZWdpc3RlciBbJ2FkZCcsJ3VwZGF0ZScsJ2J1aWxkRXh0ZW5zaW9uJ10sICdiZWZvcmVXcml0ZScsICBfbWluaWZ5SlMsIGUudGVtcGxhdGVcblxuIyBUaGUgX21pbmlmeUpTIGZ1bmN0aW9uIGhlcmUgcmVwcmVzZW50cyB5b3VyIHdvcmtmbG93IGNhbGxiYWNrIGZ1bmN0aW9uLiAgVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuIyBkdXJpbmcgdGhlIHdvcmtmbG93IHR5cGUgYW5kIHN0ZXAgeW91IHNlbGVjdGVkLCBpZiB0aGUgZmlsZS9leHRlbnNpb24gYmVpbmcgcHJvY2Vzc2VkIG1hdGNoZXNcbiMgdGhlIHJlZ2lzdGVyZWQgZXh0ZW5zaW9ucy4gIFNvIGdpdmVuIHRoZSBleGFtcGxlIHJlZ2lzdHJhdGlvbiBhYm92ZSwgdGhlIF9taW5pZnlKUyBmdW5jdGlvblxuIyB3b3VsZCBiZSBjYWxsZWQgYWZ0ZXIgYSBKYXZhU2NyaXB0IGZpbGUgaXMgdXBkYXRlZCwgZHVyaW5nIHRoZSAnYWZ0ZXJDb21waWxlJyBzdGVwLiAgVGhlICdjb21waWxlJyBzdGVwIGlzXG4jIHdoZXJlLCBmb3IgaW5zdGFuY2UsIENvZmZlZVNjcmlwdCBpcyBjb21waWxlZCB0byBKYXZhU2NyaXB0LCBhbmQgeW91IHdvdWxkbid0IHdhbnQgdG8gbWluaWZ5IENvZmZlZVNjcmlwdCxcbiMgc28gJ2FmdGVyQ29tcGlsZScgaXMgYXBwcm9wcmlhdGUuXG4jXG4jIFlvdXIgd29ya2Zsb3cgY2FsbGJhY2sgaXMgaGFuZGVkIDMgYXJndW1lbnRzOlxuI1xuIyAxLiBjb25maWc6IGZ1bGwgbWltb3NhLWNvbmZpZyBlbnJpY2hlZCB3aXRoIGFsbCBzb3J0cyBvZiB1c2VmdWwgZGF0YSBiZXlvbmQgdGhlIGRlZmF1bHQgbWltb3NhLWNvbmZpZy5cbiMgMi4gb3B0aW9uczogY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFzc2V0KHMpIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuICBJbnNpZGUgdGhlIG9wdGlvbnNcbiMgb2JqZWN0IGlzIGEgJ2ZpbGVzJyBhcnJheSB0aGF0IGlzIGNyZWF0ZWQgZWFybHkgaW4gdGhlIHdvcmtmbG93LiBUaGUgYXJyYXkgY29udGFpbnMgYSBsaXN0IG9mIGZpbGVcbiMgb2JqZWN0cyB0aGF0IGFyZSBiZWluZyBwcm9jZXNzZWQuIEF0IGRpZmZlcmVudCBzdGVwcyBvZiB0aGUgTWltb3NhIHdvcmtmbG93LCB0aG9zZSBmaWxlIG9iamVjdHMgYXJlXG4jIHBvcHVsYXRlZCB3aXRoIHRoZSBpbnB1dEZpbGVOYW1lLCB0aGUgb3V0cHV0RmlsZU5hbWUsIHRoZSBpbnB1dEZpbGVUZXh0LCB0aGUgb3V0cHV0RmlsZVRleHQgYW5kIHNvbWVcbiMgZmxhZ3MgdG8gaW5kaWNhdGUgaWYgdGhlIGFzc2V0IGlzIGEgdmVuZG9yIGFzc2V0LCBldGMuIFRoZSBvdXRwdXRGaWxlVGV4dCBpcyBwb3B1bGF0ZWQgZHVyaW5nIHRoZVxuIyAnY29tcGlsZScgc3RlcCwgc28gaW4gdGhlIGNhc2Ugb2YgdGhpcyBleGFtcGxlIGNvZGUsIHdlJ2Qgd2FudCB0byBydW4gbWluaWZpY2F0aW9uIG92ZXIgZWFjaCBmaWxlIGluIHRoZVxuIyBmaWxlcyBhcnJheSwgdHJhbnNmb3JtaW5nIHRoZSBvdXRwdXRGaWxlVGV4dCB0byBtaW5pZmllZCBvdXRwdXRGaWxlVGV4dC5cbiMgMy4gbmV4dDogYSB3b3JrZmxvdyBjYWxsYmFjay4gVGhpcyBjYWxsYmFjayBtdXN0IGJlIGNhbGxlZCB3aGVuIHlvdXIgbW9kdWxlIGhhcyBmaW5pc2hlZCBwcm9jZXNzaW5nLiAgSXRcbiMgdGVsbHMgTWltb3NhIHRvIGV4ZWN1dGUgdGhlIG5leHQgc3RlcCBpbiB0aGUgd29ya2Zsb3cuICBJZiBmb3Igc29tZSByZWFzb24geW91ciBtb2R1bGUgZGVjaWRlcyB0aGF0XG4jIHByb2Nlc3NpbmcgZm9yIHRoZSBjdXJyZW50IGFzc2V0L2J1aWxkIHN0ZXAgbmVlZHMgdG8gc3RvcCwgdGhlIGNhbGxiYWNrIGNhbiBiZSBjYWxsZWQgcGFzc2luZyBmYWxzZS5cbiMgRXg6IG5leHQoZmFsc2UpLiBJbiBtb3N0IGNhc2VzIHlvdSBkbyBub3Qgd2FudCB0byBkbyB0aGlzLlxuXG5fbWluaWZ5SlMgPSAobWltb3NhQ29uZmlnLCBvcHRpb25zLCBuZXh0KSAtPlxuICBmb3IgZmlsZSBpbiBvcHRpb25zLmZpbGVzXG4gICAgZmlsZS5vdXRwdXRGaWxlVGV4dCA9IG1pbmlmeShmaWxlLm91dHB1dEZpbGVUZXh0KVxuICBuZXh0KClcblxuIyBUaGUgcmVnaXN0ZXJDb21tYW5kIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVnaXN0ZXIgbmV3IE1pbW9zYSBjb21tYW5kcy4gSWYgdGhpcyBmdW5jdGlvbiBpcyBpbXBsZW1lbnRlZFxuIyBNaW1vc2Egd2lsbCBjYWxsIGl0IGR1cmluZyBzdGFydHVwIHNvIHRoZSBtb2R1bGUgaGFzIGFuIG9wcG9ydHVuaXR5IHRvIHJlc3BvbmQgdG8gdGhlIGNvbW1hbmQgbGluZS5cbiNcbiMgcmVnaXN0ZXJDb21tYW5kIGlzIHBhc3NlZCAyIGFyZ3VtZW50czpcbiNcbiMgMS4gcHJvZ3JhbSwgYSBjb21tYW5kZXIuanMgcHJvZ3JhbSBvYmplY3QsIHJlYWQgbW9yZSBoZXJlOiBodHRwOi8vdmlzaW9ubWVkaWEuZ2l0aHViLmNvbS9jb21tYW5kZXIuanMvXG4jIFVzZSB0aGlzIG9iamVjdCB0byBjcmVhdGUgYSBjb21tYW5kLCB0aGUgZmxhZ3MgZm9yIGl0LCBhbnkgaW5wdXQgdmFsdWVzLCB0aGUgaGVscCB0ZXh0IGFuZCB0aGUgY2FsbGJhY2tcbiMgZm9yIHRoZSBjb21tYW5kLlxuIyAyLiByZXRyaWV2ZUNvbmZpZywgYSBmdW5jdGlvbiwgdXNlIHJldHJpZXZlQ29uZmlnIHRvIGhhdmUgTWltb3NhIGV4ZWN1dGUgYSBidWlsZCBhbmQgZ2V0IHRoZSBtaW1vc2EtY29uZmlnXG4jIGJlZm9yZSBhIG1vZHVsZSdzIGNvZGUgaXMgZXhlY3V0ZWQuICByZXRyaWV2ZUNvbmZpZyB0YWtlcyB0d28gcGFyYW1ldGVycywgdGhlIGZpcnN0IGlzIGEgZmxhZyB0byBpbmRpY2F0ZVxuIyBpZiBhIGJ1aWxkIGlzIG5lZWRlZCBiZWZvcmUgbW9kdWxlIGNvZGUgaXMgZXhlY3V0ZWQuICBUaGUgc2Vjb25kIGlzIGEgY2FsbGJhY2sgdGhhdCBzaG91bGQgY29udGFpbiB0aGVcbiMgbW9kdWxlJ3MgZnVuY3Rpb25hbGl0eS4gIFRoYXQgY2FsbGJhY2sgaXMgcGFzc2VkIHRoZSBtaW1vc2EtY29uZmlnLlxuXG5yZWdpc3RlckNvbW1hbmQgPSAocHJvZ3JhbSwgcmV0cmlldmVDb25maWcpIC0+XG4gIHByb2dyYW1cbiAgICAuY29tbWFuZCgnZm9vJylcbiAgICAuZGVzY3JpcHRpb24oXCJEbyBzb21ldGhpbmcgZm9vZXlcIilcbiAgICAuYWN0aW9uIC0+XG4gICAgICByZXRyaWV2ZUNvbmZpZyBmYWxzZSwgY29uZmlnIC0+XG5cbiMgVGhlIG1vZHVsZS5leHBvcnRzIGV4cG9zZXMgbW9kdWxlIGNvZGUgdG8gTWltb3NhLiAgVGhlIHByb3BlcnRpZXMgdGhhdFxuIyBhcmUgZXhwb3J0ZWQgYXJlIE1pbW9zYSdzIGhvb2sgdG8geW91ciBtb2R1bGUuICBNaW1vc2Egd2lsbCBhdHRlbXB0XG4jIHRvIGFjY2VzcyBmdW5jdGlvbnMgdGhhdCBhcmUgcGxhY2VkIGludG8gdGhpcyBleHBvcnRzIG1hdGNoaW5nIHRoZXNlIG5hbWVzOlxuI1xuIyAxLiByZWdpc3RyYXRpb246IFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIGJpbmQgeW91ciBtb2R1bGUgdG8gYSBNaW1vc2Egd29ya2Zsb3cuXG4jIDIuIHJlZ2lzdGVyQ29tbWFuZDogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gY3JlYXRlIGEgbmV3IE1pbW9zYSBjb21tYW5kLlxuIyAzLiBkZWZhdWx0czogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gYWNjZXNzIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9yIHlvdXIgbW9kdWxlLlxuIyBTZWUgPGEgaHJlZj1cIi4vY29uZmlnLmh0bWxcIj5jb25maWcuY29mZmVlPC9hPi5cbiMgNC4gcGxhY2Vob2xkZXI6IFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBidWlsZCBhIG1pbW9zYS1jb25maWcgZHVyaW5nICdtaW1vc2EgbmV3JyBhbmRcbiMgJ21pbW9zYSBjb25maWcnLiBTZWUgPGEgaHJlZj1cIi4vY29uZmlnLmh0bWxcIj5jb25maWcuY29mZmVlPC9hPi5cbiMgNS4gdmFsaWRhdGU6IFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGR1cmluZyBNaW1vc2EncyBzdGFydHVwIHRvIHZhbGlkYXRlIHRoZSBtaW1vc2EtY29uZmlnLlxuIyBUaGlzIGlzIHlvdXIgbW9kdWxlJ3Mgb3Bwb3J0dW5pdHkgdG8gZW5zdXJlIHRoZSBjb25maWd1cmF0aW9uIGl0IHdpbGwgYmUgZ2l2ZW4gbGF0ZXIgaXNcbiMgdmFsaWQuIFNlZSA8YSBocmVmPVwiLi9jb25maWcuaHRtbFwiPmNvbmZpZy5jb2ZmZWU8L2E+LlxuI1xuIyBBbnkgb3RoZXIgZnVuY3Rpb25zIGV4cG9ydGVkIHdpbGwgYmUgaWdub3JlZCBieSBNaW1vc2EsIGJ1dCBtYXkgYmUgdXNlZnVsIHRvIHlvdSBpZiB5b3UgaGF2ZVxuIyBtdWx0aXBsZSBtb2R1bGVzIHRoYXQgbmVlZCB0byB0YWxrIHRvIG9uZSBhbm90aGVyLlxuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIHJlZ2lzdHJhdGlvbjogICAgcmVnaXN0cmF0aW9uXG4gIHJlZ2lzdGVyQ29tbWFuZDogcmVnaXN0ZXJDb21tYW5kXG4gIGRlZmF1bHRzOiAgICAgICAgY29uZmlnLmRlZmF1bHRzXG4gIHBsYWNlaG9sZGVyOiAgICAgY29uZmlnLnBsYWNlaG9sZGVyXG4gIHZhbGlkYXRlOiAgICAgICAgY29uZmlnLnZhbGlkYXRlIl19