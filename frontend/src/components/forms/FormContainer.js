import React from "react";
import { Container } from "react-bootstrap";

export const FormContainer = ({ children, ...props }) => {
  return <Container>{children}</Container>;
};
