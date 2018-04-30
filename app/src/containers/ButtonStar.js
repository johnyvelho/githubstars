import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo'
import { addStar } from "../graphql/mutations/addStar";
import { removeStar } from "../graphql/mutations/removeStar";

import logo from './../assets/images/logo.svg';
import RepositorieListItem from "../components/RepositorieListItem";

class ButtonStar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            starrable: false
        }
    }

    render() {
        const { fetchViewer } = this.props;

        return (
            <button className="button button--medium button--color1">star</button>
        );
    }
}

ButtonStar.propTypes = {
    id: PropTypes.object.isRequired
};

export default compose(
    graphql(addStar, {
        name: 'addStar'
    }),
    graphql(removeStar, {
        name: 'removeStar'
    })
)(ButtonStar);
