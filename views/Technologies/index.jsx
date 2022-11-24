import classes from "./index.module.scss";
import { Card } from "antd";
import Image from "next/image";

const Technologies = () => {
  return (
    <>
      <div className={classes.teamBanner}>
        <h1 className={classes.desc}>
          On a mission to deliver valuable products with the hughest
          technologies in the world. You dream it, we make it.
        </h1>
      </div>

      <div className={classes.cardContainer}></div>
    </>
  );
};

export default Technologies;
