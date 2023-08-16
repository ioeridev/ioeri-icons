import React from 'react';
import { SVGParent } from '../utils/SVGParent.js';

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
const BrandInstagramGradientColor = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React.createElement(SVGParent, __spreadValues({ eb: true }, rest), /* @__PURE__ */ React.createElement(
    "linearGradient",
    {
      id: "linear-gradient",
      gradientUnits: "userSpaceOnUse",
      x1: "21.33",
      y1: "27.8",
      x2: "26.66",
      y2: "20.18"
    },
    /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#ffe082" }),
    /* @__PURE__ */ React.createElement("stop", { offset: ".3", stopColor: "#ff5722" }),
    /* @__PURE__ */ React.createElement("stop", { offset: ".55", stopColor: "#d81b60" }),
    /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#304ffe" })
  ), /* @__PURE__ */ React.createElement(
    "linearGradient",
    {
      id: "linear-gradient-2",
      xlinkHref: "#linear-gradient",
      x1: "15.31",
      y1: "36.41",
      x2: "32.69",
      y2: "11.59"
    }
  ), /* @__PURE__ */ React.createElement(
    "linearGradient",
    {
      id: "linear-gradient-3",
      x1: "11.56",
      y1: "41.78",
      x2: "36.51",
      y2: "6.15",
      xlinkHref: "#linear-gradient"
    }
  ), /* @__PURE__ */ React.createElement("circle", { fill: "url(#linear-gradient)", cx: "24", cy: "23.99", r: "4.65" }), /* @__PURE__ */ React.createElement(
    "path",
    {
      fill: "url(#linear-gradient-2)",
      d: "M31.24,11.97h-14.48c-3.23,0-4.79,1.57-4.79,4.79v14.48c0,3.23,1.57,4.79,4.79,4.79h14.48c3.23,0,4.79-1.57,4.79-4.79v-14.48c0-3.23-1.57-4.79-4.79-4.79Zm-7.24,19.68c-4.22,0-7.65-3.43-7.65-7.65s3.43-7.65,7.65-7.65,7.65,3.43,7.65,7.65-3.43,7.65-7.65,7.65Zm7.18-13.67c-1.2,0-2.18-.98-2.18-2.18s.98-2.18,2.18-2.18,2.18,.98,2.18,2.18-.98,2.18-2.18,2.18Z"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      fill: "url(#linear-gradient-3)",
      d: "M32.5,5.54H15.57c-5.5,0-9.96,4.46-9.96,9.96v16.93c0,5.5,4.46,9.96,9.96,9.96h16.93c5.5,0,9.96-4.46,9.96-9.96V15.5c0-5.5-4.46-9.96-9.96-9.96Zm6.53,25.7c0,4.88-2.91,7.79-7.79,7.79h-14.48c-4.88,0-7.79-2.91-7.79-7.79v-14.48c0-4.88,2.91-7.79,7.79-7.79h14.48c4.88,0,7.79,2.91,7.79,7.79v14.48Z"
    }
  ));
};
BrandInstagramGradientColor.displayName = "ioeri-icons/BrandInstagramGradientColor";

export { BrandInstagramGradientColor };
//# sourceMappingURL=BrandInstagramGradientColor.js.map
