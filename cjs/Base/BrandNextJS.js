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
const BrandNextJS = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React__default.createElement(SVGParent.SVGParent, __spreadValues({}, rest), /* @__PURE__ */ React__default.createElement("path", { d: "M22.62,3.01c-.09,0-.38,.04-.64,.06-5.96,.54-11.55,3.76-15.09,8.7-1.96,2.72-3.23,5.86-3.71,9.18-.17,1.15-.19,1.49-.19,3.06s.02,1.9,.19,3.06c1.14,7.89,6.75,14.51,14.36,16.97,1.36,.44,2.8,.74,4.43,.92,.64,.07,3.39,.07,4.02,0,2.82-.31,5.21-1.01,7.57-2.21,.36-.19,.43-.23,.38-.27-1.15-1.52-2.29-3.05-3.42-4.59l-3.36-4.54-4.21-6.23c-1.4-2.08-2.81-4.16-4.24-6.22-.02,0-.03,2.76-.04,6.14-.01,5.92-.02,6.15-.09,6.29-.07,.16-.2,.3-.36,.37-.13,.07-.25,.08-.87,.08h-.71l-.19-.12c-.12-.07-.21-.18-.27-.3l-.09-.19v-8.23s.02-8.23,.02-8.23l.13-.16c.09-.1,.19-.19,.3-.25,.17-.08,.23-.09,.95-.09,.84,0,.98,.03,1.2,.27,1.7,2.53,3.39,5.08,5.07,7.63,2.73,4.13,6.45,9.78,8.28,12.55l3.33,5.04,.17-.11c1.6-1.06,3.05-2.34,4.31-3.79,2.65-3.03,4.36-6.76,4.94-10.74,.17-1.15,.19-1.49,.19-3.06s-.02-1.9-.19-3.06c-1.14-7.89-6.75-14.51-14.36-16.97-1.42-.45-2.89-.76-4.37-.92-.39-.04-3.11-.09-3.45-.05h0Zm8.6,12.7c.2,.1,.35,.27,.41,.48,.03,.11,.04,2.39,.03,7.53v7.38s-1.31-2-1.31-2l-1.31-2v-5.37c0-3.47,.02-5.42,.04-5.51,.06-.22,.21-.41,.41-.52,.17-.09,.23-.09,.88-.09,.61,0,.71,0,.85,.08h0Z" }));
};
BrandNextJS.displayName = "ioeri-icons/BrandNextJS";

exports.BrandNextJS = BrandNextJS;
//# sourceMappingURL=BrandNextJS.js.map
