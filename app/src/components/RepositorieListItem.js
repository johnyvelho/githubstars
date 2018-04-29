import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import RepositorieList from "./RepositorieList";

class RepositorieListItem extends Component {
    render() {
        return (
            <div className="card-item flex justify-between items-center">
                <div className="w-80">
                    <h3 className="card-item__title">sindresorhus / magic-iterable</h3>
                    <p className="card-item__description">Call a method on all items in an iterable by calling it on the
                        iterable itself</p>
                    <div className="card-item__star">100</div>
                </div>
                <div className="w-20">
                    <button className="button button--medium button--color1">star</button>
                </div>
            </div>
        );
    }
}

RepositorieListItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default RepositorieListItem;
