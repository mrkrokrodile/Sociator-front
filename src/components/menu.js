import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Avatar } from 'primereact/avatar';
import img from '../img/profil_logo.png';
import close from '../img/close.png';
import { Button } from 'primereact/button';
// import { Carte } from 'card.js'
// import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends";

const Menu = () => {
	const [post, setPost] = React.useState([]);
	const [message, setMessage] = React.useState('');

	const items = [
		{ label: 'Home', icon: 'pi pi-fw pi-home' },
		{ label: 'Followers', icon: 'pi pi-fw pi-users' },
		{ label: 'Profile', icon: 'pi pi-fw pi-user' },
	];

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
			.catch((err) => console.error(err));
	};

	const on = () => {
		document.getElementById('overlay').style.display = 'block';
	};

	const off = () => {
		document.getElementById('overlay').style.display = 'none';
	};

	return (
		<span id="navbar">
			<div id="overlay">
				<div id="commenter">
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
						<input
							onChange={(e) => setMessage(e.target.value)}
							type="text"
							placeholder="Ecriver votre commentaire..."
							id="textOverlay"
						></input>
					</div>
					<button
						onClick={() => publishPost()}
						id="publier_btn"
					>
						Publier !
					</button>
				</div>
			</div>
			<TabMenu model={items} />

			<div id="profile">
				<Button
					id="poster_btn"
					onClick={() => on()}
					label="Poster !"
					className="p-button"
				/>
				<Button
					label="deconnexion"
					className="p-button-danger"
				/>
				<p>Gaetan Beurel</p>
				<Avatar
					id="avatarnavbar"
					image={img}
					size="medium"
					onError={(e) =>
						(e.target.src =
							'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
					}
				/>
			</div>
		</span>
	);
};

export default Menu;
