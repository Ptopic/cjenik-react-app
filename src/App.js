import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from 'react-router-dom';

import AppContext, { AppContextProvider } from './context/AppContext';

import Header from './components/Header';
import Switch from './components/Switch';
import CategoryList from './components/CategoryList';
import PiceData from './data/PiceData';
import HranaData from './data/HranaData';
import ContentList from './components/ContentList';
import Footer from './components/Footer';
function App() {
	return (
		<AppContextProvider>
			<Router>
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<Header />
									<Switch />
									<CategoryList />
									<div className="filler" />
									<Footer />
								</>
							}
						></Route>
						<Route
							path="/hrana"
							element={
								<>
									<Header />
									<Switch />
									<CategoryList />
									<div className="filler" />
									<Footer />
								</>
							}
						/>

						{PiceData.map((pice) => {
							return (
								// Get id with url params and check piceData array with that id in component
								<Route
									key={pice.id}
									path={`/pice/:id`}
									element={<ContentList />}
								></Route>
							);
						})}

						{HranaData.map((hrana) => {
							return (
								// Get id with url params and check piceData array with that id in component
								<Route
									key={hrana.id}
									path={`/hrana/:id`}
									element={<ContentList />}
								></Route>
							);
						})}
					</Routes>
				</div>

				{/* <Card>
				<NavLink to="/" activeClassName="active">
					Home
				</NavLink>
				<NavLink to="/about" activeClassName="active">
					About
				</NavLink>
				</Card> */}
			</Router>
		</AppContextProvider>
	);
}

export default App;
