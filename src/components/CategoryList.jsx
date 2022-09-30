import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import AppContext from '../context/AppContext';

import { motion, AnimatePresence } from 'framer-motion';

function CategoryList() {
	const { piceActive, pice, piceEng, hrana, hranaEng, currentLanguage } =
		useContext(AppContext);

	// ----- Pice section -----

	if (piceActive) {
		return currentLanguage === 'hr' ? (
			<div className="category-container">
				{pice.map((pice) => {
					return (
						<motion.div
							key={'pice' + pice.id}
							className="category-flex"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1, times: [0, 0.4, 1] }}
						>
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
						</motion.div>
					);
				})}
			</div>
		) : (
			<div className="category-container">
				{piceEng.map((pice) => {
					return (
						<motion.div
							key={'pice' + pice.id}
							className="category-flex"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, times: [0, 0.4, 1] }}
						>
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
						</motion.div>
					);
				})}
			</div>
		);
		// ----- Hrana section -----
	} else {
		return currentLanguage === 'hr' ? (
			<div className="category-container">
				{hrana.map((hrana) => {
					return (
						<motion.div
							key={'hrana' + hrana.id}
							className="category-flex"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1, times: [0, 0.4, 1] }}
						>
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
						</motion.div>
					);
				})}
			</div>
		) : (
			<div className="category-container">
				{hranaEng.map((hrana) => {
					return (
						<motion.div
							key={'hrana' + hrana.id}
							className="category-flex"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1, times: [0, 0.4, 1] }}
						>
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
						</motion.div>
					);
				})}
			</div>
		);
	}
}

export default CategoryList;
