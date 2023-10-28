import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

/**
 * Internal dependencies.
 */
import App from './App.tsx'
import './scss/main.scss';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
)
