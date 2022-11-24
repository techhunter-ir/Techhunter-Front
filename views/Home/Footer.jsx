import React from "react";
import { Row, Col } from "antd";
import classes from "./index.module.scss";

function Footer() {
  return (
    <footer id="footer" className={classes.dark}>
      <div className={classes.footerWrap}>
        <Row className={classes.footerRow}>
          <Col lg={6} sm={24} xs={24}>
            <div className={classes.footerCenter}>
              <h2>
                {/* <img
                  className={classes.titleIcon}
                  src="/logo2.png"
                  alt=""
                  width={60}
                /> */}
                TECH HUNTER
              </h2>
              <div>
                <a
                  target="_blank "
                  href="https://github.com/ant-design/ant-design"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className={classes.footerCenter}>
              <h2>Contact</h2>
              <div>
                <a href="http://pro.ant.design">Linked In</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Instagram</a>
              </div>
              <div>
                <a
                  target="_blank "
                  href="https://github.com/websemantics/awesome-ant-design"
                >
                  Telegram
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}></Col>
          <Col lg={6} sm={24} xs={24}></Col>
        </Row>
      </div>
      <Row className={classes.bottomBar}>
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}></Col>
      </Row>
    </footer>
  );
}

export default Footer;
