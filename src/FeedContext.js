import React, { useState, createContext, useEffect } from "react";
import { getTopAlbums, getTopSongs } from "./api/requests";
import { getParsedRecords } from "./utils/dataParsers";

export const FeedContext = createContext();

export const FeedProvider = (props) => {
  const [state, setState] = useState({
      feedData: {},
      feedType: 'topalbums',
      feedLimit: 100,
      isLoading: false,
  });

  useEffect(() => {
    async function getData() {
        setState(prevState => ({
          ...prevState,
          isLoading: true
      }));
      const data =
        state.feedType === "topalbums"
          ? await getTopAlbums(state.feedLimit)
          : await getTopSongs(state.feedLimit);
      const feedData = getParsedRecords(data, state.feedType);
      setState(prevState => ({
          ...prevState,
          feedData,
          isLoading: false
      }));
    }
    getData();
  }, [state.feedType]);

  return (
    <FeedContext.Provider value={[state, setState]}>
      {props.children}
    </FeedContext.Provider>
  );
};
