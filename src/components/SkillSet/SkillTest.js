import Analysis from "../Analyse/Analysis";
import Graph from "../LineGraph/Graph";
import Intro from "../IntroHead/Introduction";
import PieChart from "../PieChart/PieChart";
import classes from './SkillTest.module.css';
import Stats from "../Stats/Stats";

const SkillTest=()=>{
    return(
        <div className={classes.skillblock}>
            <div> Skill Test</div>
            <Intro/>
            <Stats/>
            <Graph/>
            <Analysis/>
            <PieChart/>
        </div>
    )
}
export default SkillTest;