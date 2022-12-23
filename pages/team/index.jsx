import Head from "next/head";
import styles from "../../styles/Home.module.css";

import Team from "../../views/Team";

const team = () => {
  return (
    <div className={styles.container}>
      <Team />
    </div>
  );
};

export default team;
