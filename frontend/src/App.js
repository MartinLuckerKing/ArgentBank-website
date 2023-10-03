import './App.css';
import Footer from "./containers/Layout/Footer"
import Header from "../src/containers/Layout/Header";
import store from "./store/configureStore"
import { SET_TOKEN } from './store/actions/actionTypes';
import {AppRoutes} from "./components/Router/Routes"

function App() {

  const token = localStorage.getItem('authToken');

  if (token) {
    store.dispatch({ type: SET_TOKEN, payload: token });
}

  return (
    <div className="App">
      <Header/>
        <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;
