import React, { useState, useEffect } from "react";
import axios from "axios";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import UsersList from "components/organisms/UsersList/UsersList";
import { useParams } from "react-router-dom";
import GroupNavigation from "components/organisms/GroupNavigation/GroupNavigation";

const Dashboard = () => {
	const [students, setStudents] = useState([]);
	const [groups, setGroups] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get("/groups")
			.then(({ data }) => setGroups(data.groups))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`/students/${id ? id : groups[0]}`)
			.then(({ data }) => setStudents(data.students))
			.catch(err => console.log(err));
	}, [id, groups]);

	return (
		<GroupNavigation groups={groups} currentGroup={id ?? groups[0]}>
			<ViewWrapper>
				<UsersList users={students} />
			</ViewWrapper>
		</GroupNavigation>
	);
};

export default Dashboard;
