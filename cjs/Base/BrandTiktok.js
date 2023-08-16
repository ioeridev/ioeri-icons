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
const BrandTiktok = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React__default.createElement(SVGParent.SVGParent, __spreadValues({}, rest), /* @__PURE__ */ React__default.createElement("path", { d: "M40.25,20.37c-.31,.03-.62,.05-.93,.05-3.42,0-6.61-1.72-8.49-4.59v15.62c0,6.38-5.17,11.55-11.55,11.55s-11.55-5.17-11.55-11.55,5.17-11.55,11.55-11.55h0c.24,0,.48,.02,.71,.04v5.69c-.24-.03-.47-.07-.71-.07-3.25,0-5.89,2.64-5.89,5.89s2.64,5.89,5.89,5.89,6.13-2.56,6.13-5.82l.06-26.53h5.44c.51,4.88,4.45,8.69,9.34,9.05v6.32" }));
};
BrandTiktok.displayName = "ioeri-icons/BrandTiktok";

exports.BrandTiktok = BrandTiktok;
//# sourceMappingURL=BrandTiktok.js.map
