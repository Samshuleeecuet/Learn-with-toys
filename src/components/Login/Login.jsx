import React from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
    };    

   
    return (
        <div className='mt-14 lg:my-28'>
            <h2 className='text-center text-2xl font-extrabold pb-10 '>Login Page</h2>
            <div  className='ml-[45%]'>
            <div className="flex flex-col w-2/5 border-opacity-50">
  <div className="grid rounded-box place-items-center">
            <form className='border-2 p-5 rounded-lg w-full' onSubmit={handleSubmit(onSubmit)}>
               
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue="" type='email' placeholder='Enter Your Email' {...register("email",{required: true})} required/>
               <br/>
              
               <input className='border rounded-lg h-12 w-72 mb-4 pl-4 border-blue-400' defaultValue="" placeholder='Enter Your Password' {...register("password",{required: true})} required />
               <br/>
               <p className='pb-4'>Don't have an account? <Link className='link-hover' to='/register'>Register</Link></p>
               
               <input className='btn btn-primary' type="submit" value="Login" />
               <div className="divider">OR</div>
               <div className="flex btn btn-primary justify-center h-12 rounded-box place-items-center"><FaGoogle/> <span className='ml-2 font-bold'>Login with Google</span></div>
           </form>
           </div>
  
</div>
    </div>
        
        
        </div>
    );
};

export default Login;