import React, { ReactNode } from "react";
import { Button } from "components/atoms/Button/Button";
import { ModalWrapper } from "./Modal.styles";

export interface IModalProps {
	isOpen: boolean;
	handleClose: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, handleClose, children }: IModalProps) => {
	return (
		<>
			<ModalWrapper
				appElement={document.querySelector("#root") as HTMLDivElement}
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
