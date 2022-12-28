import React from "react";
import DocumentTitle from "react-document-title";
import { enquireScreen } from "enquire-js";
import Banner from "./Banner";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import "./index.module.scss";

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === "enter",
    });
  };
  render() {
    return [
      <Banner key="banner" onEnterChange={this.onEnterChange} />,
      <Page1 key="page1" isMobile={this.state.isMobile} />,
      <Page2 key="page2" />,
      <Page3 key="page3" isMobile={this.state.isMobile} />,
      <Page4 isMobile={this.state.isMobile} key="page4" />,
      <DocumentTitle title="Ant Design - 一个 UI 设计语言" key="title" />,
    ];
  }
}
export default Home;
