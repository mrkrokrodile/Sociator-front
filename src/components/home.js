import Carte from './card';
import Menu from './menu';
import Menu_navbar from './navbar';


const Home = () => {
	return (
		<div>
			<div>
				{/* <Menu /> */}
				<Menu_navbar />
			</div>

			<div id="post">
				<Carte />
			</div>
		</div>
	);
};

export default Home;
