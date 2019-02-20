import React, { Component } from "react";
import "./App.css";

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

            
            <div className="ui celled grid">
              <div className="row">

                {items.length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    items.map(item => (
                        <div className="three wide column">
                            <img
                                alt="nice pic"
                                src={item.media.m}
                                className="ui image"
                            />
                            <div className="content">
                                <div className="header">{item.author}</div>
                                <div className="meta">
                                    <span className="date">{item.date_taken}</span>
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="ui tags"> {item.tags} </div>
                            </div>
                        </div>
                    ))
                )}
              </div>
            </div>
        );
    }
}

export default App;
