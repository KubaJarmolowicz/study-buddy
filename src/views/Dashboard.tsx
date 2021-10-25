import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StudentsList from "components/organisms/StudentsList/StudentsList";
import { useModal } from "hooks/useModal";
import { GroupWrapper, TitleWrapper, Wrapper } from "views/Dashboard.styles";
import { Title } from "components/atoms/Title/Title";
import StudentDetails from "components/molecules/StudentDetails/Student.Details";
import Modal from "components/organisms/Modal/Modal";
import { useGetGroupsQuery } from "store/api/groups";
import { useGetStudentByIdQuery } from "store/api/students";
import { IParams } from "components/organisms/StudentsList/StudentsList";

const Dashboard = () => {
	const { id } = useParams<IParams>();

	const [currentStudentId, setCurrentStudentId] = useState(
		"318e2aeb-f079-4488-a42c-b158be8365ed"
	);

	const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
	const { data, isLoading: areGroupsLoading } = useGetGroupsQuery();
	const {
		data: studentsData,
		isLoading: isStudentLoading,
	} = useGetStudentByIdQuery(currentStudentId);

	const handleGetCurrentStudentId = (id: string) => {
		setCurrentStudentId(id);
		handleOpenModal();
	};

	if (areGroupsLoading) {
		return (
			<Wrapper>
				<TitleWrapper>Loading...</TitleWrapper>
			</Wrapper>
		);
	}

	if (!id) return <Redirect to={`/group/${data?.groups[0].id}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<Title as="h2">Group {id}</Title>
				<nav>
					{data?.groups.map(({ id }) => (
						<Link key={id} to={`/group/${id}`}>
							{id}{" "}
						</Link>
					))}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList handleGetCurrentStudentId={handleGetCurrentStudentId} />
				<Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
					{isStudentLoading || !studentsData ? (
						<h2>Loading...</h2>
					) : (
						<StudentDetails student={studentsData?.students} />
					)}
				</Modal>
			</GroupWrapper>
		</Wrapper>
	);
};

export default Dashboard;
