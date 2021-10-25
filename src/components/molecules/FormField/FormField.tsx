import React, { FC } from "react";
import styled from "styled-components";
import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	${Label} {
		margin: 10px 0;
	}
`;

export interface IFormFieldProps {
	onChange: React.FormEventHandler<HTMLInputElement>;
	value?: string;
	label: string;
	name: string;
	id: string;
	type?: string;
}

const FormField: FC<IFormFieldProps> = React.forwardRef(
	(
		{ onChange, value, label, name, id, type = "text", ...rest },
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		return (
			<Wrapper>
				<Label htmlFor={id}>{label}</Label>
				<Input
					{...rest}
					ref={ref}
					name={name}
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					data-testid={label}
				/>
			</Wrapper>
		);
	}
);

export default FormField;
