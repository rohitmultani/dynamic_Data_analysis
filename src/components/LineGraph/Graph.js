import { Fragment, useState,useContext,useEffect } from "react";
import classes from "./Graph.module.css";
import graph from "../../Images/graph.png";
import ReactApexChart from "react-apexcharts";
import ValContext from "../../Context/ValContext";
const Graph = () => {
  const DataCtx=useContext(ValContext);
  const [lower,setLower]=useState(true)
  let l=DataCtx.report.length;
  console.log(DataCtx.report[l-1].percentile)
  const percentile=DataCtx.report[l-1].percentile;
useEffect(()=>{

  if(percentile>72){
setLower(false)
  }
  else(
    setLower(true)
  )
  setState({...state,series: [
    {
      name: "Your Score",
      data: [
        {
          x: 0,
          y: 0,
        },
        {
          x:percentile,
          y: percentile
        },
        {
          x: 100,
          y: 0,
        },
      ],
    },
    {
      name: "Average Score",
      data: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 72,
          y: 72,
        },
        {
          x: 100,
          y: 0,
        },
      ],
    },
  ],})
},[percentile])
  const [state, setState] = useState({
    series: [
      {
        name: "Your Score",
        data: [
          {
            x: 0,
            y: 0,
          },
          {
            x:percentile,
            y: percentile
          },
          {
            x: 100,
            y: 0,
          },
        ],
      },
      {
        name: "Average Score",
        data: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 72,
            y: 72,
          },
          {
            x: 100,
            y: 0,
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 250,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 5,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], 
          opacity: 0.5,
        },
      },
      xaxis: {
        tickAmount: 5,
        floating: false,
        max: 100,
        min: 0,
        type: "numeric",
      },
      forecastDataPoints: {
        count: 1,
      },
      yaxis: {
        min: 0,
        max: 100,
      },
    },
  });
  return (
    <Fragment>
      <div className={classes.comparisonBox}>
        <div className={classes.title1s}>
          <div>Comparison Graph</div>
        </div>
        <div className={classes.detail}>
          <div className={classes.name}>
            <span> You scored {DataCtx.report[l-1].percentile}% percentile </span> which is 
             {lower?<span> lower</span>:<span> greater</span>}
             than the
            average percentile 72% of all engineers who took this assessment.
          </div>
          <div className={classes.img}>
            <img src={graph} alt={graph}></img>
          </div>
        </div>
        <div className={classes.graph}>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            height={200}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Graph;
