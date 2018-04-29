import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { redirectToLoginIfNotAuthenticated } from './../util/Auth';

import Header from './Header';
import UserCard from "../components/UserCard";
import RepositorieList from "../components/RepositorieList";

class RepositoresListPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="main-content center">
                <Header/>
                <div className="flex flex-wrap">
                    <div className="w-20">
                        <UserCard/>
                    </div>
                    <div className="w-80">
                        <RepositorieList data={[]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RepositoresListPage;
