import React from 'react';


export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initial_age,
            status: 0,
            homeLink: props.homeLink
        };
        setTimeout(() => {
            this.setState({
                status: this.state.status + .25
            })
        }, 3000);
        console.log('Constructor');

    }

    componentWillMount() {
        console.log('Component will mount');
        // If we update the state in this function, it will occur before initial rendering
    }
    componentDidMount() {
        console.log('Component did mount');
        // here the initial state has been set
    }
    componentWillReceiveProps(next_props) {
        console.log('Component will receive props', next_props)
        // this will occur when new props are sent to the component
    }   
    shouldComponentUpdate(next_props, new_state) {
        console.log('Should component update', next_props, new_state);
        return true;
        // based on a change in props/state - update the component
    }
    componentWillUpdate(next_props, next_state) {
        console.log('Component will update', next_props, next_state);
    }
    componentDidUpdate(prev_props, prev_state) {
        console.log('Component did update', prev_props, prev_state)
    }
    componentWillUnmount() {
        console.log('Component will unmount');
    }
    // Why did I not need to define this?
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }
    onChangeName() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event) {
        
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name} and you are {this.state.age} years old.</p>
                <hr/>
                <button 
                    type='button' 
                    className='btn btn-primary' 
                    onClick={() => this.onMakeOlder()}>
                        Make me older!
                </button>
                <hr/>
                <p>Last Version: {this.state.status}</p>
                <hr/>
                <button 
                    type='button' 
                    className='btn btn-primary'
                    onClick={this.props.greet}>
                        Greet
                </button>
                <hr/>
                <input type="text" name="homeLink" 
                    value={this.state.homeLink}
                    onChange={this.onHandleChange.bind(this)}/>
                <button 
                    className="btn btn-success"
                    onClick={this.onChangeName.bind(this)}>
                        Change the Name!
                </button>
                <hr/>
            </div>
        );
    }
 
}

