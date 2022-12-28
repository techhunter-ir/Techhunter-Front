import React from "react";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import classes from "./index.module.scss";

export default function Page4() {
  return (
    <div
      className={classes.container}
      animation={{
        y: 0,
        opacity: 1,
        duration: 550,
        delay: 150,
        ease: "easeOutQuad",
      }}
      style={{ transform: "translateY(50px)", opacity: 1 }}
    >
      <h2 key="h2">PERFECTION · MODERNISM · TECHNOLOGY</h2>
      <p key="p">we love delivering value to our clients.</p>
      <img src="/cloud.png" width="100%" />
    </div>
    // <ScrollOverPack id="page4" className={classes.container}>
    //   <QueueAnim
    //     className={classes.textWrapperBottom}
    //     key="text"
    //     leaveReverse
    //     type="bottom"
    //   >
    //     <h2 key="h2">PERFECTION · MODERNISM · TECHNOLOGY</h2>
    //     <p key="p">we love delivering value to our clients.</p>
    //     <img className={classes.mobileImage} src="/cloud.png" width="100%" />
    //   </QueueAnim>
    //   <TweenOne
    //     key="image"
    //     className={`${classes.imageWrapper} ${classes.image4} ${classes.imageNone}`}
    //     animation={{
    //       y: 0,
    //       opacity: 1,
    //       duration: 550,
    //       delay: 150,
    //       ease: "easeOutQuad",
    //     }}
    //     style={{ transform: "translateY(50px)", opacity: 1 }}
    //   />
    // </ScrollOverPack>
  );
}

{
  /* <div
className={classes.container}
animation={{
  y: 0,
  opacity: 1,
  duration: 550,
  delay: 150,
  ease: "easeOutQuad",
}}
style={{ transform: "translateY(50px)", opacity: 1 }}
>
<h2 key="h2">PERFECTION · MODERNISM · TECHNOLOGY</h2>
<p key="p">we love delivering value to our clients.</p>
<img src="/cloud.png" width="100%" />
</div> */
}
