import React from "react";
import { useParams } from "react-router-dom";
import StudentsListItem from "components/molecules/StudentsListItem/StudentsListItem";
import { StyledList } from "./StudentsList.styles";
import { Title } from "components/atoms/Title/Title";
import { useGetStudentsByGroupQuery } from "store/api/students";

const StudentsList = ({ handleGetCurrentStudentId }) => {
	const { id } = useParams();
	const { data, isLoading } = useGetStudentsByGroupQuery(id);

	return (
		<>
			<Title>Students list</Title>
			<StyledList>
				{isLoading ? (
					<h2>Loading...</h2>
				) : (
					data.students.map(userData => (
						<StudentsListItem
							handleOpenStudentDetails={() =>
								handleGetCurrentStudentId(userData.id)
							}
							key={userData.name}
							userData={userData}
						/>
					))
				)}
			</StyledList>
		</>
	);
};

export default StudentsList;
