import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { isAuthenticated, redirectToLoginIfNotAuthenticated, login_url } from './../util/Auth';
import logo from './../assets/images/logo.svg';
import HomeSearch from "../components/HomeSearch";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secsToRedirect: 10
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.redirectToLogin()
        }, 1000);
    }

    redirectToLogin() {
        if (this.state.secsToRedirect === 0) {
            redirectToLoginIfNotAuthenticated();
            return true;
        }

        this.setState({
            secsToRedirect: this.state.secsToRedirect - 1
        })
    }

    render() {
        return (
            <div className="vh-100 dt w-100">
                <div className="dtc v-mid tc">
                    <h1 id="logo" className="mb5">
                        <span className="sr-only">GithubStars</span>
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </h1>
                    {isAuthenticated() ?
                        <HomeSearch />
                    :
                        <p className="f3 lh-copy">
                            Sigin to use the app! <br/>
                            You will be redirected in {this.state.secsToRedirect}
                            <br/>
                            <span className="f6">or <a href={login_url}>click here</a> here to redirect now</span>
                        </p>
                    }
                </div>
            </div>
        );
    }
}

export default Home;
