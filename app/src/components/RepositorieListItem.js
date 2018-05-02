import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonStar from './../containers/ButtonStar';

class RepositorieListItem extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="card-item db-m flex-ns justify-between items-center">
                <div className="w-100 w-100-m w-80-ns">
                    <h3 className="card-item__title">{data.nameWithOwner.replace('/', ' / ')}</h3>
                    <p className="card-item__description">{data.description}</p>
                    <div className="card-item__star">{data.stargazers.totalCount}</div>
                </div>
                <div className="w-100 w-100-m w-20-ns tr mt2 mt0-ns" data-id={data.id}>
                    <ButtonStar id={data.id}/>
                </div>
            </div>
        );
    }
}

RepositorieListItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default RepositorieListItem;
