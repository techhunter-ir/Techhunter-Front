/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";
import classes from "./index.module.scss";

export default function Page1({ isMobile }) {
  return (
    <ScrollOverPack
      id="page1"
      className={`${classes.contentWrapper} ${classes.page} ${classes.page1}`}
    >
      <TweenOne
        key="image"
        className={`${classes.image1} ${classes.imageWrapper}`}
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
      />
      <QueueAnim
        type={isMobile ? "bottom" : "right"}
        className={classes.textWrapper}
        key="text"
        leaveReverse
      >
        <h2 key="h2">We build custom software.</h2>
        <p key="p">We're a software development company in Tehran.</p>
        <p>
          We're full-stack software experts who: Build prototypes and
          applications from scratch, Fix and improve existing codebases, Work as
          a drop-in engineering team, Take pride in writing clean and extensible
          code
        </p>
        <img className={classes.mobileImage} src="/computer.png" width="100%" />
        {/* <div key="button">
          <a>
            <Button type="primary" size="large">
              asds
              <Icon type="right" />
            </Button>
          </a>
        </div> */}
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page1.propTypes = {
  isMobile: PropTypes.bool,
};
