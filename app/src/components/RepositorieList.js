import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import RepositorieListItem from "./RepositorieListItem";

class RepositorieList extends Component {
    render() {
        return (
            <div className="box-content-list">
                <ul>
                    <li><RepositorieListItem data={{}}/></li>
                    <li><RepositorieListItem data={{}}/></li>
                    <li><RepositorieListItem data={{}}/></li>
                </ul>
            </div>
        );
    }
}

RepositorieList.propTypes = {
    data: PropTypes.array.isRequired
};

export default RepositorieList;
