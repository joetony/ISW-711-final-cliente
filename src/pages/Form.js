import React, { Component, useState } from 'react';
import { saveSession } from '../services/sessionService';
import { getUser } from '../services/userService';
import { getRole } from '../services/roleService';
import { getSession } from '../services/sessionService';


import VerifyPhoneCodeModal from "../components/VerifyPhoneCodeModal";

import { login2FA,passwordLess } from "../services/authService";



class Form extends Component {


    state = {       
        form: {
            email: '',
            password: '',
            
        
        },
        openModal: false
    }
    componentDidMount() {

        localStorage.removeItem('token');
        //localStorage.removeItem('expiration');
       
    }


    postSession = async(e) => {
    e.preventDefault()

    this.setState({ isLoading: true });
    this.state.form.email = e.target.email.value;
    this.state.form.password = e.target.password.value;
    console.log("this.state.form");
    console.log(this.state.form);
    //const form = await getUser(this.state.form);
    const form = await login2FA(this.state.form);
    
    console.log("form");
    console.log(form);
    
    //const form = await saveSession(this.state.form);
    if (!form.error) {
        
        console.log("user found");
        console.log(form.data);
        this.setState({ openModal: true })

        
       /*
        const session=await saveSession(form.data);

        console.log("session.data");
        console.log(session.data);
        if (!session.error) {
            console.log("session saved");
            this.setState({ isLoading: false });
            this.gettingSession();
            

        }else{
            console.log("session not returned");
        }*/

        
        //window.location.reload();
    }else{
        console.log("user not found");
        alert("Username or password incorrect, please try again!");
     
    }
   

    //verifyRegister(Email, Password)
}

passwordLessAccess= async () => {
    const email = document.getElementById("email").value;

    if(email===''){
        alert("Debe ingresar un correo electrónico!")

    }else{
        const form = await passwordLess(email);
        console.log("form");
        console.log(form);}

    
}


gettingSession = async () => {
    this.setState({ isLoading: true });
    const user=await getSession();
    
    await getRole(user.data.role._id);
    
    this.setState({ isLoading: false });
}


handleCloseModal = () => {
    this.setState({ openModal: false });
}



render(){
    return (
        <div className="container mx-auto centar">
            <div className="flex justify-center px-12 my-12">
                <div className="content-ce">
                    <div className="bg-white p-5 rounded-lg lg:rounded-l-none content-center">
                        <h3 className="pt-4 text-2xl text-center">Welcome back!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={this.postSession} method="POST">

                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-violet-500 rounded-full hover:bg-violet-600 focus:outline-none focus:shadow-outline"
                                        type="sumbit"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            <hr className="mb-6 border-t" />
                            <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-violet-500 rounded-full hover:bg-violet-600 focus:outline-none focus:shadow-outline"
                                        type="button" onClick={this.passwordLessAccess}
                                    >
                                        Passwordless access!
                                    </button>
                                </div>
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-violet-500 align-baseline hover:text-violet-600"
                                    href="/register"
                                >
                                    If you don't have an account Sign up!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <VerifyPhoneCodeModal openModal={this.state.openModal} handleCloseModal={this.handleCloseModal} email={this.state.email} />
        </div>
    )
}
}
export default Form;
