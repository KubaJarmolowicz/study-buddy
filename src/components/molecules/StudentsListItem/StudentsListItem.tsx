import React from "react";
import PropTypes from "prop-types";
import { StyledAverage, StyledInfo, Wrapper } from "./StudentsListItem.styles";
import { UserShape } from "types";

interface IUserData {
	average: number;
	name: string;
	attendance: number;
}

export interface IListItemProps {
	userData: IUserData;
	handleOpenStudentDetails: React.MouseEventHandler;
}

const StudentsListItem = ({
	userData: { average, name, attendance },
	handleOpenStudentDetails,
}: IListItemProps) => {
	return (
		<Wrapper onClick={handleOpenStudentDetails}>
			<StyledAverage value={average}>{average}</StyledAverage>
			<StyledInfo>
				<p>{name}</p>
				<p>attendance: {attendance}%</p>
			</StyledInfo>
		</Wrapper>
	);
};

StudentsListItem.propTypes = {
	userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
