import React from "react";
import { Row, Col } from "antd";
import classes from "../index.module.scss";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <footer id="footer">
      <Row className={classes.footerRow}>
        <div className={classes.footerLinks}>
          <p onClick={() => router.push("/")} className={classes.footerItem}>
            Home
          </p>
          <p
            onClick={() => router.push("/team")}
            className={classes.footerItem}
          >
            who we are
          </p>
          <p className={classes.footerItem}>Blog</p>
        </div>
        <div>Tech Hunter 2022</div>
      </Row>
    </footer>
  );
};

export default Footer;
