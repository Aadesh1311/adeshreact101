import React from "react";
import styles from "./CardItem.module.css";

const CardItem = ({ item }) => {
  console.log("item :", item);
  const { date, logo, heading, subheading, devices, color } = item;
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <div className={styles.leftDiv}>
        <p>{date}</p>
        <p className={styles.black}>Case Study</p>
        <h1>{heading}</h1>
        <h1>{subheading}</h1>
        <p>{devices} - Mobile</p>
      </div>
      <div className={styles.rightDiv}>
        <img src={logo} />
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CardItem;