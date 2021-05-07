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
    backgroundColor: "#302c5c",
    color: "white",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
};

export default function ModalScreen() {
  const dispatch = useDispatch();

  const modalVisible = useSelector((state) => state.modal.modalVisible);
  const name = useSelector((state) => state.modal.selectedName);
  const fee = useSelector((state) => state.modal.fee);
  const netAmount = useSelector((state) => state.modal.netAmount);
  const withAmount = useSelector((state) => state.modal.withdrawnAmount);

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
        ariaHideApp={false}
      >
        <p>Name : {name}</p>
        <p>Withdrawn Amount : {withAmount}</p>
        <p>Transaction Fee : {fee}</p>
        <p>Net Amount : {netAmount}</p>
        <button
          onClick={closeModal}
          style={{
            color: "white",
            fontFamily: "Como",
            backgroundColor: "#242145",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "40%",
          }}
        >
          CLOSE
        </button>
      </Modal>
    </div>
  );
}
