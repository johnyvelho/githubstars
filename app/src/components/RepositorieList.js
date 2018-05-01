import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import RepositorieListItem from "./RepositorieListItem";

class RepositorieList extends Component {
    render() {
        return (
            <ul>
                {this.props.data.map((item, key) =>
                    <li key={key}><RepositorieListItem data={item.node}/></li>
                )}
            </ul>
        );
    }
}

RepositorieList.propTypes = {
    data: PropTypes.array.isRequired
};

export default RepositorieList;
