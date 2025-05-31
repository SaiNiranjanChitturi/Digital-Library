import React, { useState } from 'react';
import Logo from '../images/digital-library-logo.png';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8085/api/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            console.log('Registration successful:', response.data);
            window.location.href = '/login';
            
        } catch (error) {
            console.error('Error:', error);
            setError(error.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

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
            <div className="shadow-lg bg-white text-white p-4 rounded shadow" style={{ 
                width: 'min(90%, 420px)',
                height: 'min(90vh, 620px)',
                margin: '20px auto',
                overflowY: 'auto'
            }}>
                <h2 className="text-center mt-3" style={{ color: '#0074d9' }}>Create Account</h2>
                <div className="text-center mb-3">
                    <img src={Logo} alt="Library" height="80px" width="80px" className="img-fluid" />
                </div>
                <form onSubmit={handleSubmit} className="mt-4 d-flex flex-column h-100">
                    <div className="flex-grow-1">
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label" style={{ color: '#0074d9', fontWeight: 'bold' }}>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label" style={{ color: '#0074d9', fontWeight: 'bold' }}>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label" style={{ color: '#0074d9', fontWeight: 'bold' }}>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword" className="form-label" style={{ color: '#0074d9', fontWeight: 'bold' }}>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        {error && (
                            <div className="alert alert-danger mt-3 text-center">
                                {error}
                            </div>
                        )}
                    </div>
                    <div className="mt-auto">
                        <div className="mb-3 d-flex gap-2">
                            <button type="submit" className="btn btn-success w-100" disabled={isLoading}>
                                {isLoading ? "Registering..." : "Register"}
                            </button>
                        </div>
                        <div className="text-center">
                            <p style={{ color: '#0074d9', fontWeight: 'bolder', margin: '8px 0' }}>
                                Already have an account?
                            </p>
                            <button 
                                type="button" 
                                className="btn btn-primary w-100"
                                onClick={() => window.location.href = '/login'}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;