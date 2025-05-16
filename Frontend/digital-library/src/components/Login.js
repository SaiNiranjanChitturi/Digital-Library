import React, {useState} from 'react';
import Logo from '../images/digital-library-logo.png';
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
            const response = await fetch('http://localhost:8085/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if(response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }

        }
        catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        }
        finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0074d9',width:'100vw', height: '100vh'}}>
            <div className= "shadow-lg bg-white text-white p-4 rounded shadow login-container" style={{ width:'420px', height:'620px', maxWidth: '420px', maxHeight: '620px'}}>
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
                        <button type="button" className="btn btn-primary">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;