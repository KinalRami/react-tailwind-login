import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from './redux/action';

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' })
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state?.userReducer);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("values", values);
        dispatch(signin(values))
    };
    return (
        <>
            <div className='flex flex-col md:flex-row h-screen items-center'>
                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src="/loginn.jpg" alt="login" className="w-full h-full object-cover"></img>
                </div>
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                                flex items-center justify-center">
                    <div className="w-full h-100">
                        <span className="text-xl md:text-3xl font-bold leading-tight mt-12 mb-20">Login</span>

                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <label className=" mt-10 block text-gray-700">Email Address</label>
                                <input type="email" name='email'
                                    value={values.email}
                                    placeholder='mike@gmail.com'
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name='password'
                                    value={values.password}
                                    placeholder='Enter Your Password'
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                                focus:bg-white focus:outline-none"  />
                            </div>

                            <div className='flex justify-center items-center mt-6'>
                                <button type="submit" className="bg-blue py-2 px-4 text-sm text-white rounded border border-blue focus:outline-none focus:border-blue-dark">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <p>userName :: {userData.email}</p>
                <p>Password :: {userData.password}</p>
            </div>
        </>

    );

};

export default Login;