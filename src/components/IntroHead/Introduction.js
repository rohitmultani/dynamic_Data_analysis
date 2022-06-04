import { Fragment,useState } from "react";
import classes from './Introduction.module.css';
import html from '../../Images/html.png';
import MainModal from "../Modal/MainModal/MainModal";
import BackDrop from "../Modal/BackDrop/BackDrop";
const Intro=()=>{
    const [open,setOpen]=useState(false);
    const modalHandler=()=>{
        setOpen(prevState=>!prevState);
    }
    return (
        <Fragment>
            <div className={classes.introBox}>
                <div className={classes.html}>
                    <div>HTML</div>
                    <img src={html} alt={html}></img>
                </div>
                <div className={classes.detail}>
                    <div className={classes.name}>Hypertext Markup Language</div>
                    <div className={classes.ques}>
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2022    
                    </div>
                </div>
                <div className={classes.btn}>
                    <button onClick={modalHandler}>Update</button>
                </div>
            
                {open && <BackDrop backdropOpen={modalHandler}/>}
                {open && <MainModal backdropOpen={modalHandler}/>}
            </div>
        </Fragment>
    )
}
export default Intro;