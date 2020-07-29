import React, {Component} from 'react'
import ErrorIndecator from '../error-indecator'

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }


    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError){
            return (
                <ErrorIndecator/>
            )
        }
        return this.props.children
    }
}