import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For React Router v6+
import authAPI from '../api/authAPI'; // Make sure this is the default export
import Auth from '../utils/auth'; // Your AuthService
import './Login.css'; // Optional: add your styles here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // React Router v6+

  // Navigate to a dashboard or home page after successful login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await authAPI.login({ email, password });
      if (data?.token) {
        Auth.login(data.token); // This stores token and redirects
        navigate('/dashboard'); // Add navigation here
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred while logging in.');
    }
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
