import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import AppContext from '../context/AppContext';

function CategoryList() {
	const { piceActive, pice, piceEng, hrana, hranaEng, currentLanguage } =
		useContext(AppContext);
	// Implement later
	if (piceActive) {
		return currentLanguage === 'hr' ? (
			<div className="category-container">
				{pice.map((pice) => {
					return (
						<div className="category-flex">
							<Link
								key={pice.id}
								to={`/pice/${pice.id}`}
								className="category-list-link"
							>
								<Category
									key={pice.id}
									item={pice.name}
									img={pice.img}
									content={pice.content}
								></Category>
							</Link>
						</div>
					);
				})}
			</div>
		) : (
			<div className="category-container">
				{piceEng.map((pice) => {
					return (
						<div className="category-flex">
							<Link
								key={pice.id}
								to={`/pice/${pice.id}`}
								className="category-list-link"
							>
								<Category
									key={pice.id}
									item={pice.name}
									img={pice.img}
									content={pice.content}
								></Category>
							</Link>
						</div>
					);
				})}
			</div>
		);
	} else {
		return currentLanguage === 'hr' ? (
			<div className="category-container">
				{hrana.map((hrana) => {
					return (
						<div className="category-flex">
							<Link
								key={hrana.id}
								to={`/hrana/${hrana.id}`}
								className="category-list-link"
							>
								<Category
									key={hrana.id}
									item={hrana.name}
									img={hrana.img}
									content={hrana.content}
								></Category>
							</Link>
						</div>
					);
				})}
			</div>
		) : (
			<div className="category-container">
				{hranaEng.map((hrana) => {
					return (
						<div className="category-flex">
							<Link
								key={hrana.id}
								to={`/hrana/${hrana.id}`}
								className="category-list-link"
							>
								<Category
									key={hrana.id}
									item={hrana.name}
									img={hrana.img}
									content={hrana.content}
								></Category>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CategoryList;
