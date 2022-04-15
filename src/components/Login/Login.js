import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';
const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Please Login...</h1>
            <div className='google-signin'>


                <button className='btn' onClick={signInWithGoogle} > Google Sign in</button>


            </div>

            <form>

                <input type="email" name="" placeholder='Enter Your Email' id="" />
                <br />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;