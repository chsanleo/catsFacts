import React from 'react';
import { Navigate } from 'react-router-dom';


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
                <Navigate to={'/'} />
            )
        }
        return (
            <div align="center">
                <img src="https://onefid.com/wp-content/uploads/2019/03/404@3x.png" alt="Lost404"/>
                <h3>Opps... </h3>
            </div>
            
        );
    }
}
export default ErrorPage;