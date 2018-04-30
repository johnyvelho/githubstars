import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo'
import { addStar } from "../graphql/mutations/addStar";
import { removeStar } from "../graphql/mutations/removeStar";
import { getUserData, addStarrableRepository, removeStarrableRepository } from './../util/Auth';
import {Loading} from 'element-react';

class ButtonStar extends Component {

    constructor(props) {
        super(props);

        this.starredRepositoriesId = getUserData().starredRepositoriesId;

        this.state = {
            starrable: this.starredRepositoriesId.includes(this.props.id),
            loading: false
        };
    }

    onClickAddStar(id, e) {
        this.setState({loading: true});

        this.props.addStar({
            variables: {
                starrableId: id,
            }
        }).then((response) => {
            addStarrableRepository(id);
            this.setState({
                starrable: true,
                loading: false
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    onClickRemoveStar(id, e) {
        this.setState({loading: true});

        this.props.removeStar({
            variables: {
                starrableId: id,
            }
        }).then((response) => {
            removeStarrableRepository(id);
            this.setState({
                starrable: false,
                loading: false
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.loading ?
                    <React.Fragment>
                        {!this.state.starrable ? (
                            <button onClick={this.onClickAddStar.bind(this, this.props.id)} className="button button--medium button--color1">star</button>
                        ) : (
                             <button onClick={this.onClickRemoveStar.bind(this, this.props.id)} className="button active button--medium button--color1">unstar</button>
                        )}
                    </React.Fragment>
                :
                    <Loading/>
                }
            </React.Fragment>
        );
    }
}

ButtonStar.propTypes = {
    id: PropTypes.string.isRequired
};

export default compose(
    graphql(addStar, {
        name: 'addStar'
    }),
    graphql(removeStar, {
        name: 'removeStar'
    })
)(ButtonStar);
