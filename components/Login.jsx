import { useState } from 'react';
import '..//components/Login.css';

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = (e) => {
e.preventDefault();
console.log('Logging in with:', username, password);
}

return (
<div className='login'>
    <h1 className='heading'>Login Page</h1>
    <form onSubmit={handleLogin}>
    <div>
        <label htmlFor="username">Username:  </label>
        <br></br>
        <input 
        placeholder='Username'
        type="text" 
        id="username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        />
    </div>
    <div>
        <label htmlFor="password">Password:  </label>
        <br></br>
        <input 
        placeholder='Password'
        type="password" 
        id="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
    </div>
    <button type="submit">Login</button>
    </form>
</div>
);
}

export default Login;
