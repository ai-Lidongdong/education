import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Index from './pages/Index'
import Cart from './pages/Cart'
import Mine from './pages/Mine'
import Login from './pages/Login'
import Class from './pages/Class'
import Seek from './pages/Seek'
import Detail from './pages/Detail'


import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Index} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Mine" component={Mine} />
            <Route path="/Class" component={Class} />
            <Route path="/Login" component={Login} />
            <Route path="/Seek" component={Seek} />
            <Route path="/Detail" component={Detail}/>
        </div>
    </Router>,
    document.getElementById("root")
);

document.getElementById('root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();