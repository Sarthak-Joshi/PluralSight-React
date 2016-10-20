import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: "" }
        };

        // onClick={this.onClickSave}
        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        // this.setState() is function not varible
        // Don't use equal to =  
        this.setState({ course: course });
    }

    courseRow(course, index) {
        return <div key={index}><h4>{course.title}</h4></div>;
    }

    onClickSave() {
        this.props.createCourse(this.state.course);
        // this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    render() {
        return (
            <div>
                <h1>Course</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>
                <input type="text"
                    className="form-control"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                    />
                <input type="submit"
                    className="btn btn-sm btn-default"
                    onClick={this.onClickSave}
                    />
            </div>
        );
    }
}

// Proptype validation

CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired,
};

// state in this function is Redux store state

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses // this is from Index.js from rootReducer
    };
}

// Correct way to do : mapDispatchToProps
// if not use dispatch
// dispatch is a function that alloows to fire other actions  
/*function mapDispatchToProps() {
    
}*/

// Arrow function 
// Paranthesis can be omitted for single argument
function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//  

/*Once mapDispatchToProps to explicity mentioned connect removes dispatch from props hence it is no longer required 
This might give warming about PropValidation*/