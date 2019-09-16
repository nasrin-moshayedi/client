import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '553514993990-iamo6s8rbvtslq77r460ninb3qvvd2fk.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in</div>
        } else if (this.state.isSignedIn === true) {
            return <div>I am signed in</div>
        } else {
            return <div>I am not signed in</div>
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth