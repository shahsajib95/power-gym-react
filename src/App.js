import React, { useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Pricing from './Component/Pricing/Pricing';
import Footer from './Component/Footer/Footer';
import Personpayment from './Component/Personpayment/Personpayment';
import Payment from './Component/Payment/Payment';
import Dashboard from './Component/Customerpage/Dashboard';
import Login from './Component/Login/Login';
import { PrivateRoute, AuthProvider } from './Component/Login/useAuth';
export const DataContext = createContext();

const App = () => {

  const [plan, setPlan] = useState([]);
  const [payMethod, setPayMethod] = useState(null);
  const [formInfo, setFormInfo] = useState(null);


  const contextData = { plan, setPlan, payMethod, setPayMethod, formInfo, setFormInfo }


  return (
    <div>
      <AuthProvider>
        <DataContext.Provider value={contextData}>
          <Header></Header>
          <Router>
            <Switch>

              <Route path="/pricing">
                <Pricing></Pricing>
              </Route>
              <PrivateRoute exact path="/payment">
                <Personpayment></Personpayment>
              </PrivateRoute>
              <Route exact path="/finalpay">
                <Payment ></Payment>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route exact path="/">
                <Pricing></Pricing>
              </Route>

            </Switch>
          </Router>
          <Footer></Footer>
        </DataContext.Provider>
      </AuthProvider>
    </div>
  );
};

export default App;