import React from 'react';
import Logo from '../images/digital-library-logo.png';
function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0074d9',width:'100vw', height: '100vh'}}>
        <div className= "bg-white text-white p-4 rounded shadow login-container" style={{ width: '480px', height: '620px'}}>
            <h2 className="text-center mt-5" style={ {color: '#0074d9'}}>Digital Library<br/></h2>
            <div className="text-center">
                <img src= {Logo} alt="Library" height="100 px" width="100 px" className="img-fluid" /> 
            </div>
                <form>
                    <div className='form-group mt-4'>
                        <label for="username" className="form-label" style={ {color: '#0074d9', fontWeight: 'bold'}}>Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter your Username" />
                        <small id="usernameHelp" className="form-text text-muted p-2">Your Username is different from your e-mail</small>
                    </div>
                    <div className='form-group mt-2' style={ {color: '#0074d9', fontWeight: 'bold'}}>
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
                    </div>
                    <div className="form-check mt-1">
                        <label className="form-check-label" for="rememberMe" style={ {color: '#0074d9'}}>Remember Me</label>
                        <input type="checkbox" className="form-check-input" id="rememberMe" /> 
                    </div>
                <div className="mb-3 mt-4 d-flex gap-2"> 
                    <button type="submit" className="btn btn-success">Login</button>
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
                <div className="mb-3 text-center">
                    <p style={ {color: '#0074d9',  fontWeight:'bolder'}}>New here? SignUp below!</p>
                    <button type="button" className="btn btn-secondary">SignUp</button>
                </div>
            </form>
        </div>
        </div>
    );
}
export default Login;