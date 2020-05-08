import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Signup } from "./pages/Signup/Signup";
import { Login } from "./pages/Login/Login";
import { Edit } from "./pages/Edit/Edit";
import { Routes } from './constants/';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route exact path={Routes.LOGIN} component={Login} />
        <Route exact path={Routes.SIGNUP} component={Signup} />
        <Route exact path={Routes.EDIT} component={Edit} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
