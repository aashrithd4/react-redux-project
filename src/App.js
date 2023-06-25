import './App.css';
import Header from './containers/Header';
import { Routes, Route } from "react-router-dom"
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productID" exact Component={ProductDetail} />
          {/* path="/product/:productId" */}
          <Route>404 Not Found</Route>
        </Routes>
    </div>
  );
}

export default App;
