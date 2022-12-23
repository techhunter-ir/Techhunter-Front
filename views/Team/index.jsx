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
      {/* <div className={classes.teamBanner}> */}
      {/* <h5 className={classes.title}>ABOUT US</h5>
        <h1 className={classes.desc}>
          On a mission to deliver value to our customers. You dream it, we make
          it.
        </h1> */}
      {/* </div> */}
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
          {/* <div
            onClick={() => handleModal("mohammad")}
            className={classes.person}
          >
            <Image src="/mohammad2.png" width={300} height={400} alt="aida" />
            <div className={classes.teamMember}>
              <Image src={"/person.svg"} width={30} height={30} alt="icon" />
              <p className={classes.name}>Mohammad Shahriari Fard</p>
            </div>
          </div>
          <div onClick={() => handleModal("aida")} className={classes.person}>
            <Image src="/aida2.png" width={350} height={400} alt="aida" />
            <div className={classes.teamMember}>
              <Image src={"/person2.svg"} width={30} height={30} alt="icon" />
              <p className={classes.name}>Aida Rezakhani</p>
            </div>
          </div> */}
        </div>

        {/* <div className={classes.cardContainer}>
          <Card
            className={classes.card}
            bordered={false}
            style={{ width: 300 }}
          >
            <Image
              className={classes.image}
              src="/aida.png"
              width={150}
              height={150}
              alt="aida"
            />

            <div className={classes.content}>
              <p>Aida Rezakhani</p>
              <p>Front-End Developer</p>
            </div>
          </Card>

          <Card
            className={classes.card}
            bordered={false}
            style={{ width: 300 }}
          >
            <Image
              className={classes.image}
              src="/mohammad.jpg"
              width={150}
              height={150}
              alt="aida"
            />
            <div className={classes.content}>
              <p>Mohammad Shahriari Fard</p>
              <p>Back-End Developer</p>
            </div>
          </Card>
        </div> */}
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
