import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledMUIInput = styled(TextField)({
  "& label": {
    fontSize: "var(--font-16)",
    fontWeight: 400,
    color: "var(--ter-black)",
  },
  "& .MuiInput-input": {
    fontSize: "var(--font-16)",
    fontWeight: 500,
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
    },
  },

  "& label.Mui-focused": {
    color: "var(--primary-blue)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--primary-blue)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--primary-blue)",
    },
    "&:hover fieldset": {
      borderColor: "var(--primary-blue)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary-blue)",
    },
  },
});

export default StyledMUIInput;
