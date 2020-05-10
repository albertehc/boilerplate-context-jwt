import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Signup } from "./pages/Signup/Signup";
import { Login } from "./pages/Login/Login";
import { Edit } from "./pages/Edit/Edit";
import { Routes } from "./constants/";
import { AnonRoute } from "./routes/AnonRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
import { useAuthContext } from "./context/auth/authContext";
import { me } from "./api/auth.api";
import { setUserAction } from "./context/auth/authActions";
import Loader from 'react-loader-spinner'

const App = () => {
  const [{ logged,loading }, dispatch] = useAuthContext();
  useEffect(() => {
    if (!logged) {
      me().then((res) => dispatch(setUserAction(res)));
    }
    // eslint-disable-next-line
  }, []);
  console.log(loading)
  if (loading) return <><Loader color='#158AFF' className='loader' type='ThreeDots'/></>
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <AnonRoute exact path={Routes.LOGIN} component={Login} />
        <AnonRoute exact path={Routes.SIGNUP} component={Signup} />
        <PrivateRoute exact path={Routes.EDIT} component={Edit} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
