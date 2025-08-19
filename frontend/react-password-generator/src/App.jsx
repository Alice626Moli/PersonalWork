import { useState,useEffect } from "react";
import {
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import PasswordOptions from "./components/PasswordOptions";
import PasswordDisplay from "./components/PasswordDisplay";
import "./style.scss";
import generatePassword from './utils/generatePassword'



function App() {
  const [autoGenerate, setAutoGenerate] = useState(true);
  const [options, setOptions] = useState({
    length: 12,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: false,
  });

  const [password, setPassword] = useState("");



  const handleGenerate = () =>{
    const newPassword = generatePassword(options)
    setPassword(newPassword)
  }

  useEffect(() => {
    if (autoGenerate) {
      handleGenerate()
    }
  }, [autoGenerate,options])

  const handleCopy = ()=>{
    navigator.clipboard.writeText(password);
    alert('Password copied')
  }
  console.log("options", options);

  return (
    <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <Container maxWidth="sm" className="container">
        <Typography variant="h4" gutterBottom>
          测试test
          <FormControlLabel
            control={
              <Checkbox
                checked={autoGenerate}
                onChange={(e) => setAutoGenerate(e.target.checked)}
              />
            }
            label="Auto-generate password when option change"
          />
          <PasswordOptions options={options} setOptions={setOptions} />
          <PasswordDisplay
            password={password}
            showGenerateButton={!autoGenerate}
            handleGenerate={handleGenerate}
            handleCopy={handleCopy}
          />
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
