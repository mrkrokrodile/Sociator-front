import { Card } from 'primereact/card';
import PrimeReact from 'primereact/api';
PrimeReact.ripple = true;
import { Button } from 'primereact/button';
import React, { useState, Component } from 'react';
import profil from '../img/profil_logo.png';
import close from '../img/close.png';
import { BsHeart } from 'react-icons/bs';
import { Avatar } from 'primereact/avatar';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Carte = () => {
	const [currentPost, setCurrentPost] = React.useState([]);
	const [post, setPost] = React.useState([]);
	const [message, setMessage] = React.useState('');
	const [text, setText] = React.useState('');
	// const [userPseudo, setUserPseudo] = React.useState("");

	React.useEffect(() => {
		fetch('http://localhost:5000/post', {
			method: 'GET',
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((content) => {
				// console.log(content)
				setPost(content);
			})
			.catch((err) => console.error(err));
	}, []);

	React.useEffect(() => {
		textarea = document.querySelector('#textOverlay');
		textarea.addEventListener('input', autoResize, false);

		function autoResize() {
			this.style.height = 'auto';
			this.style.height = this.scrollHeight + 'px';
		}
	}, []);

	const publishComment = () => {
		console.log('message :', text);
		const request = {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ text }),
		};
		console.log('req', request);

		fetch(`http://localhost:5000/post/comment-post/` + currentPost, request)
			.then((response) => response.json())
			// .then((content) => setPost([content, ...post]))
			.catch((err) => console.error(err));
	};

	const [activeIndex, setActiveIndex] = useState(null);

	const onClick = (itemIndex) => {
		let _activeIndex = activeIndex ? [...activeIndex] : [];

		if (_activeIndex.length === 0) {
			_activeIndex.push(itemIndex);
		} else {
			const index = _activeIndex.indexOf(itemIndex);
			if (index === -1) {
				_activeIndex.push(itemIndex);
			} else {
				_activeIndex.splice(index, 1);
			}
		}
		setActiveIndex(_activeIndex);
	};

	const header = (
		<Avatar
			image={profil}
			size="xlarge"
			onError={(e) =>
				(e.target.src =
					'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
			}
		/>
	);

	const footer = (
		<div id="menu_overlay_button">
			<button
				className="button publier_color"
				onClick={() => onComment(p._id)}
				label="Commenter"
				icon="pi pi-comments"
			>
				Commenter
			</button>
			<button
				className="button like_color"
				label="Like"
				icon="pi pi-heart"
			>
				<img src={<BsHeart />} />
				Liker !
			</button>
		</div>
	);

	const onComment = (idpost) => {
		document.getElementById('overlay_comment').style.display = 'block';
		console.log(idpost);
		setCurrentPost(idpost);
	};

	const offComment = () => {
		document.getElementById('overlay_comment').style.display = 'none';
		setCurrentPost(-1);
	};

	return (
		<div id="mur">
			<div id="overlay_comment">
				<div className="commenter">
					<button
						type="image"
						id="close_btn"
						onClick={() => offComment()}
					>
						<img
							id="img_close_btn"
							src={close}
						></img>
					</button>

					<div id="container_comment">
						<textarea
							onChange={(e) => setText(e.target.value)}
							type="text"
							placeholder="Ecriver votre commentaire..."
							id="textOverlay"
						></textarea>
					</div>
					<button
						onClick={() => publishComment()}
						className="publier_color button"
					>
						Publier !
					</button>
				</div>
			</div>

			{post.map((p, index) => (
				<Card
					key={index}
					title={p.posterId.pseudo}
					subTitle={new Date(p.createdAt).toLocaleDateString('fr-FR')}
					header={header}
					footer={footer}
				>
					<p
						className="p-m-0"
						style={{ lineHeight: '1.5' }}
					>
						{p.message}
					</p>

					<span>
						<Accordion>
							<AccordionTab header="Commentaires">
								{p.comments.map((c, index) => (
									<div
										key={index}
										activeindex={0}
									>
										{/* {console.log(c)} */}
										<h5>{c.commenterPseudo}</h5>
										<p>{c.text}</p>
										<p>{c.timestamp}</p>
									</div>
								))}
							</AccordionTab>
						</Accordion>
					</span>
				</Card>
			))}
		</div>
	);
};
export default Carte;
