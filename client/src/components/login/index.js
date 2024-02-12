import React, { useState } from "react";
import { Container, Card, CardContent, Typography, TextField, Button, Alert } from '@mui/material';
import { login } from "../../api/login";

function Login({ onLoginSuccessful }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();
    setHasError(false);

    const loginResult = await login({ email, password });
    if (!loginResult) setHasError(true);
    else {
      const { name, token } = loginResult;
      // Save user IDs on local storage
      localStorage.setItem("name", name);
      localStorage.setItem("token", token);
      onLoginSuccessful();
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom> Login </Typography>

          <form onSubmit={onSubmit}>
            <TextField fullWidth label="Email address" type="email"  margin="normal" value={email} onChange={onEmailChange} placeholder="Enter email" />
            <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={onPasswordChange} placeholder="Password" />
            {hasError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                The email address and password you entered don't match any account. Please try again.
              </Alert>
            )}
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}> Login </Button>
          </form>

        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;