
import { Provider } from 'react-redux';
// @ts-ignore
import Compose from './components/compose/compose.jsx';
// @ts-ignore
import store from './store/store.js'
import './index.scss';



function App() {
  return (
    <Provider store={store} >
      <Compose></Compose>
    </Provider>
  );
}

export default App;
