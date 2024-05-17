import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";

const Input = ({ id, label, type, variant = "filled" }: TextFieldProps) => {
  return <TextField id={id} label={label} type={type} variant={variant} />;
};

export default Input;
