import { createContext, useState, useEffect } from 'react';
import PiceData from '../data/PiceData';
import PiceDataEng from '../data/PiceDataEng';
import HranaData from '../data/HranaData';
import HranaDataEng from '../data/HranaDataEng';
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [hranaActive, setHranaActive] = useState(false);
	const [piceActive, setPiceActive] = useState(true);
	const [currentLanguage, setCurrentLanguage] = useState('hr');

	let pice = PiceData;
	let hrana = HranaData;

	let piceEng = PiceDataEng;
	let hranaEng = HranaDataEng;

	return (
		<AppContext.Provider
			value={{
				PiceData,
				pice,
				piceEng,
				HranaData,
				hrana,
				hranaEng,
				hranaActive,
				setHranaActive,
				piceActive,
				setPiceActive,
				currentLanguage,
				setCurrentLanguage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
