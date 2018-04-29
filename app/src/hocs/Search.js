import React from 'react';

export default function search(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                inputSearch: ''
            };

            this.onClickSearch = this.onClickSearch.bind(this);
            this.onChangeInput = this.onChangeInput.bind(this);
            this.onKeyPress = this.onKeyPress.bind(this);
        }

        onChangeInput(e) {
            this.setState({
                inputSearch: e.target.value
            });
        }

        onKeyPress(e) {
            if (e.charCode == 13) {
                this.onClickSearch(e);
            }
        }

        onClickSearch(e) {
            this.props.history.push('/' + this.state.inputSearch);
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props}
                                     onClickSearch={this.onClickSearch}
                                     onChangeInput={this.onChangeInput}
                                     onKeyPress={this.onKeyPress}
            />;
        }
    };
}