import React from 'react';
import { Redirect } from 'react-router-dom';


class ErrorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ redirect: true });
        }, 4000);
    }
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/'} />
            )
        }
        return (
            <div align="center">
                <img src="https://img.lovepik.com/element/40021/7866.png_1200.png" alt="Lost404"/>
                <h3>Opps... </h3>
            </div>
            
        );
    }
}
export default ErrorPage;