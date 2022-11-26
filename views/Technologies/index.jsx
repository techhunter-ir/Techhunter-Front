import classes from "./index.module.scss";
import { Card, Col, Row } from "antd";
import Image from "next/image";

const Technologies = () => {
  return (
    <>
      <div className={classes.teamBanner}>
        <h1 className={classes.desc}>
          On a mission to deliver valuable products with the highest
          technologies in the world. You dream it, we make it.
        </h1>
      </div>

      <div className={classes.container}>
        <h3>DEVELOPMENT PROCESS</h3>
        <p>Gathering the requirements</p>
        <p>Use cases, user stories, wireframing</p>
      </div>
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
            <div>
              <Image src="/postman.svg" alt="icon" width={114} height={29} />
              <p>Postman</p>
            </div>
          </Col>
          <Col className={classes.iconCol} span={6}>
            <div>
              <Image src="/php.svg" alt="icon" width={114} height={29} />
            </div>
          </Col>
          <Col className={classes.iconCol} span={6}>
            <div>
              <Image src="/react.svg" alt="icon" width={114} height={29} />
              <span>React</span>
            </div>
          </Col>
          <Col className={classes.iconCol} span={6}>
            <div>
              <Image
                style={{ backgroundColor: "black" }}
                src="/js-logo.png"
                alt="icon"
                width={114}
                height={29}
              />
            </div>
          </Col>
          <Col className={classes.iconCol} span={6}>
            <div>
              <Image src="/nodejs.svg" alt="icon" width={114} height={29} />
            </div>
          </Col>
          <Col className={classes.iconCol} span={6}>
            <div>
              <Image src="/gatsby.png" alt="icon" width={114} height={29} />
            </div>
          </Col>
          <Col className={classes.iconCol} span={6}>
            <div>
              <Image src="/nextjs.svg" alt="icon" width={114} height={29} />
            </div>
          </Col>
        </Row>
      </div>
      <div className={classes.container}>
        <Row
          className={classes.rowContainer}
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          <Col className={classes.benefit} span={8}>
            <Image
              className={classes.benefitImage}
              src="/worldIcon.svg"
              alt="icon"
              width={48}
              height={48}
            />
            <p>Our work gets praises from clients all over the world.</p>
          </Col>
          <Col className={classes.benefit} span={8}>
            <Image
              className={classes.benefitImage}
              src="/moneyIcon.svg"
              alt="icon"
              width={48}
              height={48}
            />
            <p>
              Our services cover the complete software product lifecycle, from
              business analysis, UX/UI design and development to quality
              assurance and support.
            </p>
          </Col>
          <Col className={classes.benefit} span={8}>
            <Image
              className={classes.benefitImage}
              src="/pricing.svg"
              alt="icon"
              width={48}
              height={48}
            />
            <p>
              Our pricing plans are straightforward and provides great value for
              your money.
            </p>
          </Col>
          <Col className={classes.benefit} span={8}>
            <Image
              className={classes.benefitImage}
              src="/update.svg"
              alt="icon"
              width={48}
              height={48}
            />
            <p>
              Our work is completely transparent. You are continuously updated
              about the status of the development and have full control. You
              will have access to timesheets detailing every second spent on the
              project.
            </p>
          </Col>
          <Col className={classes.benefit} span={8}>
            <Image
              className={classes.benefitImage}
              src="/star.svg"
              alt="icon"
              width={48}
              height={48}
            />
            <p>
              Our team is self-sufficient and do not have to be micromanaged.
            </p>
          </Col>
          <Col className={classes.benefit} span={8}>
            <Image
              className={classes.benefitImage}
              src="/hands.svg"
              alt="icon"
              width={48}
              height={48}
            />
            <p>
              We support several models of collaboration with our clients,
              including team extension - where our experts augment your teams;
              and dedicated development team model - where we handle the
              complete project.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Technologies;
