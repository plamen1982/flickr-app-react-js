import React from "react";

/**
 * @render react
 * @name Search
 * @description functional component, it has input and button element and we using onClick event to call closure to the parent component
 * <Search />
 */

const Search = (props) => (
    <form className="ui form">
        <div className="field">
            <label
                className="label"
                >Welcome to our Flickr App!</label>
            <input
                className = 'input'
                placeholder="Search By Tag..."
                name="tag"
                onChange={props.handleOnChangeTag}
            />
        </div>
        <button type="submit" className="ui button" onClick={props.handleSubmitTag}>
            Search
        </button>
    </form>
);

export default Search;
