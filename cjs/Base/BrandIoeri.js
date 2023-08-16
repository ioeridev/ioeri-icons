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
const BrandIoeri = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React__default.createElement(SVGParent.SVGParent, __spreadValues({}, rest), /* @__PURE__ */ React__default.createElement("path", { d: "M28.1,28.86h-8.16c-1.09,0-1.91,.82-1.91,1.91s.82,1.91,1.91,1.91h8.2c1.09,0,1.91-.82,1.91-1.91-.04-1.08-.86-1.91-1.95-1.91Z" }), /* @__PURE__ */ React__default.createElement("path", { d: "M13.95,29.69c-1.2,0-2.21-1.01-2.21-2.21v-4.97c0-3.96,3.22-7.18,7.19-7.18h4.98c1.2,0,2.21,1.01,2.21,2.21s-1.01,2.21-2.21,2.21h-4.98c-1.53,0-2.77,1.23-2.77,2.77v4.97c-.07,1.2-1.01,2.21-2.21,2.21Z" }), /* @__PURE__ */ React__default.createElement("path", { d: "M31.58,17.72c-2.58,0-4.72,2.09-4.72,4.71s2.1,4.71,4.72,4.71,4.72-2.09,4.72-4.71-2.06-4.71-4.72-4.71Zm0,7.07c-1.31,0-2.32-1.08-2.32-2.32,0-1.31,1.09-2.32,2.32-2.32,1.31,0,2.32,1.08,2.32,2.32,.07,1.23-1.01,2.32-2.32,2.32Z" }), /* @__PURE__ */ React__default.createElement("path", { d: "M31.58,5h-15.16c-6.33,0-11.42,5.09-11.42,11.41v15.19c0,6.28,5.09,11.41,11.38,11.41h15.2c6.29,0,11.42-5.09,11.42-11.41v-15.19c0-6.32-5.09-11.41-11.42-11.41Zm7.64,26.56c0,4.15-3.41,7.56-7.56,7.56h-15.24c-4.16,0-7.56-3.4-7.56-7.56v-15.15c0-4.15,3.41-7.56,7.56-7.56h15.2c4.23,0,7.56,3.4,7.56,7.56v15.15h.04Z" }));
};
BrandIoeri.displayName = "ioeri-icons/BrandIoeri";

exports.BrandIoeri = BrandIoeri;
//# sourceMappingURL=BrandIoeri.js.map
