import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "../Search";
import GridSystem from "../GridSystem";
// import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

it("GridSystem component, when we do not have any items and ...Loading appears on the screen", async () => {
    const items = [];
    const search = shallow(<GridSystem items={items}/>);
    expect(search.find(".grid").length).toEqual(1);
    expect(search.find(".row").length).toEqual(1);
    expect(search.find(".loading").text()).toEqual("...Loading");
});

it("GridSystem component, when we do have items and on the screen", async () => {
    const items = [{
        media : {m: 'test url imagge'},
        author: 'Test name author',
        date_taken: new Date(),
        tags: 'testTag1 testTag2'
    }];
    const search = shallow(<GridSystem items={items}/>);
    expect(search.find(".grid").length).toEqual(1);
    expect(search.find(".row").length).toEqual(1);
    expect(search.find(".column").length).toEqual(1);
    expect(search.find(".image").length).toEqual(1);
    expect(search.find(".content").length).toEqual(2);
    expect(search.find(".header").length).toEqual(1);
    expect(search.find(".meta").length).toEqual(1);
    expect(search.find(".date").length).toEqual(1);
    expect(search.find(".tags").length).toEqual(1);
});