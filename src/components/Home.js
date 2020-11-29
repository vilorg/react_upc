import React from "react";
import './Home.css'
import Image from "../static/home.jpg"
import {createBrowserHistory} from "history"


const email = "admin"
const password = "admin"


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', pwd: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.login === 'admin' && this.state.pwd === password){
            this.props.history.replace({pathname: `/tasks`})
        } else {
            alert("Not correct login or password!")
        }
    }

    render() {
        return(
            <div>
                <div className={"container"}>
                    <div>
                        <h1>Welcome to a todo app!</h1>
                        <form onSubmit={this.handleSubmit}>
                            <h3>Email</h3>
                            <input type="text" className={'inp'} id='log' value={this.state.value}/>
                            <h3>Password</h3>
                            <input type="text" className={'inp'} id='pass' value={this.state.pwd}/>
                            <br/>
                            <input type="submit" value='Login' className={"login"}/>
                        </form>
                    </div>
                </div>
                <div className={'box'}>
                    <img src={Image} alt="image"/>
                </div>
            </div>
        );
    }
}

export default Home