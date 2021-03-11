import React from "react";
import PropTypes from "prop-types";
import { Label } from "components/atoms/Label/Label.styles";
import { Input } from "components/atoms/Input/Input.styles";
import { Wrapper } from "./FormField.styles";

const FormField = ({
	onChange,
	value,
	label,
	name,
	id,
	type = "text",
	...props
}) => (
	<Wrapper>
		<Label htmlFor={id}>{label}</Label>
		<Input
			name={name}
			id={id}
			type={type}
			value={value}
			onChange={onChange}
			data-testid={label}
		/>
	</Wrapper>
);

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default FormField;
