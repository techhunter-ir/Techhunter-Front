import classes from "./index.module.scss";
import { Card, Col, Row } from "antd";
import Image from "next/image";

import { DevelopProcess } from "./components/DevelopProcess";
import { TechStack } from "./components/TechStack";
import { Advantages } from "./components/Advantages";

const Technologies = () => {
  return (
    <>
      <div className={classes.teamBanner}>
        <h1 className={classes.desc}>
          On a mission to deliver valuable products with the highest
          technologies in the world. You dream it, we make it.
        </h1>
      </div>

      <DevelopProcess />

      <TechStack />

      <Advantages />
    </>
  );
};

export default Technologies;
