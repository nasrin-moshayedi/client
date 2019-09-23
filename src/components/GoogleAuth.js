import React from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from './../actions';
class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '553514993990-iamo6s8rbvtslq77r460ninb3qvvd2fk.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());                
                this.auth.isSignedIn.listen(this.onAuthChange);//take a boolean value "this.authChange is call back funtion which return true or false"
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    };

    onSiginOut = () => {
        this.auth.signOut();
    };

    onSiginIn = () => {
        this.auth.signIn();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn === true) {
            return (
                <button onClick={this.onSiginOut} className="ui red google button">
                    <i className="google icon"></i>
                    Sign out
                </button>
            )
        } else {
            return (
            <button onClick={this.onSiginIn} className="ui red google button">
                <i className="google icon"></i>
                Sign in with google
            </button>
            )
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {signIn,signOut})(GoogleAuth)