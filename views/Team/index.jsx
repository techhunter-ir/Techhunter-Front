import React, { useState } from "react";
import classes from "./index.module.scss";
import { Card } from "antd";
import Image from "next/image";
import InformationModal from "./components/InformationModal";
import { team } from "./team";

const Team = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [person, setPerson] = useState(team.aida);

  const handleModal = (person) => {
    setModalOpen(true);
    setPerson(team[person]);
  };
  return (
    <>
      <div className={classes.container}>
        <h5 className={classes.title}>WE ARE TECH HUNTER</h5>
        <h5 className={classes.greeting}>NICE TO MEET YOU</h5>
        {/* <p>You can do big things with a small team.</p> */}

        <div className={classes.cardContainer}>
          <div className={classes.imageContainer} />
          <div className={classes.names}>
            <p className={classes.name}>Aida Rezakhani</p>
            <p className={classes.name}>Mohammad Shahriari Fard</p>
          </div>
        </div>

        <div className={classes.mobileContainer}>
          <div className={classes.mobileAvatrt}>
            <img src="/avatar1.jpg" width="100%" />
            <p className={classes.name}>Aida Rezakhani</p>
          </div>
          <div className={classes.mobileAvatrt}>
            <img src="/avatar2.jpg" width="100%" />
            <p className={classes.name}>Mohammad Shahriari Fard</p>
          </div>
        </div>
      </div>
      <InformationModal
        person={person}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

export default Team;
