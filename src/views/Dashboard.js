import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StudentsList from "components/organisms/StudentsList/StudentsList";
import { useStudents } from "hooks/useStudents";
import { useModal } from "hooks/useModal";
import { GroupWrapper, TitleWrapper, Wrapper } from "views/Dashboard.styles";
import { Title } from "components/atoms/Title/Title";
import StudentDetails from "components/molecules/StudentDetails/Student.Details";
import Modal from "components/organisms/Modal/Modal";
import { useGetGroupsQuery } from "store/api/groups";

const Dashboard = () => {
	const { getStudentById } = useStudents();
	const { id } = useParams();

	const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
	const { data, isLoading } = useGetGroupsQuery();

	const [currentStudent, setCurrentStudent] = useState(null);

	const handleOpenStudentDetails = async id => {
		const studentData = await getStudentById(id);
		setCurrentStudent(studentData);
		handleOpenModal();
	};

	if (isLoading) {
		return (
			<Wrapper>
				<TitleWrapper>Loading...</TitleWrapper>
			</Wrapper>
		);
	}

	if (!id && data.groups.length > 0)
		return <Redirect to={`/group/${data.groups[0].id}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<Title as="h2">Group {id}</Title>
				<nav>
					{data.groups.map(({ id }) => (
						<Link key={id} to={`/group/${id}`}>
							{id}{" "}
						</Link>
					))}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
				<Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
					<StudentDetails student={currentStudent} />
				</Modal>
			</GroupWrapper>
		</Wrapper>
	);
};

export default Dashboard;
