import './App.css';
import Footer from "./containers/Layout/Footer"
import Header from "../src/containers/Layout/Header";

import {AppRoutes} from "./components/Router/Routes"

function App() {
  return (
    <div className="App">
      <Header/>
        <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;
