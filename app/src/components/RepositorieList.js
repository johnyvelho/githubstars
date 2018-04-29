import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import RepositorieListItem from "./RepositorieListItem";

class RepositorieList extends Component {
    render() {
        return (
            <div className="box-content-list">
                <ul>
                    {this.props.data.map((item, key) =>
                        <li key={key}><RepositorieListItem data={item}/></li>
                    )}
                </ul>
            </div>
        );
    }
}

RepositorieList.propTypes = {
    data: PropTypes.array.isRequired
};

export default RepositorieList;
