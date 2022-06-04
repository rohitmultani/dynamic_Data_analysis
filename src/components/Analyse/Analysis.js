import { Fragment} from "react";
import classes from "./Analysis.module.css";
import ProgressLine from "../../Design/ProgressLine";

const Analysis = () => {
  return (
    <Fragment>
      <div className={classes.analyseBox}>
        <div className={classes.entitle}>Syllabus Wise Analysis</div>
        <div className={classes.progressBox}>
          <ProgressLine
            label="HTML TOOLS, FORMS, HISTORY"
            visualParts={[
              {
                percentage: "80%",
                color: "#438AF6",
              },
            ]}
          />
          
        </div>
        <div className={classes.progressBox}>
          <ProgressLine
            label="TAGS & REFERENCES IN HTML"
            visualParts={[
              {
                percentage: "60%",
                color: "#FF9142",
              },
            ]}
          />
        </div>
        <div className={classes.progressBox}>
          <ProgressLine
            label="TABLES & CSS BASICS"
            visualParts={[
              {
                percentage: "24%",
                color: "#FB5E5E",
              },
            ]}
          />
        </div>
        <div className={classes.progressBox}>
          <ProgressLine
            label="TABLES & CSS BASICS"
            visualParts={[
              {
                percentage: "96%",
                color: "#2EC971",
              },
            ]}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Analysis;
