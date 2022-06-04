import { Fragment, useContext } from "react";
import classes from "./Stats.module.css";
import trophy from "../../Images/trophy.png";
import correct from "../../Images/correct.png";
import clipboard from "../../Images/clipboard.png";
import ValContext from "../../Context/ValContext";
const Stats = () => {
  const DataCtx = useContext(ValContext);
  let l = DataCtx.report.length;
  console.log(DataCtx.report[l - 1].rank);
  return (
    <Fragment>
      <div className={classes.statsBox}>
        <div className={classes.name}> Quick Statistics</div>
        <div className={classes.stats}>
          <div className={classes.rank}>
            <div className={classes.imgBlock}>
              <img src={trophy} alt="rank"></img>
            </div>
            <div>
              <div className={classes.number}>{DataCtx.report[l - 1].rank}</div>
              <div className={classes.title}>YOUR RANK</div>
            </div>
          </div>
          <div className={classes.line}></div>

          <div className={classes.rank}>
            <div className={classes.imgBlock}>
              <img src={clipboard} alt="rank"></img>
            </div>
            <div>
              <div className={classes.number}>
                {DataCtx.report[l - 1].percentile}%
              </div>
              <div className={classes.title}>PERCENTILE</div>
            </div>
          </div>

          <div className={classes.line}></div>

          <div className={classes.rank}>
            <div className={classes.imgBlock}>
              <img src={correct} alt="rank"></img>
            </div>
            <div>
              <div className={classes.number}>
                {DataCtx.report[l - 1].score}/15
              </div>
              <div className={classes.title}>CORRECT ANSWERS</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Stats;
