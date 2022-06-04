import React from "react";
const ValContext = React.createContext({
  report: [],
  addData: (report) => {},
});
export default ValContext;
