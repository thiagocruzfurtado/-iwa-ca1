import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <BrowserRouter>

        <div className="container">
            <Header />
            <Navbar />
        </div>

        <Switch>
            <Route exact path="/" component={() => <Home />} />
        </Switch>

        <Footer />
    </BrowserRouter>
);

export default Routes;