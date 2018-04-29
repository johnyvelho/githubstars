import React, { Component } from 'react';
import { withRouter } from 'react-router';

class HomeSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputSearch: ''
        };

        this.onClickSearch = this.onClickSearch.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(e) {
        this.setState({
            inputSearch: e.target.value
        })
    }

    onClickSearch(e) {
        this.props.history.push('/' + this.state.inputSearch);
    }

    render() {
        return (
            <div id="main-search" className="w-75 center">
                <input type="text" className="dib w-100" value={this.state.inputSearch} onChange={this.onChangeInput} placeholder="github username..."/>
                <button onClick={this.onClickSearch} className="button-search">Search</button>
            </div>
        );
    }
}

export default withRouter(HomeSearch);
