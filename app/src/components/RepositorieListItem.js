import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonStar from './../containers/ButtonStar';

class RepositorieListItem extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="card-item flex justify-between items-center">
                <div className="w-80">
                    <h3 className="card-item__title">{data.nameWithOwner.replace('/', ' / ')}</h3>
                    <p className="card-item__description">{data.description}</p>
                    <div className="card-item__star">{data.stargazers.totalCount}</div>
                </div>
                <div className="w-20" data-id={data.id}>
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
