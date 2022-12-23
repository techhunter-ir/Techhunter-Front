import Head from "next/head";
import styles from "../../styles/Home.module.css";

import Technologies from "../../views/Technologies";

const technologies = () => {
  return (
    <div className={styles.container}>
      <Technologies />
    </div>
  );
};

export default technologies;
