import React, {  useState } from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import { useAuth } from './useAuth';


const Login = () => {

    const [returningUser, setReturningUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const auth = useAuth();

    const onSubmit = data => { 
        if(returningUser){
            if(data.email && data.password){
                auth.signIn(data.email, data.password)
                .then(res=>{
                    window.location.pathname='/dashboard';
                })
            }
        }else{
            if(data.name && data.email && data.password && data.confirm_password){
                auth.signUp(data.email, data.confirm_password,data.name)
                .then(res=>{
                    window.location.pathanme='/payment';
                })
            }
        }
     }



    return (
        <div className="login">
            <div className="container">

              <div className="signup">
               
               { returningUser ?

                <form onSubmit={handleSubmit(onSubmit)}>

                <h3 className="text-center">Log In</h3>
                {
                    auth.user !=null && <p classsName="text-danger">* {auth.user.error}</p>
                }
                <div className="form-group">
                <input name="email" className="form-group" ref={register({ required: true })} placeholder="email" />
                {errors.email && <span>Email is required</span>}
                </div>    

                <div className="form-group">
                <input type="password" name="password" className="form-group" ref={register({ required: true })} placeholder="password" />
                {errors.password && <span>Password is required</span>}
                </div> 

                <input type="submit" />

                <div className="option text-center mt-2">
                <label  onClick={() => setReturningUser(false)}><h4>Create a new Account</h4></label>
                </div>
                
                </form>
                
                :
                
                <form onSubmit={handleSubmit(onSubmit)}>

                <h3 className="text-center">Create your account</h3>
                {
                    auth.user !=null && <p classsName="text-danger">* {auth.user.error}</p>
                }
                <div className="form-group">
                <input name="name" className="form-group" ref={register({ required: true })} placeholder="name" />
                {errors.name && <span>Name is required</span>}
                </div>    

                <div className="form-group">
                <input name="email" className="form-group" ref={register({ required: true })} placeholder="Email" />
                {errors.email && <span>Email is required</span>}
                </div>    

                <div className="form-group">
                <input type="password" name="password" className="form-group" ref={register({ required: true })} placeholder="Password" />
                {errors.password && <span>Password is required</span>}
                </div> 

                <div className="form-group">
                <input type="password" name="confirm_password" className="form-group" ref={register({
                validate: (value) => value === watch('password')
                })} placeholder="Confirm password" />
                {errors.confirm_password && <span>confirm Password is required</span>}
                </div>   

                <input type="submit"/>
                <div className="option text-center mt-2">
                <label onClick={()=> setReturningUser(true)}><h4>Already Have an Account</h4></label>
                </div>
                </form>
                }
                

                </div>
                

            </div>
        </div>
    );
};

export default Login;