import React, { Component } from 'react'

// const ErrorComponent = () => <div>{props.ignore}</div>

export class Counter extends Component {
    
    // Life cycle methods calling order
    // Constructor
    // Render
    // ComponentDidMount
    
    constructor(props) {
        console.log('Constructor')
        super(props)
        this.state = {
            counter:0,
            seed: 0
        }
        
        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.decrement = () => this.setState({counter: this.state.counter - 1})
    }
    
    static getDerivedStateFromProps(props, state) {
        // What ever we return from here is assigned to the state
        // We can copy props to state here
        // If we donot want to change the state we return null
        if(props.seed && state.seed !== props.seed)
        {
            console.log('Seed Generated')
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        console.log('Seed Not Generated')
        return null
    }
    
    componentDidMount() {
        console.log('Component Did Mount')
        console.log('--------------------')
    }
    
    // Mostly used when we want some data from props that have changed, but we don't want to render our component since our render is kinda expensive due to our UI
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('--------------------')
        if(nextProps.ignoreProp && this.state.ignoreProp !== nextProps.ignoreProp)
        {
            console.log('Should Component Update -- DONOT RENDER')
            console.log('--------------------')
            return false
        }
        console.log('Should Component Update -- RENDER')
        return true
    }
    

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get Snapshot Befor Update')
        return null
    }

//     static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//         return this.state 
//   }

    render() {
        console.log('Render')
        if(this.state.error)
        {
            return <div>We Have Encountered an Error {this.state.error.message}</div>
        }
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                Counter: {this.state.counter}
                </div>
                {/* <ErrorComponent/> */}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update')
        console.log('--------------------')
    }

    componentWillUnmount() {
        console.log('Comonent Will Unmount')
        console.log('--------------------')
    }

    componentDidCatch(error, info) {
        console.log('Component Did Catch')
        this.setState({error,info})
    }
}

export default Counter
