import React, {useState} from 'react';
import Logo from '../images/digital-library-logo.png';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            const response = await axios.post('http://localhost:8085/api/login', {
                email,
                password
            });

            localStorage.setItem('token', response.data.token);
            window.location.href = '/Home';
            console.log('Login successful:', response.data);
            
        } catch (error) {
            console.error('Error:', error);
            setError(error.response?.data?.message || 'An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ 
            backgroundColor: '#0074d9',
            minHeight: '100vh',
            minWidth: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            overflow: 'auto'
        }}>
            <div className="shadow-lg bg-white text-white p-4 rounded shadow login-container" style={{ 
                width: 'min(90%, 420px)',
                height: 'min(90vh, 620px)',
                margin: '20px auto'
            }}>
                <h2 className="text-center mt-5" style={ {color: '#0074d9'}}>Digital Library<br/></h2>
                <div className="text-center">
                    <img src= {Logo} alt="Library" height="100 px" width="100 px" className="img-fluid" /> 
                </div>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className='form-group mt-4'>
                            <label htmlFor="email" className="email-label" style={ {color: '#0074d9', fontWeight: 'bold'}}>E-mail</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your E-mail" required 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                        </div>
                        <div className='form-group mt-2' style={ {color: '#0074d9', fontWeight: 'bold'}}>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your Password" required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            />
                        </div>
                        {error && (
                        <div className="alert alert-danger mt-3 text-center">
                            {error}
                        </div>
                    )}
                    <div className="mb-3 mt-4 d-flex gap-2"> 
                        <button type="submit" className="btn btn-success" disabled={isLoading}>{isLoading ? "Logging in" : "Login"}</button>
                    </div>
                    <div className="mb-3 text-center">
                        <p style={ {color: '#0074d9',  fontWeight:'bolder'}}>New here? SignUp below!</p>
                        <button type="button" className="btn btn-primary"  onClick={() => window.location.href = '/register'}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;