import React, { useState } from 'react';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';

const Register = () => {
	const [email, setEmail] = useState('');
	const [pseudo, setPseudo] = useState('');
	const [password, setValue] = useState('');
	const [password2, setValue2] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		fetch('http://localhost:5000/auth/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ pseudo, email, password, password2 }),
		})
			.then((response) => response.json())
			.then((content) => {
				if (content) {
					navigate('/');
				} else {
					return err;
				}
			})
			.catch((err) => console.error(err));
			window.alert("password doesn't match")
	};

	return (
		<div id="background-auth">
			<div id="main-auth">
				<form
					onSubmit={handleSubmit}
					className="card"
				>
					<h5>Pseudo</h5>
					<div className="p-field">
						<label
							htmlFor="username"
							className="p-d-block"
						></label>
						<InputText
							onChange={(e) => setPseudo(e.target.value)}
							id="username"
							aria-describedby="username-help"
							className="p-d-block pseudo"
						/>
						{/* <small id="username2-help" className="p-error p-d-block">L'email ou le pseudo n'est pas disponible.</small> */}
					</div>

					<h5>Email</h5>
					<div className="p-field">
						<label
							htmlFor="username2"
							className="p-d-block"
						></label>
						<InputText
							onChange={(e) => setEmail(e.target.value)}
							id="username2"
							aria-describedby="username2-help"
							className="p-d-block pseudo"
						/>
						{/* <small id="username2-help" className="p-error p-d-block">L'email ou le pseudo n'est pas disponible.</small> */}
					</div>

					<h5>Mot de passe</h5>
					<Password
						value={password}
						onChange={(e) => setValue(e.target.value)}
						toggleMask
					/>

					<h5>Validation</h5>
					<Password
						value={password2}
						onChange={(e) => setValue2(e.target.value)}
						toggleMask
					/>

					<div id="register-footer">
						<Button
							type="submit"
							className="buttonregister p-button-success"
							label="Validate"
						/>
						<Button
							type="button"
							onClick={() => navigate('/')}
							className="buttonregister p-button-danger"
							label="Cancel"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
