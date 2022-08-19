import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Users from './components/users';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Users></Users>
    </div>
    </Provider>
    
  );
}

export default App;
