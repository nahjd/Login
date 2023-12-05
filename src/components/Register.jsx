import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className=' bg-white p-3 rounded w-25' >
                <h2>Register</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3"></div>
                    <div>
                        <label htmlFor="name"><b>Name</b></label> <br />
                        <input
                            type="text"
                            placeholder='Enter Name'
                            name='name'
                            onChange={handleInput}
                            className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className="mb-3"></div>
                    <div>
                        <label htmlFor="email"><b>Email</b></label> <br />
                        <input
                            type="email"
                            placeholder='Enter Email'
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className="mb-3"></div>
                    <div>
                        <label htmlFor="password"><b>Password</b></label> <br />
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            onChange={handleInput}
                            className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div> <br />
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                    <p>You are agree to aout terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>


                </form>
            </div>
        </div>
    )
}

export default Register