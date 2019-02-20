import React, { Component } from "react";
import "./App.css";
import GridSystem from "./components/GridSystem";
import Search from "./components/Search";
import { fetchData, sortArrayOfDatesByDateProp } from './helpers/helpers';

const url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            value: ""
        };
    }

    /**
     * @name componentDidMount
     * @description when comopnent is mounted it will first fetch the data and then sorted by property that needs to be as Date string
     * @type {method}
     */

    componentDidMount() {
        debugger;
        fetchData(url).then(items => {
            const sortedItems = sortArrayOfDatesByDateProp(items, 'date_taken');
            this.setState({ results: sortedItems });
        });
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