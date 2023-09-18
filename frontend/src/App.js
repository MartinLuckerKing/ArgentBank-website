import './App.css';
import Footer from "./containers/Layout/Footer"
import Header from "../src/containers/Layout/Header";
import store from "./store/configureStore"
import {AppRoutes} from "./components/Router/Routes"

function App() {

  const token = localStorage.getItem('authToken');
  const username = localStorage.getItem('USERNAME');

  if (token) {
    store.dispatch({ type: "SET_TOKEN", payload: token });
}

if (username) {
    store.dispatch({ type: "SET_USERNAME", payload: username });
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
