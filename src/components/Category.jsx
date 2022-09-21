import Card from './shared/Card';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function Category({ item, img }) {
	const { PiceData, piceActive, HranaData, hranaActive } =
		useContext(AppContext);
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
