import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyle } from './global-styles';
import 'normalize.css';

render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
