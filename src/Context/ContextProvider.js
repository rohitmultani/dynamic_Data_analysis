import ValContext from "./ValContext";
import { useReducer, memo } from "react";
const defaultWatchState = {
  report: [
    {
      rank: 10292,
      percentile: 37,
      score: 7,
    },
  ],
};
const WatchReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedData;
    console.log("not existed");
    updatedData = state.report.concat(action.report);
    return {
      report: updatedData,
    };
  }

  return defaultWatchState;
};
function ContextProvider(props) {
  const [WatchState, dispatchWatchAction] = useReducer(
    WatchReducer,
    defaultWatchState
  );
  const dataAddHandler = (report) => {
    dispatchWatchAction({ type: "ADD", report: report });
  };

  const valContext = {
    report: WatchState.report,
    addData: dataAddHandler,
  };
  return (
    <ValContext.Provider value={valContext}>
      {props.children}
    </ValContext.Provider>
  );
}
export default memo(ContextProvider);
