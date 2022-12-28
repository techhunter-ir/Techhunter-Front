import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { Suspense, useState, useEffect } from "react";
import { enquireScreen } from "enquire-js";

const Main = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
    });

    return () => {
      setIsMobile(false);
    };
  }, []);

  return (
    <>
      <Header key="header" isFirstScreen={true} isMobile={isMobile} />

      {/* <Suspense fallback={() => <>loading</>} /> */}

      {children}

      <Footer key="footer" />
    </>
  );
};

export default Main;
