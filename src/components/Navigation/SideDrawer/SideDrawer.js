import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.opened) {
        attachedClasses = [styles.SideDrawer, styles.Open]
    }
  
    return (
      <>
        <Backdrop show={props.opened} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
          <div style={{ height: "11%", marginBottom: 32 }}>
            <Logo style={{height: "100%"}} clicked={props.toggle}/>
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </>
    );
  };
  
  export default sideDrawer;
  
