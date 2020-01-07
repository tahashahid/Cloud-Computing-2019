import React from 'react';

// https://stackblitz.com/
export default class Profile extends React.Component {


    componentDidMount() {
        console.log(this.props.match);

    }

    render() {
        return (
            <div className="Profile">
                <h1>Profile {this.props.match.params.name}</h1>
            </div>
        );
    }
}

