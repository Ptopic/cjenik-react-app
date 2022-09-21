import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function Switch() {
	const { hranaActive, setHranaActive, piceActive, setPiceActive } =
		useContext(AppContext);

	return (
		<div className="groups">
			<Link
				to="/hrana"
				onClick={() => {
					if (hranaActive) {
						return;
					} else {
						setHranaActive(!hranaActive);
						setPiceActive(!piceActive);
					}
				}}
			>
				<p className={`hrana ${hranaActive ? 'active' : ''}`}>Hrana</p>
			</Link>
			<Link
				to="/"
				onClick={() => {
					if (piceActive) {
						return;
					} else {
						setHranaActive(!hranaActive);
						setPiceActive(!piceActive);
					}
				}}
			>
				<p className={`pice ${piceActive ? 'active' : ''}`}>Piće</p>
			</Link>
		</div>
	);
}

export default Switch;
