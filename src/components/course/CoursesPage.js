import React, { Component } from 'react';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: null }
        };
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState = ({ course: course });
    }
    render() {
        return (
            <div>
                <h1>Course</h1>
                <h2>Add course</h2>
                <input type="text" onChange={this.state.onTitleChange} value={this.state.course.title} />
                <input type="text" value="Save" onClick={this.onClickSave} />
            </div>
        );
    }
}

export default CoursesPage;