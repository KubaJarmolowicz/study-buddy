import React from "react";
import { Wrapper } from "./NameAttendance.styles.js";

const NameAttendance = ({ name, attendance }) => (
	<Wrapper>
		<p>{name}</p>
		<p>attendance: {attendance}</p>
	</Wrapper>
);

export default NameAttendance;
