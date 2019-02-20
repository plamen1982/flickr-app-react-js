import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "../Search";
// import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

describe('<Search /> component', () => {
    it("Search component", async () => {
        const search = shallow(<Search />);
    
        expect(search.find(".label").text()).toEqual("Welcome to our Flickr App!");
        expect(search.find(".input").length).toEqual(1);
        expect(search.find(".form").length).toEqual(1);
        expect(search.find(".field").length).toEqual(1);
        expect(search.find(".button").length).toEqual(1);
    });
});