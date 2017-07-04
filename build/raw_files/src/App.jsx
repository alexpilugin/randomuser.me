import React, { Component } from 'react';
import 'whatwg-fetch'; //polyfill for Safari
import Panel from './components/Panel';
import './scss/styles.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            people: [],
            amount: 12,
        };
        this.hundleShowMore = this.hundleShowMore.bind(this)
    }

    componentWillMount() {
        const url = `https://randomuser.me/api/?results=${this.state.amount}`;
        this.loadData(url, (json) => {
            this.setState({ people: json });
            //console.log(this.state.people);
        });
    }
    loadData(url, success) {
        var fetchBody = api => fetch(api)
            .then(res => res.ok ? res : res.json().then(err => Promise.reject(err)));
        fetchBody(url)
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(this.parseJSON)
            .then(success);
    }
    checkStatus(response) {
        if (response.ok && response.status >= 200 && response.status < 300) {
            return response.json()
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        }
    }
    parseJSON(response) {
        var results = response.results;
        //console.log(results);
        return results;
    }
    hundleShowMore(quantity) {
        console.log("quantity: " + quantity);
        const url = `https://randomuser.me/api/?results=${quantity}`;
        this.loadData(url, (data) => {
            this.setState({ people: data, amount: quantity });
            //this.forceUpdate();
        });     
    }
    render() {
        return (
            <div className="App">
                <Panel
                    ref='panel'
                    showMoreClick={this.hundleShowMore}
                    people={this.state.people}
                    showMore
                />
            </div>
        );
    }
}

export default App;