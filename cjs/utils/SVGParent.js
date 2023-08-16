'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index.js');

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
const SVGParent = (props) => {
  const _a = props, {
    fill = "currentColor",
    stroke = "currentColor",
    color,
    c,
    h,
    w,
    viewBox = "0 0 48 48",
    strokeWidth = "0",
    height = "1em",
    width = "1em",
    children,
    size,
    eb
  } = _a, rest = __objRest(_a, [
    "fill",
    "stroke",
    "color",
    "c",
    "h",
    "w",
    "viewBox",
    "strokeWidth",
    "height",
    "width",
    "children",
    "size",
    "eb"
  ]);
  const arm_sz = size === "xs" || size === "sm" || size === "md" || size === "lg" || size === "xl" || size === "xxl" || size === "xxxl";
  const val_sz = index.getSv(size);
  const hand_sz = arm_sz ? val_sz : typeof size === "number" ? `${size}px` : size;
  const hand_h = typeof h === "number" ? `${h}px` : h;
  const hand_w = typeof w === "number" ? `${w}px` : w;
  const addProps = {};
  if (eb) {
    addProps.version = "1";
    addProps.enableBackground = "new 0 0 48 48";
  }
  return /* @__PURE__ */ React__default.createElement(
    "svg",
    __spreadValues(__spreadValues({
      fill,
      stroke,
      strokeWidth,
      height: hand_sz || hand_h || height,
      width: hand_sz || hand_w || width,
      color: c || color,
      "aria-hidden": "true",
      viewBox,
      xmlns: "http://www.w3.org/2000/svg"
    }, addProps), rest),
    children
  );
};
SVGParent.displayName = "ioeri-icons/SVGParent";

exports.SVGParent = SVGParent;
//# sourceMappingURL=SVGParent.js.map
