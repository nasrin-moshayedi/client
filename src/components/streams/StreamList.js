import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from "./../../actions";
import {Link} from 'react-router-dom';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle alighned icon camera" />
                    <div className="content">
                        <Link to={`/stream/Show/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            )
        })
    }
    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return(
                <div className = "right floated content">
                    <Link to={`/stream/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui button negitive">
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return(
                <div style={{textAlign: "right"}}>
                    <Link to="/stream/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }
    render() {
        return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">{this.renderList()}</div>
            {this.renderCreate()}
        </div>);
    }
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
     }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);