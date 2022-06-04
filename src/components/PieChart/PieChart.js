import { Fragment, useState, useContext, useEffect, memo } from "react";
import ReactApexChart from "react-apexcharts";
import classes from "./PieChart.module.css";
import target from "../../Images/target.png";
import ValContext from "../../Context/ValContext";
const PieChart = () => {
  const DataCtx = useContext(ValContext);
  let l = DataCtx.report.length;
  const score = DataCtx.report[l - 1].score;
  useEffect(() => {
    setState({
      ...state,
      series: [
        (DataCtx.report[l - 1].score / 15) * 100,
        ((15 - DataCtx.report[l - 1].score) / 15) * 100,
      ],
    });
  }, [score]);
  const [state, setState] = useState({
    series: [
      (DataCtx.report[l - 1].score / 15) * 100,
      ((15 - DataCtx.report[l - 1].score) / 15) * 100,
    ],
    chartOptions: {
      labels: ["Apple", "Mango"],
    },
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <Fragment>
      <div className={classes.Box}>
        <div className={classes.heading}>
          <div>Questions Analysis</div>
          <div className={classes.marks}>{DataCtx.report[l - 1].score}/15</div>
        </div>
        <div className={classes.detail}>
          <div className={classes.name}>
            <span>
              You Scored {DataCtx.report[l - 1].score} Questions correct out of
              15.
            </span>
            However it still needs some improvements.
          </div>
        </div>
        <div className={classes.chart}>
          <img src={target} alt="alt"></img>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default memo(PieChart);
