import AppContext from '../context/AppContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Switch from '../components/Switch';
import HeaderContent from './HeaderContent';
function ContentList() {
	const { piceActive, pice, hrana, piceEng, hranaEng, currentLanguage } =
		useContext(AppContext);
	let { id } = useParams();

	let eurRate = 7.5345;

	const convertToEur = (price) => {
		let eurPrice = Math.trunc((price / eurRate) * 100) / 100;
		return eurPrice;
	};

	if (piceActive) {
		// CHange pice to pice eng if language is english
		let data;
		if (currentLanguage === 'hr') {
			data = pice[id - 1];
		} else {
			data = piceEng[id - 1];
		}
		let length = data.content.length;
		let piceNames = [];
		let picePrices = [];
		let piceQnt = [];
		let picePricesEur = [];
		for (let i = 0; i < length; i++) {
			piceNames.push(Object.values(data.content[i])[0]);
			picePrices.push(Object.values(data.content[i])[1]);
			piceQnt.push(Object.values(data.content[i])[2]);
			picePricesEur.push(convertToEur(picePrices[i]));
		}
		return (
			<div>
				<HeaderContent />
				<Switch />
				<div className="content-container">
					<h1>{data.name}</h1>
					<AnimatePresence>
						{piceNames.map((el, index) => (
							<motion.div
								className="content-card"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 1, times: [0, 0.4, 1] }}
							>
								<div className="left">
									<h3 className="content-list-text">{el}</h3>
									<p className="quantity">{piceQnt[index]}</p>
								</div>

								<div className="right">
									<h3 className="content-list-text-price">
										{picePrices[index] + ' kn'}
									</h3>
									<p className="price-eur">{picePricesEur[index] + ' €'}</p>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		);
	} else {
		let data;
		if (currentLanguage === 'hr') {
			data = hrana[id - 1];
		} else {
			data = hranaEng[id - 1];
		}
		let length = data.content.length;
		let hranaNames = [];
		let hranaPrices = [];
		let hranaQnt = [];
		let hranaPricesEur = [];
		for (let i = 0; i < length; i++) {
			hranaNames.push(Object.values(data.content[i])[0]);
			hranaPrices.push(Object.values(data.content[i])[1]);
			hranaQnt.push(Object.values(data.content[i])[2]);
			hranaPricesEur.push(convertToEur(hranaPrices[i]));
		}
		return (
			<div>
				<HeaderContent />
				<Switch />
				<div className="content-container">
					<h1>{data.name}</h1>
					<AnimatePresence>
						{hranaNames.map((el, index) => (
							<motion.div
								className="content-card"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 1, times: [0, 0.4, 1] }}
							>
								<div className="left">
									<h3 className="content-list-text">{el}</h3>
									<p className="quantity">{hranaQnt[index]}</p>
								</div>

								<div className="right">
									<h3 className="content-list-text-price">
										{hranaPrices[index] + ' kn'}
									</h3>
									<p className="price-eur">{hranaPricesEur[index] + ' €'}</p>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		);
	}
}

export default ContentList;
