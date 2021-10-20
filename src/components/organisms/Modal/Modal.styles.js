import { Button } from "components/atoms/Button/Button";
import styled from "styled-components";

export const ModalWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 600px;
	min-height: 700px;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 15px;
	box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
	z-index: 10;

	& > * + * {
		margin-top: 2rem;
	}

	${Button} {
		margin-top: auto;
	}
`;

export const ModalOverlay = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
`;
