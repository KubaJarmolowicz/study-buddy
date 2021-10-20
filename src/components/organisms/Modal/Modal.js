import React from "react";
import { Button } from "components/atoms/Button/Button";
import { ModalWrapper } from "./Modal.styles";

const Modal = ({ isOpen, handleClose, children }) => {
	return (
		<>
			<ModalWrapper
				appElement={document.querySelector("#root")}
				isOpen={isOpen}
				onRequestClose={handleClose}
			>
				{children}
				<Button isBig onClick={handleClose}>
					Close
				</Button>
			</ModalWrapper>
		</>
	);
};

Modal.propTypes = {};

export default Modal;
