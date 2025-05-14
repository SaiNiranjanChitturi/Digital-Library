import React from 'react';

function Login() {
    return (
    <div className= "container-sm bg-dark text-white">
        <h1 className="text-center mt-5">Login</h1>
        <div className="text-center">
            <img src="https://cdn.pixabay.com/photo/2013/07/12/15/00/library-73380_1280.png" alt="Library" className="img-fluid" /> 
        </div>
            <form>
                <div className='form-group'>
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter your Username" />
                    <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className='form-group'>
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
                </div>
                <div className="form-check">
                    <label className="form-check-label" for="rememberMe">Remember Me</label>
                    <input type="checkbox" className="form-check-input" id="rememberMe" /> 
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-success">Login</button>
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
                <div className="mb-3">
                    <p>New here? SingUp below!</p>
                    <button type="button" className="btn btn-primary">SignUp</button>
                </div>
            </form>
        </div>

    );
}
export default Login;