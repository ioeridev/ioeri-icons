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
const BrandChakraUIColor = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React.createElement(SVGParent, __spreadValues({ eb: true }, rest), /* @__PURE__ */ React.createElement(
    "path",
    {
      fill: "#3fc7bf",
      d: "M24,3C12.37,3,3,12.37,3,24s9.37,21,21,21,21-9.37,21-21S35.63,3,24,3Zm4.9,7.58c.23,0,.43,.24,.3,.49l-5.33,9.76c-.09,.16-.03,.36,.13,.44,.05,.03,.1,.04,.15,.04h9.21c.3,0,.44,.36,.22,.57l-16.14,15.06c-.29,.27-.72-.11-.49-.43l7.64-10.54c.11-.15,.07-.35-.08-.46-.06-.04-.12-.06-.19-.06H14.6c-.18,0-.33-.15-.33-.33,0-.09,.04-.17,.1-.23l14.32-14.22c.06-.06,.14-.1,.22-.1h0Z"
    }
  ));
};
BrandChakraUIColor.displayName = "ioeri-icons/BrandChakraUIColor";

export { BrandChakraUIColor };
//# sourceMappingURL=BrandChakraUIColor.js.map
