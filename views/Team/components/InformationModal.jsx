import React, { useState } from "react";
import { Button, Modal } from "antd";
import { team } from "../team";
const InformationModal = ({ modalOpen, setModalOpen, person }) => {
  return (
    <Modal
      title={person.name}
      centered
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={[
        <Button href="https://google.com" key="back">
          Linked In
        </Button>,
        <Button key="link">Telegram</Button>,
      ]}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};
export default InformationModal;
