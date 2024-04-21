// app/auth.tsx
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from '../authContext';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    // Perform login logic here
    login();
  };

  const handleRegister = async () => {
    // Perform registration logic here
    // For demonstration purposes, we'll just log in the user
    login();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to SocialApp</h1>
      <div className="w-full max-w-md">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleLogin} className="w-full mb-4">
          Login
        </Button>
        <Button onClick={handleRegister} className="w-full" variant="secondary">
          Register
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;