import React from 'react';
import {Link} from 'react-router-dom';
import Modal from "./../modal";
import {connect} from "react-redux"
import History from "./../../history";
import {fetchStream, deleteStream} from "./../../actions";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    
    renderActions() {
    return (
        <React.Fragment>
            <button className="ui negative button" onClick={() => this.props.deleteStream(this.props.match.params.id)}>Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
        )
    }

    renderContent() {
        if(!this.props.stream) {
            return 'Are you sure wana to delete this.streams?'
        }
        return `Are you sure wana to delete this.streams with title ${this.props.stream.title}?`
    }
    render() {
    return(
        <div>
            Delete Stream 
            <Modal
                title="Delete Stream"
                content = {this.renderContent()}
                action = {this.renderActions()}
                onDismiss = {()=> History.push('/')}
                onPage = {(e) => e.stopPropagation()}
            />
        </div>
    )
    }
};
const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}

} 

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);