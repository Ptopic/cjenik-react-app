import AppContext from '../context/AppContext';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { useContext } from 'react';

function Footer() {
	const { currentLanguage } = useContext(AppContext);
	return currentLanguage === 'hr' ? (
		<footer className="footer">
			<div className="footer-icons">
				<a href="https://www.facebook.com/profile.php?id=100054423162174">
					<FaFacebookSquare size={45} className="facebook-icon" />
				</a>

				<a href="https://www.instagram.com/river_pizzeria_restoran/">
					<FaInstagram size={45} className="instagram-icon" />
				</a>
			</div>

			<div className="footer-warning-container">
				<p>
					Zabranjuje se usluživanje alkoholnih pića, drugih pića i/ili napitaka
					koji sadržavaju alkohol osobama mlađima od 18 godina.
				</p>
			</div>

			<div className="copyright-container">
				<p>Copyright ©2022 River | Sva prava pridržava</p>
			</div>
		</footer>
	) : (
		/* TODO fix english footer version */
		<footer className="footer">
			<div className="footer-icons">
				<a href="https://www.facebook.com/profile.php?id=100054423162174">
					<FaFacebookSquare size={45} className="facebook-icon" />
				</a>

				<a href="https://www.instagram.com/river_pizzeria_restoran/">
					<FaInstagram size={45} className="instagram-icon" />
				</a>
			</div>

			<div className="footer-warning-container">
				<p>
					Eng: Zabranjuje se usluživanje alkoholnih pića, drugih pića i/ili
					napitaka koji sadržavaju alkohol osobama mlađima od 18 godina.
				</p>
			</div>

			<div className="copyright-container">
				<p>Copyright ©2022 River | Sva prava pridržava</p>
			</div>
		</footer>
	);
}

export default Footer;
