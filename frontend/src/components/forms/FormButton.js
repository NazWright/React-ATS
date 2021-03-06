import React from "react";
import { Button } from "react-bootstrap";

export const FormButton = ({ children, ...props }) => {
  return <Button variant="danger">{children}</Button>;
};

export default FormButton;
