import React from "react";
import { Typography } from "@mui/material";

const Notfound = () => {
  return (
    <div>
      <Typography color="error" variant="h3">
        404- Page not found
      </Typography>

      <Typography mt={2}>
        The page you are looking for does not exist.
      </Typography>
    </div>
  );
};

export default Notfound;
