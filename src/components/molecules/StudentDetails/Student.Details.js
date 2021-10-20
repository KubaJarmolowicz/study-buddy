import React from "react";
import { Title } from "components/atoms/Title/Title";
import {
	BigAverage,
	StyledAverage,
} from "../StudentsListItem/StudentsListItem.styles";
import styled from "styled-components";

const DetailsHeader = styled.header`
	display: flex;
	justify-content: center;
	min-width: 100%;

	& > * {
		margin-right: auto;
	}
`;

const StyledDetails = styled.div`
	width: 100%;
	text-align: left;
	color: ${({ theme }) => theme.colors.darkGrey};
	padding-left: 2rem;

	h4 {
		margin-bottom: 10px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		& > * + * {
			margin-top: 1rem;
		}
	}

	li {
		display: flex;
		justify-content: space-between;
		max-width: 50%;

		span {
			font-size: ${({ theme }) => theme.fontSize.l};
		}
	}
`;

const CourseName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StudentDetails = ({ student }) => {
	return (
		<>
			<DetailsHeader>
				<BigAverage value={student.average}>{student.average}</BigAverage>
				<Title>{student.name}</Title>
			</DetailsHeader>
			<StyledDetails>
				<h4>Course:</h4>
				<CourseName>{student.course}</CourseName>
				<h4>Average grades:</h4>
				<ul>
					{student.grades.map(({ subject, average }, index) => (
						<li key={index}>
							<span>{subject}</span>{" "}
							<StyledAverage value={average}>{average}</StyledAverage>
						</li>
					))}
				</ul>
			</StyledDetails>
		</>
	);
};

export default StudentDetails;
