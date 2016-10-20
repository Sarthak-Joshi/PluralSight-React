import React, { Component } from 'react';

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
        console.log('Inside onTitleChange');
        const course = this.state.course;
        course.title = event.target.value;
        // this.setState() is function not varible
        // Don't use equal to =  
        this.setState({ course: course });
    }

    onClickSave() {
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Course</h1>
                <h2>Add course</h2>
                <input type="text"
                    className="form-control"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                    />
                <input type="submit"
                    className="btn btn-sm btn-default"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

export default CoursesPage;
//  