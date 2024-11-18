import React, {Component} from "react";

export default class CourseWelcome extends Component{
    render(){
        return(
            <h1>Welcome to {this.props.name}</h1>
        )
    }
}