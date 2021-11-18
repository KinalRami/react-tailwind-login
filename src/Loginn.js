import React, { useState } from 'react';
import store from './redux/store';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("values",store.getState() );
        return navigate("/logout",{replace:true})
        // dispatch(signin(values))
    };

    return (
        <>
            <div className='h-screen flex bg-gray-bg1  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl '>

                <div className="min-h-screen bg-no-repeat bg-cover bg-center">
                    <img src="/loginn.jpg" alt="login" className="min-h-screen bg-no-repeat bg-cover bg-center"></img>
                </div>
                <div className='bg-gray-400 w-full  max-w-md m-auto bg-white rounded-lg shadow-default py-10 px-16'>

                    <h1 className='text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold mb-20'>
                        Log in
                    </h1>

                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label className='text-sm font-bold text-gray-700 tracking-wide ml-50'>Email Address</label>
                            <input
                                type='email'
                                className={`w-full py-2 border-b border-gray-300 text-sm focus:outline-none focus:border-indigo-500 mb-4`}
                                name='email'
                                value={values.email}
                                placeholder='Email'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className='text-sm font-bold text-gray-700 tracking-wide'>Password</label>
                            <input
                                type='password'
                                className={`w-full py-2 border-b border-gray-300 text-sm focus:outline-none focus:border-indigo-500 mb-4`}
                                name='password'
                                value={values.password}
                                placeholder='Password'
                                onChange={handleChange}
                            />
                        </div>
                    
                        <div className='flex justify-center items-center mt-6'>
                            <button
                                className={`bg-blue py-2 px-4 text-sm text-white rounded border border-blue focus:outline-none focus:border-blue-dark`}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div>
                <p>UserName :: {userData.email}</p>
                <p>Password :: {userData.password}</p>
            </div> */}
        </>
    );
};

export default Login;