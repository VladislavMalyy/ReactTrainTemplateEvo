import React,{ Component } from 'react';

export default class App extends Component{

    constructor(props){
        super(props);

        this._handleClick = this._handleClick.bind(this);

        this.state = {
            counter: 0
        }
    }

    _handleClick(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return(
            <div>
                <h1>React Training Template HillelEvo Imed</h1>
                <button className='btn' onClick={this._handleClick}>{this.state.counter}</button>
            </div>
        )
    }
}
