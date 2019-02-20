import React from "react";

const Search = (props) => (
    <form class="ui form">
        <div class="field">
            <label>Search By Tag</label>
            <input
                placeholder="Search By Tag..."
                name="tag"
                onChange={props.handleOnChangeTag}
            />
        </div>
        <button type="submit" class="ui button" onClick={props.handleSubmitTag}>
            Search
        </button>
    </form>
);

export default Search;
