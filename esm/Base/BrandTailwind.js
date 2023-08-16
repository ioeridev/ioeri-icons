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
const BrandTailwind = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React.createElement(SVGParent, __spreadValues({}, rest), /* @__PURE__ */ React.createElement("path", { d: "M34.5,28.2c-1.4,5.6-4.9,8.4-10.5,8.4-5.21,0-7.59-2.42-9.65-4.51-1.26-1.28-2.4-2.44-4-2.84-2.8-.7-5.25,.35-7.35,3.15,1.4-5.6,4.9-8.4,10.5-8.4,5.21,0,7.59,2.42,9.65,4.51,1.26,1.28,2.4,2.44,4,2.84,2.8,.7,5.25-.35,7.35-3.15Z" }), /* @__PURE__ */ React.createElement("path", { d: "M45,15.6c-1.4,5.6-4.9,8.4-10.5,8.4-5.21,0-7.59-2.42-9.65-4.51-1.26-1.28-2.4-2.44-4-2.84-2.8-.7-5.25,.35-7.35,3.15,1.4-5.6,4.9-8.4,10.5-8.4,5.21,0,7.59,2.42,9.65,4.51,1.26,1.28,2.4,2.44,4,2.84,2.8,.7,5.25-.35,7.35-3.15Z" }));
};
BrandTailwind.displayName = "ioeri-icons/BrandTailwind";

export { BrandTailwind };
//# sourceMappingURL=BrandTailwind.js.map
