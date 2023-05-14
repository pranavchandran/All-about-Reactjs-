import { Component } from 'react'


class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
}
    componentDidCatch(error) {
        console.log(error);
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went Error!</h2>
                </div>
            );
        }
        return this.props.children
    }
}

export default ErrorBoundary