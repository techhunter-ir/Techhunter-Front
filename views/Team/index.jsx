import classes from "./index.module.scss";
import { Card } from "antd";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <div className={classes.teamBanner}>
        {/* <h5 className={classes.title}>ABOUT US</h5>
        <h1 className={classes.desc}>
          On a mission to deliver value to our customers. You dream it, we make
          it.
        </h1> */}
      </div>

      <div className={classes.cardContainer}>
        <Card className={classes.card} bordered={false} style={{ width: 300 }}>
          <Image
            className={classes.image}
            src="/aida.png"
            width={150}
            height={150}
            alt="aida"
          />
          <div className={classes.content}>
            <p>Aida Rezakhani</p>
            <p>Front-End Developer</p>
          </div>
        </Card>

        <Card className={classes.card} bordered={false} style={{ width: 300 }}>
          <Image
            className={classes.image}
            src="/mohammad.jpg"
            width={150}
            height={150}
            alt="aida"
          />
          <div className={classes.content}>
            <p>Mohammad Shahriari Fard</p>
            <p>Back-End Developer</p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Team;
