import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Tasks from "./components/Tasks";


function App(){
    return(
        <main>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/tasks" component={Tasks}/>
                <Route component={Error} />
            </Switch>
        </main>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)