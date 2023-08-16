const getSv = (size) => {
  switch (size) {
    case "xs":
      return "16px";
    case "sm":
      return "32px";
    case "md":
      return "42px";
    case "lg":
      return "56px";
    case "xl":
      return "68px";
    case "xxl":
      return "86px";
    case "xxxl":
      return "112px";
    default:
      return "";
  }
};

export { getSv };
//# sourceMappingURL=index.js.map
