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
            isLoading: false,
            value: ""
        };
    }
    componentDidMount() {
        debugger;
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
                this.setState({ results: items });
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleOnChangeTag = ({ target: { value } }) => {
        this.setState({
            value
        })
    }   

    handleSubmitTag = (e) => {
        e.preventDefault();
        const { value } = this.state;
        if(value.length > 0) {
            this.setState({
                results: this.state.results.filter(result => result.tags.includes(value))
            })
        } else {
            this.componentDidMount();
        }

    }

    render() {
        debugger;
        const { isLoading, value, results } = this.state;
        return (
            <div className="ui container">
                <Search 
                    handleOnChangeTag={this.handleOnChangeTag}
                    handleSubmitTag={this.handleSubmitTag}
                />
                <GridSystem 
                    items={results} 
                />
            </div>
        );
    }
}

export default App;
