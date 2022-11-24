import Footer from "./components/Footer";
import Header from "./components/Header";

const Main = ({ children }) => {
  return (
    <>
      <Header key="header" isFirstScreen={true} isMobile={false} />

      {children}

      <Footer key="footer" />
    </>
  );
};

export default Main;
