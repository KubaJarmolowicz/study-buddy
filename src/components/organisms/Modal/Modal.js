import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Button } from "components/atoms/Button/Button";
import { ModalWrapper, ModalOverlay } from "./Modal.styles";

const modalContainer = document.getElementById("modal-container");

const Modal = ({ handleClose, children }) => {
	const modalNode = document.createElement("div");

	useEffect(() => {
		modalContainer.appendChild(modalNode);

		return () => modalContainer.removeChild(modalNode);
	}, [modalNode]);

	return ReactDOM.createPortal(
		<>
			<ModalWrapper>
				{children}
				<Button onClick={handleClose}>Close</Button>
			</ModalWrapper>
			<ModalOverlay onClick={handleClose} />
		</>,
		modalNode
	);
};

Modal.propTypes = {};

export default Modal;
