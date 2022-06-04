import classes from "./MainModal.module.css";
import { memo, useState,useContext,useEffect} from "react";
import { useRef } from "react";
import html from "../../../Images/html.png";
import ValContext from "../../../Context/ValContext";
const ModalBar = (props) => {
    const DataCtx=useContext(ValContext);
    const inputRank = useRef();
    const inputPercentile = useRef();
    const inputScore = useRef();
//   const [rank, setRank] = useState(19292);
//   const [percentile, setPercentile] = useState();
//   const [score, setScore] = useState();
//   const rankHandler = (event) => {
//       event.preventDefault();
    //   console.log(event.target.value)
    // setTimeout(() => {
        // setRank(event.target.value);
        // console.log(inputElement.current.value)
    // },100);
//   };
//   const perHandler = (event) => {
//     setTimeout(() => {
//       setPercentile(event.target.value);
//     },100);
//   };
//   const scoreHandler = (event) => {
//     setTimeout(() => {
//       setScore(event.target.value);
//     },100);
//   };
  const submitHandler = () => {
      console.log(inputRank.current.value)
      DataCtx.addData({
          rank:inputRank.current.value,
          percentile:inputPercentile.current.value,
          score:inputScore.current.value
        })
        console.log(DataCtx.report);
  };
  return (
    <div className={classes.modalBar}>
      <div className={classes.head}>
        <div className={classes.headName}>Update Scores</div>
        <div className={classes.headImage}>
          <img src={html} alt="html"></img>
        </div>
      </div>
      <hr></hr>
      <div className={classes.rank}>
        <div className={classes.bar1}>
          <div className={classes.rankNum}>1</div>
          <div className={classes.rankPara}>
            Update your <span>rank</span>
          </div>
        </div>
        <div>
          <div className={classes.rankInput}>
            <input type="number" min="0" 
             ref={inputRank}
            ></input>
          </div>
        </div>
      </div>

      <div className={classes.percentile}>
        <div className={classes.bar1}>
          <div className={classes.percentileNum}>2</div>
          <div className={classes.percentilePara}>
            Update your <span>percentile</span>
          </div>
        </div>
        <div>
          <div className={classes.percentileInput}>
            <input type="number" min="0"
            ref={inputPercentile}>
            
            </input>
          </div>
        </div>
      </div>

      <div className={classes.score}>
        <div className={classes.bar1}>
          <div className={classes.scoreNum}>3</div>
          <div className={classes.scorePara}>
            Update your <span>current score (out of 15)</span>
          </div>
        </div>
        <div>
          <div className={classes.scoreInput}>
            <input type="number" min="0" 
            ref={inputScore}></input>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className={classes.btns}>
        <button className={classes.saveBtn} onClick={submitHandler}>
          Save
        </button>
        <button
          className={classes.cancelBtn}
          onClick={() => {
            props.backdropOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default memo(ModalBar);
