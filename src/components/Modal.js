import React, { useCallback } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import * as ModalActions from "../store/modalHandler";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ModalScreen() {
  const dispatch = useDispatch();

  const modalVisible = useSelector((state) => state.modal.modalVisible);
  const name = useSelector((state) => state.modal.selectedName);

  const closeModal = useCallback(() => {
    dispatch(ModalActions.closeModal());
  }, [dispatch]);

  return (
    <div className="Modal">
      <Modal
        isOpen={modalVisible}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a </div>
        <p>{name}</p>
      </Modal>
    </div>
  );
}
