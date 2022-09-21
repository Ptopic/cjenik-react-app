import hrIcon from './images/hr.png';
import engIcon from './images/eng.png';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function Header() {
	const { currentLanguage, setCurrentLanguage } = useContext(AppContext);
	const changeLanguage = () => {
		if (currentLanguage === 'hr') {
			setCurrentLanguage('en');
		} else {
			setCurrentLanguage('hr');
		}
	};

	return (
		<div className="flex">
			<h1 className="logo">River</h1>
			<button onClick={() => changeLanguage()} className="languageBtn">
				{currentLanguage === 'hr' ? (
					<img src={hrIcon} alt="lng" className="languageImg"></img>
				) : (
					<img src={engIcon} alt="lng" className="languageImg"></img>
				)}
			</button>
		</div>
	);
}

export default Header;
