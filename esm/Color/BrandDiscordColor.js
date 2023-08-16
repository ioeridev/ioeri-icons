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
const BrandDiscordColor = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ React.createElement(SVGParent, __spreadValues({ eb: true }, rest), /* @__PURE__ */ React.createElement(
    "path",
    {
      fill: "#536dfe",
      d: "M 39.248 10.177 c -2.804 -1.287 -5.812 -2.235 -8.956 -2.778 c -0.057 -0.01 -0.114 0.016 -0.144 0.068 c -0.387 0.688 -0.815 1.585 -1.115 2.291 c -3.382 -0.506 -6.747 -0.506 -10.059 0 c -0.3 -0.721 -0.744 -1.603 -1.133 -2.291 c -0.03 -0.051 -0.087 -0.077 -0.144 -0.068 c -3.143 0.541 -6.15 1.489 -8.956 2.778 c -0.024 0.01 -0.045 0.028 -0.059 0.051 c -5.704 8.522 -7.267 16.835 -6.5 25.044 c 0.003 0.04 0.026 0.079 0.057 0.103 c 3.763 2.764 7.409 4.442 10.987 5.554 c 0.057 0.017 0.118 -0.003 0.154 -0.051 c 0.846 -1.156 1.601 -2.374 2.248 -3.656 c 0.038 -0.075 0.002 -0.164 -0.076 -0.194 c -1.197 -0.454 -2.336 -1.007 -3.432 -1.636 c -0.087 -0.051 -0.094 -0.175 -0.014 -0.234 c 0.231 -0.173 0.461 -0.353 0.682 -0.534 c 0.04 -0.033 0.095 -0.04 0.142 -0.019 c 7.201 3.288 14.997 3.288 22.113 0 c 0.047 -0.023 0.102 -0.016 0.144 0.017 c 0.22 0.182 0.451 0.363 0.683 0.536 c 0.08 0.059 0.075 0.183 -0.012 0.234 c -1.096 0.641 -2.236 1.182 -3.434 1.634 c -0.078 0.03 -0.113 0.12 -0.075 0.196 c 0.661 1.28 1.415 2.498 2.246 3.654 c 0.035 0.049 0.097 0.07 0.154 0.052 c 3.595 -1.112 7.241 -2.79 11.004 -5.554 c 0.033 -0.024 0.054 -0.061 0.057 -0.101 c 0.917 -9.491 -1.537 -17.735 -6.505 -25.044 C 39.293 10.205 39.272 10.187 39.248 10.177 Z M 16.703 30.273 c -2.168 0 -3.954 -1.99 -3.954 -4.435 s 1.752 -4.435 3.954 -4.435 c 2.22 0 3.989 2.008 3.954 4.435 C 20.658 28.282 18.906 30.273 16.703 30.273 Z M 31.324 30.273 c -2.168 0 -3.954 -1.99 -3.954 -4.435 s 1.752 -4.435 3.954 -4.435 c 2.22 0 3.989 2.008 3.954 4.435 C 35.278 28.282 33.544 30.273 31.324 30.273 Z"
    }
  ));
};
BrandDiscordColor.displayName = "ioeri-icons/BrandDiscordColor";

export { BrandDiscordColor };
//# sourceMappingURL=BrandDiscordColor.js.map
