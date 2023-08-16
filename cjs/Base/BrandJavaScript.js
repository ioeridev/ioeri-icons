'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SVGParent = require('../utils/SVGParent.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BrandJavaScript = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React__default.createElement(SVGParent.SVGParent, __spreadValues({}, rest), /* @__PURE__ */ React__default.createElement("path", { d: "M2,2V46H46V2H2ZM26.1,36.89c0,2.82-2,5.76-5.77,5.76-2.31,0-3.93-.84-5-1.96-1.07-1.13-1.59-2.55-1.7-3.7l4.19-.21c.1,.63,.52,1.68,2.51,1.68,1.26,0,1.57-.84,1.57-1.57v-14.67h4.2v14.67Zm9.74,5.76c-1.84,0-3.41-.45-4.66-1.3-1.26-.85-2.2-2.11-2.78-3.73l3.98-1.47c.63,1.57,1.68,2.31,3.56,2.31,1.68,0,2.52-.53,2.52-1.57,0-.53,0-1.79-2.94-2.52-5.23-1.36-6.28-4.4-6.28-6.7,0-2.83,2.3-5.77,6.49-5.77,1.78,0,4.3,.63,6.18,3.78l-3.56,2.09c-.94-1.57-1.88-1.78-2.62-1.78-1.57,0-2.3,.84-2.3,1.57,0,.63,0,1.78,3.04,2.52,5.34,1.46,6.07,4.92,6.07,6.81,0,3.45-2.72,5.76-6.7,5.76Z" }));
};
BrandJavaScript.displayName = "ioeri-icons/BrandJavaScript";

exports.BrandJavaScript = BrandJavaScript;
//# sourceMappingURL=BrandJavaScript.js.map
