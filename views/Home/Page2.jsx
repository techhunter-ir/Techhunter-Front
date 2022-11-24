import React from "react";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";
import classes from "./index.module.scss";

export default function Page2() {
  return (
    <ScrollOverPack
      id="page2"
      className={`${classes.contentWrapper} ${classes.page}`}
    >
      <QueueAnim
        className={`${classes.textWrapper} ${classes.leftText}`}
        key="text"
        duration={450}
        type="bottom"
        leaveReverse
      >
        <h2 key="h2">Full stack, full service.</h2>
        <p key="p" style={{ maxWidth: 300 }}>
          From databases to backend to frontend to mobile, we handle everything.
          With our extensive skill set, TECH HUNTER can help you with every step
          of execution: architecture, design, development, testing, deployment,
          and support.
        </p>
      </QueueAnim>
      <TweenOne
        key="image"
        className={`${classes.image2} ${classes.imageWrapper}`}
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(100px)", opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
