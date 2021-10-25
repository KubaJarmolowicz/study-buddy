import React from "react";
import { Title } from "components/atoms/Title/Title";
import {
	BigAverage,
	StyledAverage,
} from "../StudentsListItem/StudentsListItem.styles";

import {
	DetailsHeader,
	StyledDetails,
	CourseName,
} from "./StudentsDetails.styles";

interface IGrades {
	id: string;
	subject: string;
	average: number;
}

export interface IStudent {
	id: string;
	name: string;
	attendance: string;
	average: number;
	group: any;
	course: string;
	grades: IGrades[];
}

interface IStudentDetailsProps {
	student: IStudent;
}

const StudentDetails = ({ student }: IStudentDetailsProps) => {
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
					{student.grades.map(
						({ subject, average }: IGrades, index: number) => (
							<li key={index}>
								<span>{subject}</span>{" "}
								<StyledAverage value={average}>{average}</StyledAverage>
							</li>
						)
					)}
				</ul>
			</StyledDetails>
		</>
	);
};

export default StudentDetails;
