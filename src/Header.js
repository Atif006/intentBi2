import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <Box
      sx={{
        height: "70px",
        background: "#000080",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "20%",
        paddingRight: "20%",
        position: "fixed",
        width: "100%",
      }}
    >
      <Link to="/">Match</Link>
      <Link to="/">NEWS</Link>
      <Link to="/scoretable">Table</Link>
      <Link to="/chartcompnents">Stats</Link>
      <Link to="/">PLAYERS</Link>
    </Box>
  );
};

export default Header;
