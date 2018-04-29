import React, { Component } from 'react';
import search from './../hocs/Search';
import { withRouter } from 'react-router';

class HomeSearch extends Component {

    render() {
        return (
            <div id="main-search" className="w-75 center">
                <input type="text" className="dib w-100" value={this.props.inputSearch} placeholder="github username..."
                       onChange={this.props.onChangeInput}
                       onKeyPress={this.props.onKeyPress}
                />
                <button onClick={this.props.onClickSearch} className="button-search">Search</button>
            </div>
        );
    }
}

export default withRouter(search(HomeSearch));
