import React from "react";
import { Slider, Checkbox, FormControlLabel, Typography } from "@mui/material";

const PasswordOptions = ({ options, setOptions }) => {
  const handleChange = (e, key) => {
    setOptions((prev) => ({ ...prev, [key]: e.targe.checked }));
  };

  return (
    <div className="options">
      <Typography> Password Length:{options.length} </Typography>
      <Slider
        min={4}
        max={32}
        value={options.length}
        onChange={(e, val) => setOptions((prev) => ({ ...prev, length: val }))}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={options.useUppercase}
            onChange={(e) => handleChange(e, "useUppercase")}
          />
        }
        label="Include Uppercase"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={options.useLowercase}
            onChange={(e) => handleChange(e, "useLowercase")}
          />
        }
        label="Include Lowercase"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.useNumbers}
            onChange={(e) => handleChange(e, "useNumbers")}
          />
        }
        label="Include Numbers"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={options.useSymbols}
            onChange={(e) => handleChange(e, "useSymbols")}
          />
        }
        label="Include Symbols"
      />
    </div>
  );
};

export default PasswordOptions;
