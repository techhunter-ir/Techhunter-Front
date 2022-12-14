import classes from "../index.module.scss";
import { Card, Col, Row } from "antd";
import Image from "next/image";

export const TechStack = () => {
  return (
    <div className={classes.greyContainer}>
      <h3>OUR TECH STACK</h3>
      <Row
        className={classes.rowContainer}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className={classes.iconCol} span={6}>
          <div>
            <Image
              className={classes.icon}
              src="/laravelIcon.svg"
              alt="icon"
              width={45}
              height={37}
            />
            <Image src="/laravel.svg" alt="icon" width={114} height={29} />
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div>
            <Image
              data-cy="image"
              src="/mongodb.svg"
              alt="icon"
              width={130}
              height={50}
            />
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div>
            <Image src="/docker.svg" alt="icon" width={130} height={50} />
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div className={classes.techDiv}>
            <Image src="/postman.svg" alt="icon" width={114} height={29} />
            <p className={classes.title}>Postman</p>
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div>
            <Image src="/php.svg" alt="icon" width={114} height={29} />
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div className={classes.techDiv}>
            <Image src="/react.svg" alt="icon" width={150} height={50} />
            <p className={classes.title}>React</p>
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div>
            <Image
              style={{ backgroundColor: "black" }}
              src="/js-logo.png"
              alt="icon"
              width={150}
              height={40}
            />
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div>
            <Image src="/nodejs.svg" alt="icon" width={150} height={60} />
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div className={classes.techDiv}>
            <Image src="/gatsby.png" alt="icon" width={114} height={100} />
            <p className={classes.title}>gatsby</p>
          </div>
        </Col>
        <Col className={classes.iconCol} span={6}>
          <div>
            <Image src="/nextjs.svg" alt="icon" width={130} height={40} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
