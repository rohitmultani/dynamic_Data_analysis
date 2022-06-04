import React, { useEffect, useState } from "react";
import classes from "./ProegressLine.module.css";

const ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [{}
  ]
}) => {
 
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    
    requestAnimationFrame(() => {
     
      setWidths(
        visualParts.map(item => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <div>
      <div className={classes.progressLabel}>{label}</div>
      <div className={classes.bar}>
      <div
        className={classes.progressVisualFull}
        // to change the background color dynamically
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => {
           
            return (
                <div
              
                key={index}
                style={{
                    width: widths[index],
                    
                    backgroundColor: item.color
                }}
                className={classes.progressVisualPart}
                />
                );
            })}
      </div>
      {visualParts.map((item)=>{
          return(

<span className={classes.progresPercent}>{item.percentage}</span>
          )
      })}
</div>
    </div>
  );
};

export default ProgressLine;
