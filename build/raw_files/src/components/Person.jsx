import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <div className="pic pic-large">
                    <img className="img-circle" src={this.props.pictures.large} alt="large picture" />
                </div>
                <div className="pic pic-medium">
                    <img className="img-circle" src={this.props.pictures.medium} alt="large picture" />
                </div>
                <div className="pic pic-thumbnail">
                    <img className="img-circle" src={this.props.pictures.thumbnail} alt="large picture" />
                </div>
                <h3>{this.props.name.toUpperCase()}</h3>
                <p>{this.props.email}</p>
                <p>Registered: {this.props.registered}</p>
            </div>
        )

    }
}

export default Person;