import './App.css';
// import Signin from './pages/sign_in';
// import SignUp from './pages/sign_up';
import ForgotPassword from './pages/forgot_password';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routers";
import MyContextProvider from "./pages/MyContextProvider";
import ProductDetails from './pages/product_details';
import ContactPage from './pages/contactpage';

function App() {
  return (
   
    <MyContextProvider>
     <Router >
      <div>
        <Routes />
      </div>
    </Router>
    </MyContextProvider>
    

  );
}

export default App;
