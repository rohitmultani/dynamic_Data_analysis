import { Fragment } from "react";
import classes from './Header.module.css';
import cuvette from '../../Images/cuvette.png';
import My from '../../Images/my.jpeg';
const Header=()=>{
    return(
        <Fragment>
<div className={classes.headerBlock}> 
    <div className={classes.logoC}>
<img src={cuvette} alt="logo"></img>
    </div>
    <div className={classes.profile}>
    <div className={classes.ProfileImage}>
<img src={My} alt="profile"></img>
    </div>
    <div className={classes.name}>
        Siddharth Jain
    </div>
    </div>
</div>
        </Fragment>
    )
}
export default Header;
