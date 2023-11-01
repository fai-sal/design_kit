import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
/**
 * Internal dependencies
 */
import Builder from './components';

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<Builder />
		</DndProvider>
	)
}

export default App
