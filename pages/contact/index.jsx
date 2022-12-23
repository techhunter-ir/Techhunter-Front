import Head from "next/head";
import styles from "../../styles/Home.module.css";

import Contact from "../../views/Contact";

const contact = () => {
  return (
    <div className={styles.container}>
      <Contact />
    </div>
  );
};

export default contact;
