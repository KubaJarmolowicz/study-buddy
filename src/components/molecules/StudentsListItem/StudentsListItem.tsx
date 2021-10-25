import React from "react";
import { StyledAverage, StyledInfo, Wrapper } from "./StudentsListItem.styles";
import { IStudent } from "../StudentDetails/Student.Details";

export interface IListItemProps {
	userData: IStudent;
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

export default StudentsListItem;
