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
const BrandThreads = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React__default.createElement(SVGParent.SVGParent, __spreadValues({}, rest), /* @__PURE__ */ React__default.createElement("path", { d: "M24.17,43c-3.84,0-5.61-.47-8.54-2.05-2.54-1.37-4.74-3.2-5.91-5.83C5.51,25.69,6.79,11.6,15.77,6.92c4.56-2.38,11.8-2.64,16.44-.28,4.45,2.26,6.6,5.79,8.38,10.31l-3.63,1.04c-1.68-6.09-5.72-9.47-12.28-9.47-2.59,0-4.95,.26-6.92,1.24-4.73,2.34-6.67,7.84-6.86,13.41-.14,4.05,.52,8.13,2.32,11.07,2.07,3.36,6.36,5.49,10.38,5.49,3.77,0,6.8-.66,9.14-2.85,3.18-2.99,3.85-7.75-.21-10.66-1.25,10.67-15.72,10.06-15.72,1.58,0-1.76,.69-3.3,2.05-4.61,2.72-2.61,6.81-1.84,10.23-1.89-.36-1.61-1.73-3.95-4.36-3.95-2.03,0-3.77,.51-4.71,2.08l-2.83-1.83c1.2-2.25,3.61-3.73,7.32-3.73s7.33,2.42,7.93,7.02l.19,1.42c2.09,.85,3.6,2.42,4.65,4.01,2.94,4.47,1.32,10.2-2.88,13.76-2.29,1.94-5.7,2.92-10.22,2.92h0Zm-3.99-15.27c0,1.75,1.85,3.05,3.65,3.05,2,0,3.38-.56,4.13-1.69,.75-1.13,1.13-2.49,1.13-4.08-2.06-.52-5.64-.9-7.53,.36-.89,.59-1.37,1.34-1.37,2.36h0Z" }));
};
BrandThreads.displayName = "ioeri-icons/BrandThreads";

exports.BrandThreads = BrandThreads;
//# sourceMappingURL=BrandThreads.js.map
