import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import Success from "./pages/Success";
// import { CardTravel } from "@material-ui/icons";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
     <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/products/:category">
                <ProductList/>
            </Route>
            <Route path="/product/:id">
                <Product/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="/success">
                <Success/>
            </Route>
            <Route path="/login">
                {user ? <Redirect to="/"/> : <Login/>}
            </Route>
            <Route path="/register">
                {user ? <Redirect to="/"/> : <Register/>}
            </Route>
        </Switch>
     </Router>
  )
};

export default App;