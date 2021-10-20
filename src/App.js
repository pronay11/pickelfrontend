import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import ProductContextProvider from './Global/ProductContext';
import cart from "./components/Cart"; 
import NotFound from './components/NotFound';
import CartContextProvider from './Global/CartContext';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
        <BrowserRouter>
         <Navbar/>
        <Switch>
          <Route path="/" exact component={Products}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/about" exact component={About}/>
          <Route path="/cart" exact component={cart}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>  
       </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
