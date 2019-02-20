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
     * @description when comopnent is mounted it will fetch data from the Flickr API at the url end-point of the top of this file
     * @type {method}
     */

    componentDidMount() {
        fetch(url)
            .then(respose => {
                if (respose.ok) {
                    return respose.json();
                } else {
                    console.log("something whent wrong");
                }
            })
            .then(data => {
                const { items } = data;
                debugger;
                items.sort((a, b) => {
                    return new Date(b.date_taken) - new Date(a.date_taken);
                })
                debugger
                this.setState({ results: items });
            })
            .catch(e => {
                console.log(e);
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
                    result.tags.includes(value)
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
