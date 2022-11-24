/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";
import classes from "./index.module.scss";

export default function Page3({ isMobile }) {
  return (
    <ScrollOverPack
      id="page3"
      className={`${classes.contentWrapper} ${classes.page}`}
    >
      <TweenOne
        key="image"
        className={`${classes.image3} ${classes.imageWrapper}`}
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
      />
      <QueueAnim
        className={classes.textWrapper}
        key="text"
        type={isMobile ? "bottom" : "right"}
        leaveReverse
        style={{ top: "40%" }}
      >
        <h2 key="h2">We care.</h2>
        <p key="p" style={{ maxWidth: 280 }}>
          We take enormous pride in the value we bring to our clients. That's
          our ethos as a company. Our clients trust us to deliver technology
          critical to their business, and we deliver.。
        </p>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page3.propTypes = {
  isMobile: PropTypes.bool,
};
