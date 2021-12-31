import logo from './logo.svg';
import './App.css';
import { DataProvider } from "./datacontext/DataContext"
import ProductList from './components/ProductList';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <DataProvider>
      <>
        <Header />
        <div className="App">

          <ProductList />
          <hr></hr>
          <Cart />
        </div>
      </>
    </DataProvider>
  );
}

export default App;
