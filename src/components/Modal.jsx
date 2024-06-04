import { useEffect, useRef } from "react";
import "../styles/Modal.css";

export default function Modal({ gameWinRef, openModal, closeModal }) {
  const refDefault = useRef(null);

  useEffect(() => {
    if (openModal) refDefault.current?.showModal();
  }, [openModal]);

  return (
    <dialog className="modal game-over" ref={refDefault}>
      <div className="container">
        <p>
          {gameWinRef.current ? `The cats are happy` : `The cats are angry`}
        </p>
        <div className="btn-container">
          <button onClick={() => closeModal(true)}>New game</button>
          {/* <button onClick={() => closeModal(false)}>Try again?</button> */}
        </div>
      </div>
    </dialog>
  );
}
