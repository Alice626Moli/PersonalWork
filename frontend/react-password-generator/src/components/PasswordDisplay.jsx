import React from "react";
import { TextField, Button, Typography } from "@mui/material";

const PasswordDisplay = ({ password, showGenerateButton, handleGenerate,handleCopy }) => {
  return (
    <div className="password-display">
      <TextField
        label={"Generated Password"}
        variant="outlined"
        fullWidth
        value={password}
        InputProps={{ readOnly: true }}
      />
      <div className="actions">
        {showGenerateButton && <Button variant="contained" onClick={handleGenerate}> Generate</Button>}

        <Button variant="contained" onClick={handleCopy}> Copy</Button>
      </div>
      <Typography variant="caption">
        {/* 判断密码强度 */}
        Strength:{" "}
        {password.length < 8
          ? "Weak"
          : password.length < 16
            ? "Medium"
            : "Strong"}
      </Typography>
    </div>
  );
};

export default PasswordDisplay;
