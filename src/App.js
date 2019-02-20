import React, { Component } from "react";
import "./App.css";
import ThreeColumnGridSystem  from './components/ThreeColumnGridSystem';

const url =
    "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }
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
                this.setState({ items });
            })
            .catch(e => {
                console.log(e);
            });
    }
    render() {
        const { items } = this.state;
        return (
            <ThreeColumnGridSystem items={items} />
        );
    }
}

export default App;
