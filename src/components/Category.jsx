import Card from './shared/Card';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Img from 'react-cloudinary-lazy-image';

function Category({ item, img }) {
	const { piceActive } = useContext(AppContext);

	return piceActive ? (
		<Card>
			<div className="left-category">
				<img src={require(`./images/pice/${img}.png`)} alt="" loading="lazy" />
			</div>
			<div className="right-category">
				<h2 className="category-text">{item}</h2>
			</div>
		</Card>
	) : (
		<Card>
			<div className="left-category">
				<img src={require(`./images/hrana/${img}.png`)} alt="" />
			</div>
			<div className="right-category">
				<h2 className="category-text">{item}</h2>
			</div>
		</Card>
	);
}

export default Category;
