import classes from "../index.module.scss";
import { Card, Col, Row } from "antd";
import Image from "next/image";

export const Advantages = () => {
  return (
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
            business analysis, UX/UI design and development to quality assurance
            and support.
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
            about the status of the development and have full control. You will
            have access to timesheets detailing every second spent on the
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
          <p>Our team is self-sufficient and do not have to be micromanaged.</p>
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
            including team extension - where our experts augment your teams; and
            dedicated development team model - where we handle the complete
            project.
          </p>
        </Col>
      </Row>
    </div>
  );
};
