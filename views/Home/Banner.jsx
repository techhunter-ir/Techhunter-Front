import React from "react";
import PropTypes from "prop-types";
import ScrollElement from "rc-scroll-anim/lib/ScrollElement";
import { Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import classes from "./index.module.scss";

function typeFunc(a) {
  if (a.key === "line") {
    return "right";
  } else if (a.key === "button") {
    return "bottom";
  }
  return "left";
}

export default function Banner({ onEnterChange }) {
  return (
    <section className={`${classes.page} ${classes.bannerWrapper}`}>
      <p>تیسیدبدتب</p>
      <ScrollElement
        className={classes.page}
        id="banner"
        onChange={({ mode }) => onEnterChange(mode)}
        playScale={0.9}
      >
        <QueueAnim
          className={classes.bannerTextWrapper}
          type={typeFunc}
          delay={300}
          key="banner"
        >
          <h2 key="h2">TECH HUNTER بلمنیئلنی</h2>
          <p key="content">software to the moon !</p>
          <span className="line" key="line" />
          <div key="buttons" className={classes.bannerButton}>
            <div key="button1" className={classes.startButton}>
              <a>Linked in</a>
            </div>
            <div
              key="button1"
              className={`${classes.startButton} ${classes.clearfix}`}
            >
              <a>Instagram</a>
            </div>
            <div
              key="button1"
              className={`${classes.startButton} ${classes.clearfix}`}
            >
              <a>Telegram</a>
            </div>
          </div>
        </QueueAnim>
        <Icon type="down" className="down" />
      </ScrollElement>
    </section>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
};
