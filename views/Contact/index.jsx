import classes from "./index.module.scss";
import { Card } from "antd";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className={classes.teamBanner}></div>

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
            src="/mohammad.png"
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

export default Contact;
