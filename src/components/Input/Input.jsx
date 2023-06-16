import { Box, TextField } from "@mui/material";
import React from "react";

function Input({ onSearchChange }) {
  return (
    <Box component="form" flexGrow={1} sx={{ p: "0 50px" }}>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        fullWidth
        onChange={onSearchChange}
      />
    </Box>
  );
}

export default Input;
