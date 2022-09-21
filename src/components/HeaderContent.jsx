import arrowLight from './images/arrow.svg';
import arrowMedium from './images/arrowmd.png';
import { Link } from 'react-router-dom';
function HeaderContent() {
	return (
		<div className="flex-header-content">
			<Link to={'/'} className="arrowHeader-link">
				<img src={arrowLight} alt="" className="arrowIconBack" />
				<img src={arrowMedium} alt="" style={{ visibility: 'hidden' }} />
				{/* <MdArrowBackIos size={30} className="arrowIconBack" /> */}
			</Link>
			{/* <button>lng icon</button> */}
		</div>
	);
}

export default HeaderContent;
