import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewPost from "../pages/Posts/NewPost";
import EditPost from "../pages/Posts/EditPost";
import Login from "../pages/Login";
import Post from "../pages/Posts/Post";
import Posts from "../pages/Posts";
import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

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
            <Route path="/about" component={() => <About /> } />
            <Route exact path="/" component={() => <Home />} />
            <Route path="/login" component={() => <Login />} />
            <PrivateRoute path="/posts/new" component={() => <NewPost />} />  
            <PrivateRoute path="/posts/:id/edit" component={() => <EditPost />} />
            <Route path="/posts/:id" component={() => <Post />} />
            <Route path="/posts" component={() => <Posts/>} /> 
            <Route path="/register" component={() => <Register />} />
            <Route path="*" component={() => <NotFound />} />
        </Switch>

        <Footer />
    </BrowserRouter>
);

export default Routes;