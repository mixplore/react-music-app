import React from "react";
import renderer from "react-test-renderer";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { mount, act } from "enzyme";
import Feed from "./Feed";
import { FeedProvider } from "../FeedContext";
import Title from "../components/common/Title";
import ButtonSelector from "../components/common/ButtonSelector";
import mockAxios from "axios";
import topAlbumsMock from "../__mocks__/topAlbumsMock";

describe(`#render`, () => {
  beforeAll(() => {
    const mockResponse = {
      feed: {
        entry: topAlbumsMock,
      },
    };
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockResponse,
      })
    );
  });
  
  const history = createMemoryHistory();
  test(`Snapshot test - Feed page is rendered correctly`, () => {
    const component = renderer.create(
      <Router history={history}>
        <FeedProvider>
          <Feed />
        </FeedProvider>
      </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`It should have a title`, () => {
    const wrapper = mount(
      <Router history={history}>
        <FeedProvider>
          <Feed />
        </FeedProvider>
      </Router>
    );
    const title = wrapper.find(Title);
    expect(title).toHaveLength(1);
    expect(title.text()).toContain("Aula music tops");
  });

  test(`It should render a ButtonSelector component`, () => {
    const wrapper = mount(
      <Router history={history}>
        <FeedProvider>
          <Feed />
        </FeedProvider>
      </Router>
    );
    expect(wrapper.find(ButtonSelector)).toBeDefined();
  });

  test(`It should render a search bar with specified placeholder`, () => {
    const wrapper = mount(
      <Router history={history}>
        <FeedProvider>
          <Feed />
        </FeedProvider>
      </Router>
    );
    const searchBar = wrapper.find(".search-bar");
    expect(searchBar).toBeDefined();
    expect(searchBar.children().find("input")).toBeDefined();
    expect(searchBar.children().find("input").props().placeholder).toEqual(
      "Search for..."
    );
  });
});
