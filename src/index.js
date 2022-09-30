import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

// Check if HMR interface is enabled
if (module.hot) {
	// Accept hot update
	module.hot.accept();
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,

	document.getElementById('root')
);
