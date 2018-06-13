import React, {Component} from 'react';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemData: this.props.data,
        }
    }

    handleClick = e => {
        //e.preventDefault();
    }

    render() {
        const {itemData} = this.state;
        const bgStyle = {
            backgroundColor: 'lightblue'
        }
        return (
            <React.Fragment>
                <div style={bgStyle} key={itemData.id} onClick={() => this.handleClick()}>
                    <img src={itemData.thumbnail}/>
                    <h4>{itemData.title}</h4>
                    <h6>{itemData.ingredients}</h6>
                </div>
            </React.Fragment>
         );
    }
};

export default Item;
