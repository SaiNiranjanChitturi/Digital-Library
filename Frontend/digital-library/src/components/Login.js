import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Login() {
    return (
        <form>
            <div className='mb-3'>
                <label for="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your Username" />
            </div>
            <div className='mb-3'>
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
            </div>
            <div className="form-check mb-3">
                <label className="form-check-label" for="rememberMe">Remember Me</label>
                <input type="checkbox" className="form-check-input" id="rememberMe" /> 
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-secondary">Cancel</button>
            </div>
            <div className="mb-3">
                <p>New here? SingUp below!</p>
                <button type="button" className="btn btn-secondary">SignUp</button>
            </div>
        </form>

    );
}