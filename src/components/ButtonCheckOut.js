import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const ButtonCheckOut = () => {
  return (
    <Link to="/Cart" style={{ textDecoration: "none", color: "white" }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ab6f45",
          "&:hover": { backgroundColor: "#b9935a", opacity: [0.9, 0.8, 0.7] },
        }}
      >
        {" "}
        CHECKOUT
      </Button>
    </Link>
  );
};
export default ButtonCheckOut;
