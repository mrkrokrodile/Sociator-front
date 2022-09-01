import React from 'react';
import img from '../img/profil_logo.png';
import close from '../img/close.png';
import home from '../img/home.png';
import friend from '../img/friend.png';
import settings from '../img/settings.png';
import { useNavigate } from 'react-router-dom';

const Menu_navbar = () => {
	const [post, setPost] = React.useState([]);
	const [message, setMessage] = React.useState('');
	const navigate = useNavigate();

	const publishPost = () => {
		console.log('message', message);
		const request = {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message }),
		};
		console.log('req', request);

		fetch('http://localhost:5000/post', request)
			.then((response) => response.json())
			.then((content) => setPost([content, ...post]))
            .then(window.location.reload())
			.catch((err) => console.error(err))
	};

	const on = () => {
		document.getElementById('overlay').style.display = 'block';
	};

	const off = () => {
		document.getElementById('overlay').style.display = 'none';
	};

	const logout = () => {
		fetch('http://localhost:5000/auth/logout', {
			method: 'GET',
			credentials: 'include',
		})
			.then((res) => (res.ok ? navigate('/') : null))
			.catch((err) => console.log(err));
	};

	return (
		<span id="navbar">
			<div id="overlay">
				<div className="commenter">
					<button
						type="image"
						id="close_btn"
						onClick={() => off()}
					>
						<img
							id="img_close_btn"
							src={close}
						></img>
					</button>

					<div id="container_omment">
						<textarea
							onChange={(e) => setMessage(e.target.value)}
							type="text"
							placeholder="Ecriver votre commentaire..."
							id="textOverlay"
						></textarea>
					</div>
					<button
						onClick={() => publishPost()}
						className="button publier_color"
					>
						Publier !
					</button>
				</div>
			</div>

			<div id="menu" className='responsive'>
				<div id="menu_navbar">
					<a className='sous_menu'>
						<img
							className="logo_menu"
							src={home}
						/>
						Home
					</a>
					<a className='sous_menu'>
						<img
							className="logo_menu"
							src={friend}
						/>
						Followers
					</a>
					<a className='sous_menu'>
						<img
							className="logo_menu"
							src={settings}
						/>
						Settings
					</a>
				</div>

				<div id="profile">
					<button
						onClick={() => on()}
						id="menu_button"
					>
						Poster !
					</button>

					<button
						onClick={() => logout()}
						id="deconnexion"
					>
						deconnexion
					</button>
				</div>
			</div>
		</span>
	);
};

export default Menu_navbar;
