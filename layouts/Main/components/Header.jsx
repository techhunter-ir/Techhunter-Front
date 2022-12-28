/* eslint-disable quotes */
import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Menu, Row, Col, Icon, Button, Popover, Badge } from "antd";
import classes from "../index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuOutlined } from "@ant-design/icons";

const searchEngine = "Google";

const Header = (props) => {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);

  const onMenuVisibleChange = (visible) => {
    setMenuVisible(visible);
  };

  const handleShowMenu = () => {
    setMenuVisible(true);
  };

  const handleHideMenu = () => {
    setMenuVisible(false);
  };

  const { isFirstScreen, isMobile } = props;
  const menuMode = isMobile ? "inline" : "horizontal";
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
      <Menu.Item
        onClick={() => router.push("/")}
        className={classes.menuItem}
        key="home"
      >
        HOME
      </Menu.Item>

      <Menu.Item onClick={() => router.push("/team")} key="docs/spec">
        TEAM
      </Menu.Item>

      {/* <Menu.Item onClick={() => router.push("/")} key="docs/react">
        PRODUCTS
      </Menu.Item> */}
      <Menu.Item
        onClick={() => router.push("/technologies")}
        key="docs/pattern"
      >
        TECHNOLOGIES
      </Menu.Item>
      {/* <Menu.Item onClick={() => router.push("/contact")} key="docs/resource">
        CONTACT
      </Menu.Item> */}
    </Menu>,
  ];
  return (
    <header id="header" className={`${classes.homeNavWhite} ${classes.header}`}>
      {menuMode === "inline" ? (
        <div className={classes.headerContainer}>
          <Link href="/">
            <h2 className={classes.name} key="h2">
              TECH HUNTER
            </h2>
          </Link>

          <Popover
            overlayClassName={classes.popoverMenu}
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={onMenuVisibleChange}
          >
            <MenuOutlined
              className={classes.navPhoneIcon}
              type="menu"
              onClick={handleShowMenu}
              style={{
                fontSize: "24px",
              }}
            />
          </Popover>
        </div>
      ) : null}
      <Row>
        <Col className={classes.menuCol} lg={20} md={19} sm={0} xs={0}>
          {menuMode === "horizontal" ? menu : null}
        </Col>
        <Col lg={4} md={5} sm={24} xs={24}>
          <a id="logo">
            {/* <Image height={80} width={120} alt="logo" src="/logo2.png" />
              <image height={80} width={120} alt="logo" src="/logo2.png" /> */}
          </a>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
