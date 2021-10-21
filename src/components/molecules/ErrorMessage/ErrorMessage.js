import React from "react";
import { Wrapper } from "./ErrorMessage.styles";
import { Title } from "../../atoms/Title/Title";

const ErrorMessage = ({
  message = "Something went wrong! Please try again later or contact our support!",
}) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
