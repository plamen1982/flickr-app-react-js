import React, { Component } from "react";

import "./App.css";
import GridSystem from "./components/GridSystem";
import Search from "./components/Search";

const url =
    "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            value: ""
        };
    }

    /**
     * @name componentWillUpdate
     * @description when comopnent is mounted it will first fetch the data and then sorted by property that is from type Date string
     * @type {method}
     */

    componentDidMount() {
        this.fetchData(url).then(items => {
            const sortedItems = this.sortArrayOfDatesByDateProp(items, 'date_taken');
            this.setState({ results: sortedItems });
        });
    }

    /**
     * @name fetchData
     * @description fetch the data from the provided url(end-point) and returned as Promise
     * @type method
     * @params url
     * @returns {Promise}
     * */

    fetchData(url) {
        return fetch(url)
            .then(respose => {
                return this.errorResponseHandler(respose);
            })
            .then(data => {
                const { items } = data;
                return items;
            })
            .catch(e => {
                console.log(e);
            });
    }


    /**
     * @name sortArrayOfDatesByDateProp
     * @description sort Array that has at least one property from type Date string, returns sorted Array
     * @type method
     * @params items
     * @params prop
     * @returns {Array}
     * */

    sortArrayOfDatesByDateProp(items, prop) {
        return items.sort((a, b) => {
            return new Date(b[prop]) - new Date(a[prop]);
        });
    }

    /**
     * @name errorResponseHandler
     * @description It takes respose param that comming from the firts promise from the Fetch API, check if response.ok is truthy value, and returns the respose.json() if is ok
     * @type method
     * @params respose
     * @params prop
     * @returns {Array}
     * */

    errorResponseHandler(respose) {
        if (respose.ok) {
            return respose.json();
        } else {
            throw new Error(
                "response.ok is false, check your end-point and required query params"
            );
        }
    }

    /**
     * @name handleOnChangeTag
     * @description called every time when we typing in the search and our state.value is changed with the typing
     * @type method
     * @params event
     * */

    handleOnChangeTag = ({ target: { value } }) => {
        this.setState({
            value
        });
    };

    /**
     * @name handleSubmitTag
     * @description when we press submit button we filter the results in state.results by the tag that we have already in state.tag
     * @type method
     * @params event
     * */

    handleSubmitTag = event => {
        event.preventDefault();
        const { value } = this.state;
        if (value.length > 0) {
            this.setState({
                results: this.state.results.filter(result =>
                    result.tags.toLowerCase().includes(value.toLowerCase())
                )
            });
        } else {
            this.componentDidMount();
        }
    };

    render() {
        const { results } = this.state;
        return (
            <div className="ui container">
                <Search
                    handleOnChangeTag={this.handleOnChangeTag}
                    handleSubmitTag={this.handleSubmitTag}
                />
                <GridSystem items={results} />
            </div>
        );
    }
}

export default App;
