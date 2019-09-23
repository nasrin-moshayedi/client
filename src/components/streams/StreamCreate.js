import React from 'react';
import {Field , reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {createStream} from "./../../actions";

class StreamCreate extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta }) => {
        //  const className = `field ${meta,error && meta.touched? 'error': ''}`
        return(
            <div className={meta.touched && meta.error? "field error" : "field"}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
               {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
        console.log(formValues);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/* title */}
                <Field name="title" component={this.renderInput} label="Enter Title" />
                {/* description */}
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">click me</button>
            </form>
        );
    }
    
}

const validate = formValues =>{
    const errors ={}
    if(!formValues.title) {
        // only run when title is empty obj
        errors.title = 'You must enter ur name'
    }

    if(!formValues.description) {
        // only run when title is empty obj
        errors.description= 'you must enter description'
    }

    if(formValues.description < 7) {
        // only run when title is empty obj
        errors.description= 'you  enter description'
    }
    return errors;
};

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate 
})(StreamCreate);

export default connect(null, {
    createStream
})(formWrapped);