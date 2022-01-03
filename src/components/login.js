import React, { useEffect, useState } from 'react';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'; 
import { useNavigate } from "react-router-dom";


const Login = () => {

   
    const [email, setEmail]= useState('');
    const [password, setValue] = useState('');
    const navigate = useNavigate();
 

    const handleSubmit = async (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({email, password})
        })
        .then(response => response.json())
        .then(content => {
            if(content) {
                navigate('/home')
            } else {
                return (err)
            }
    })
    .catch(err => console.error(err))
}

    
    return (
        <div id="background-auth">
            <div id="main-auth">
            <form onSubmit={handleSubmit} className="card">

                <h5>Email ou Pseudo</h5>
                <div className="p-field">
                    <label htmlFor="username2" className="p-d-block"></label>
                    <InputText onChange={(e) => setEmail(e.target.value)} id="username2" aria-describedby="username2-help" className="p-d-block pseudo" />
                    {/* <small id="username2-help" className="p-error p-d-block">L'email ou le pseudo n'est pas disponible.</small> */}
                </div>
           
                <h5>Mot de passe</h5>
                <Password value={password} onChange={(e) => setValue(e.target.value)} feedback={false} toggleMask />
                 <div  id="register-footer">
                <Button type="submit" className="buttonregister p-button-danger" label="Login" />
                <Button type="submit" onClick={() => navigate('/register')} className="buttonregister p-button-success" label="Register" />
                </div>
            </form>

               
               
           
            
        </div>
        </div>
       
    );
}

export default Login