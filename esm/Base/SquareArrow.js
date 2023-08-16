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
const SquareArrow = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React.createElement(SVGParent, __spreadValues({ viewBox: "0 0 24 24" }, rest), /* @__PURE__ */ React.createElement("path", { d: "M23.9,.81c-.13-.32-.39-.57-.71-.71-.16-.07-.33-.1-.5-.1h-7.29c-.72,0-1.31,.59-1.31,1.31s.59,1.31,1.31,1.31h4.13L7.18,14.97c-.51,.51-.51,1.34,0,1.85,.26,.26,.59,.38,.93,.38s.67-.13,.93-.38L21.38,4.47v4.13c0,.72,.59,1.31,1.31,1.31s1.31-.59,1.31-1.31V1.31c0-.17-.03-.34-.1-.5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M21.38,12.06c-.72,0-1.31,.59-1.31,1.31v8.01H2.62V3.93H10.63c.72,0,1.31-.59,1.31-1.31s-.59-1.31-1.31-1.31H1.75c-.96,0-1.75,.78-1.75,1.75V22.25c0,.96,.78,1.75,1.75,1.75H20.94c.96,0,1.75-.78,1.75-1.75V13.37c0-.72-.59-1.31-1.31-1.31Z" }));
};
SquareArrow.displayName = "ioeri-icons/SquareArrow";

export { SquareArrow };
//# sourceMappingURL=SquareArrow.js.map
