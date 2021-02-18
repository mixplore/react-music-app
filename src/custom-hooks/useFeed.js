import { useContext } from "react";
import { FeedContext } from "../FeedContext";

const useFeed = () => {
  const [state, setState] = useContext(FeedContext);

  /**
   * Updates the state by setting the feed type
   * @param {string} feedType
   */
  function switchFeedType(feedType) {
    setState((state) => ({
      ...state,
      feedType,
    }));
  }

  /**
   * Updates the state by setting the favourite status of a record
   * @param {*} recordId
   */
  function setFavouriteRecord(recordId) {
    const updatedFeedDataObj = {
      ...state.feedData,
      [recordId]: {
        ...state.feedData[recordId],
        isFavourite: !state.feedData[recordId].isFavourite,
      },
    };
    setState((state) => ({
      ...state,
      feedData: updatedFeedDataObj,
    }));
    localStorage.setItem(state.feedType, JSON.stringify(updatedFeedDataObj));
  }

  return {
    switchFeedType,
    setFavouriteRecord,
    feedType: state.feedType,
    feedData: state.feedData,
    isLoading: state.isLoading,
  };
};

export default useFeed;
