"use client";
import React, { useState } from "react";
import TextField from "../../atoms/input/TextField";
import Button from "../../atoms/button/Button";

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (loginFormData: LoginFormData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    if (usernameError) setUsernameError("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (passwordError) setPasswordError("");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let hasError = false;

    if (username.length <= 0) {
      setUsernameError("Username is required.");
      hasError = true;
    }

    if (password.length <= 0) {
      setPasswordError("Password is required.");
      hasError = true;
    }

    if (!hasError) {
      onSubmit({ username, password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-80 mx-auto p-4 border rounded bg-white"
    >
      <TextField
        label="username"
        value={username}
        onChange={handleUsernameChange}
        error={usernameError}
        placeholder="Enter your username"
        className="mb-4"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
        placeholder="Enter your password"
        className="mb-4"
      />
      <Button type="submit" variant="contain" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
