import React from "react";
import { ReactComponent as DeleteIcon } from "assets/icons/deleteIcon.svg";
import { StyledButton } from "./DeleteButton.styles";

const DeleteButton = props => (
	<StyledButton {...props}>
		<DeleteIcon />
	</StyledButton>
);

export default DeleteButton;
