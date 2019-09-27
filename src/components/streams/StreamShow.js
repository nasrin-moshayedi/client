import React from 'react';
import flv from 'flv.js';
import {connect} from "react-redux";
import {fetchStream} from './../../actions';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
    }
    componentDidUpdate() {
        this.buildPlayer();
    }

    buildPlayer() {
        if(this.player || !this.props.stream) {
            return;
        }
        this.palyer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        this.palyer.attachMediaElement(this.videoRef.current);
        this.palyer.load();

    }
    render(){
        if(!this.props.stream) {
          return  <div>Loadding ...</div>
        }
    return (
        <div>
            <video ref={this.videoRef} style={{width: "100%"}} controls={true} />
            <h1>{this.props.stream.title}</h1>
            <h5>{this.props.stream.description}</h5>
        </div>
    );
    }
};

const stateToProps = (state, ownProp) => {
    return {stream: state.streams[ownProp.match.params.id]}
}

export default connect(stateToProps, {fetchStream})(StreamShow);