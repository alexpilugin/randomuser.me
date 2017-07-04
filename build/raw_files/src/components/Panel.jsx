import React from 'react';
import Person from './Person';

class Panel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            counter: 12,
            showMore: this.props.showMore,
        };

        this.hundleShowtMore = this.hundleShowtMore.bind(this)
    }
    hundleShowtMore() {
        var quantity = this.state.counter + 12;
        //console.log("quantity: " + quantity + " counter: " + this.state.counter);

        this.setState({counter: quantity})
        this.props.showMoreClick(this.state.counter);
    }
    render() {
        var items = [];
        const people = this.props.people;
        var quantity = people.length;

        if (!this.props.showMoreClick) {
            const len = this.props.people.length;
            quantity = len;
        }

        console.log(people);
        if (people.length > 0) {
            for (var i = 0; i < quantity; i++) {
                const id = i + 10;
                const person = people[i];
                var name, email, registered, pictures;

                if(person) {
                    name = (person.name.first + " " + person.name.last);
                    email = person.email;
                    pictures = person.picture;
                    registered = person.registered;
                }
            
                items.push(
                    <Person
                        key={id}
                        name={name}
                        email={email}
                        pictures={pictures}
                        registered={registered}
                    />
                )
            }
            return (
                <div className="panel">
                    {items}
                    {/* if this.props.showMoreClick provided, show the Button "Show more" */}
                    {this.state.showMore &&
                        <div className="showMore">
                            <button type="button" onClick={this.hundleShowtMore}>
                                SHOW MORE
                            </button>
                        </div>
                    }
                </div>
            )

        } else {
            return (
                <div>NO DATA WAS LOADED</div>
            )
        }
    }
}


export default Panel;