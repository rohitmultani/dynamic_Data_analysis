import { Fragment } from "react";
import classes from './Sidebar.module.css';
import dashboard from '../../Images/dashboard.png';
import skills from '../../Images/skills.png';
import intern from '../../Images/intern.png';
const SideBar=()=>{
    return(
        <Fragment>
<div className={classes.SideBar}>
    <div className={classes.Dashboard}>
        <img src={dashboard} alt="dashboard"></img> 
        <span>Dashboard</span>
    </div>
    <div className={classes.Skills}>
    <img src={skills} alt="skills"></img> 
    <span>Skill Test</span>
    </div>
    <div className={classes.Intern}>
    <img src={intern} alt="Intern"></img> 
    <span>Internships</span>
    </div>

</div>
        </Fragment>
    )
}
export default SideBar;