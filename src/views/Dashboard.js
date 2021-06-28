import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StudentsList from "components/organisms/StudentsList/StudentsList";
import { useStudents } from "hooks/useStudents";
import { useModal } from "hooks/useModal";
import { GroupWrapper, TitleWrapper, Wrapper } from "views/Dashboard.styles";
import { Title } from "components/atoms/Title/Title";

const Dashboard = () => {
	const { getGroups } = useStudents();
	const { id } = useParams();

	const { Modal, isModalOpen, handleOpenModal, handleCloseModal } = useModal();

	const [groups, setGroups] = useState([]);
	const [currentStudent, setCurrentStudent] = useState(null);

	useEffect(() => {
		(async () => {
			const groups = await getGroups();

			setGroups(groups);
		})();
	}, [getGroups]);

	const handleOpenStudentDetails = id => {
		setCurrentStudent(id);
		handleOpenModal();
	};

	if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<Title as="h2">Group {id}</Title>
				<nav>
					{groups.map(group => (
						<Link key={group} to={`/group/${group}`}>
							{group}{" "}
						</Link>
					))}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
				{isModalOpen && (
					<Modal handleClose={handleCloseModal}>{currentStudent}</Modal>
				)}
			</GroupWrapper>
		</Wrapper>
	);
};

export default Dashboard;
