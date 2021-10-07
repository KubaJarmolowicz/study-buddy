import React from "react";
import { Title } from "components/atoms/Title/Title";
import { StyledAverage } from "../StudentsListItem/StudentsListItem.styles";
import styled from "styled-components";

const DetailsHeader = styled.header``;

const StudentDetails = ({ student }) => {
	return (
		<div>
			<Title>
				{student.name} | Group {student.group}
			</Title>
			<p>{student.attendance}</p>
			<StyledAverage value={student.average}>{student.average}</StyledAverage>
		</div>
	);
};

export default StudentDetails;
