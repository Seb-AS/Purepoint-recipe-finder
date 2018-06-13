import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updateSearch: this.props.updateSearch,
        }
    }

    handleChange(event) {
        event.preventDefault();
        this.state.updateSearch(event.target.value);
    }

    render() {
        const inputStyle = {
            margin: '5vh',
            width: '70%',
            height: '20%',
            textAlign: 'center',
            fontSize: '2em',
            background: '#F2F2F2'
        }
        return (
            <React.Fragment>
                <h2>PUREPOINT Recipe Finder</h2>
                <input style={inputStyle} type={'text'} name={'Search'} placeholder={'Search'}
                          onChange={this.handleChange.bind(this)}/>
            </React.Fragment>
        )
    }
}

export default Header;
