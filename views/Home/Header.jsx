/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Menu, Row, Col, Icon, Button, Popover, Badge } from "antd";
import classes from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const searchEngine = "Google";

const Header = (props) => {
  const router = useRouter();

  // state = {
  //   menuVisible: false,
  // };
  // onMenuVisibleChange = (visible) => {
  //   setState({
  //     menuVisible: visible,
  //   });
  // };
  // handleShowMenu = () => {
  //   setState({
  //     menuVisible: true,
  //   });
  // };

  // handleHideMenu = () => {
  //   setState({
  //     menuVisible: false,
  //   });
  // };

  // handleSelectFilter = (value, option) => {
  //   const optionValue = option.props["data-label"];
  //   return (
  //     optionValue === searchEngine ||
  //     optionValue.indexOf(value.toLowerCase()) > -1
  //   );
  // };

  // render() {
  const { isFirstScreen, isMoblie } = props;
  const menuMode = isMoblie ? "inline" : "horizontal";
  const headerClassName = classNames({
    clearfix: true,
    homeNavWhite: !isFirstScreen,
  });

  const menu = [
    <Menu
      mode={menuMode}
      defaultSelectedKeys={["home"]}
      className={classes.nav}
      key="nav"
    >
      <Menu.Item className={classes.menuItem} key="home">
        HOME
      </Menu.Item>

      <Menu.Item onClick={() => router.push("/team")} key="docs/spec">
        TEAM
      </Menu.Item>

      <Menu.Item key="docs/react">PRODUCTS</Menu.Item>
      <Menu.Item key="docs/pattern">SERVICES</Menu.Item>
      <Menu.Item key="docs/resource">CONTACT</Menu.Item>
    </Menu>,
  ];

  return (
    <header id="header" className={`${classes.homeNavWhite} ${classes.header}`}>
      {menuMode === "inline" ? (
        <Popover
          overlayClassName={classes.popoverMenu}
          placement="bottomRight"
          content={menu}
          trigger="click"
          visible={menuVisible}
          arrowPointAtCenter
          onVisibleChange={onMenuVisibleChange}
        >
          <Icon
            className={classes.navPhoneIcon}
            type="menu"
            onClick={handleShowMenu}
          />
        </Popover>
      ) : null}
      <Row>
        <Col lg={4} md={5} sm={24} xs={24}>
          <a id="logo">
            {/* <Image height={80} width={120} alt="logo" src="/logo2.png" />
              <image height={80} width={120} alt="logo" src="/logo2.png" /> */}
          </a>
        </Col>
        <Col lg={20} md={19} sm={0} xs={0}>
          {menuMode === "horizontal" ? menu : null}
        </Col>
      </Row>
    </header>
  );
};

export default Header;
