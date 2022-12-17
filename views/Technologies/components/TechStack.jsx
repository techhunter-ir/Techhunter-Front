import classes from "../index.module.scss";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

export const TechStack = () => {
  return (
    <div className={classes.greyContainer}>
      <h3>OUR TECH STACK</h3>
      <Row
        className={classes.rowContainer}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col span={6}>
          <Link
            href="https://laravel.com/"
            target="_blank"
            className={classes.iconCol}
          >
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
          </Link>
        </Col>
        <Col span={6}>
          <Link
            href="https://www.mongodb.com/"
            target="_blank"
            className={classes.iconCol}
          >
            <div>
              <Image
                data-cy="image"
                src="/mongodb.svg"
                alt="icon"
                width={130}
                height={50}
              />
            </div>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            href="https://www.docker.com/"
            target="_blank"
            className={classes.iconCol}
          >
            <div>
              <Image src="/docker.svg" alt="icon" width={130} height={50} />
            </div>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            href="https://www.postman.com/"
            target="_blank"
            className={classes.iconCol}
          >
            <div className={classes.techDiv}>
              <Image src="/postman.svg" alt="icon" width={114} height={29} />
              <p className={classes.title}>Postman</p>
            </div>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            href="https://www.php.net/"
            target="_blank"
            className={classes.iconCol}
          >
            <div>
              <Image src="/php.svg" alt="icon" width={114} height={29} />
            </div>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            href="https://reactjs.org/"
            target="_blank"
            className={classes.iconCol}
          >
            <div className={classes.techDiv}>
              <Image src="/react.svg" alt="icon" width={150} height={50} />
              <p className={classes.title}>React</p>
            </div>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            href="https://www.javascript.com/"
            target="_blank"
            className={classes.iconCol}
          >
            <div>
              <Image
                style={{ backgroundColor: "black" }}
                src="/jslogo.png"
                alt="icon"
                width={80}
                height={80}
              />
            </div>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            href="https://nodejs.org/"
            target="_blank"
            className={classes.iconCol}
          >
            <div>
              <Image src="/nodelogo.svg" alt="icon" width={150} height={60} />
            </div>
          </Link>
        </Col>
        <Col span={6}>
          <Link
            href="https://www.gatsbyjs.com/"
            target="_blank"
            className={classes.iconCol}
          >
            <div className={classes.techDiv}>
              <Image
                src="/Gatsby_Logo.png"
                alt="icon"
                width={114}
                height={100}
              />
              <p className={classes.title}>gatsby</p>
            </div>
          </Link>
        </Col>

        <Col span={6}>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className={classes.iconCol}
          >
            <div>
              <Image src="/nextjs.svg" alt="icon" width={130} height={40} />
            </div>
          </Link>
        </Col>

        <Col span={6}>
          <Link
            href="https://mariadb.org/"
            target="_blank"
            className={classes.iconCol}
          >
            <div className={classes.techDiv}>
              <Image src="/mariadb.png" alt="icon" width={114} height={100} />
            </div>
          </Link>
        </Col>

        <Col span={6}>
          <Link
            href="https://www.python.org/"
            target="_blank"
            className={classes.iconCol}
          >
            <div className={classes.techDiv}>
              <Image src="/python.png" alt="icon" width={114} height={100} />
            </div>
          </Link>
        </Col>

        <Col span={6}>
          <Link
            href="https://go.dev/"
            target="_blank"
            className={classes.iconCol}
          >
            <div className={classes.techDiv}>
              <Image
                src="/Go_Logo_Blue.svg"
                alt="icon"
                width={150}
                height={130}
              />
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
