import logo from './logo.svg';
import './App.css';
import Approuter from './config/router';
import { Provider } from 'react-redux';
import store from './config/redux/store/store';
function App() {
  return (
   <>
   <Provider store={store}>
   <Approuter/>
   </Provider>
   </>
  );
}

export default App;
