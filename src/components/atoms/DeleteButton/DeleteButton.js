import React from "react";
import { ReactComponent as DeleteIcon } from "assets/icons/deleteIcon.svg";
import { StyledDeleteButton } from "./DeleteButton.styles";

const DeleteButton = props => (
	<StyledDeleteButton {...props}>
		<DeleteIcon />
	</StyledDeleteButton>
);

export default DeleteButton;
