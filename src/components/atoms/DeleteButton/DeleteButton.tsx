import React, { FC } from "react";
import { ReactComponent as DeleteIcon } from "assets/icons/deleteIcon.svg";
import { StyledButton } from "./DeleteButton.styles";
import { IButtonProps } from "../Button/Button";

interface IDeleteBtnProps extends IButtonProps {
	["aria-label"]: "Delete";
	onClick: () => void;
}

const DeleteButton: FC<IDeleteBtnProps> = props => (
	<StyledButton {...props}>
		<DeleteIcon />
	</StyledButton>
);

export default DeleteButton;
