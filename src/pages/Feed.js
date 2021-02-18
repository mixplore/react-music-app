import React, { useCallback, useMemo, useState } from "react";
import { withRouter } from "react-router-dom";
import "./Feed.scss";
import Title from "../components/common/Title";
import ChartContainer from "../components/common/ChartContainer";
import ChartRow from "../components/common/ChartRow";
import ChartCell from "../components/common/ChartCell";
import Image from "../components/common/Image";
import ButtonSelector from "../components/common/ButtonSelector";
import SearchBar from "../components/common/SearchBar";
import useFeed from "../custom-hooks/useFeed";
import FavouriteIcon from "../components/common/FavouriteIcon";

function Feed({ history }) {
  const {
    feedData,
    switchFeedType,
    isLoading,
    feedType,
    setFavouriteRecord,
  } = useFeed();
  const [searchValue, setSearchValue] = useState(null);

  const selectButtons = [
    {
      id: "topalbums",
      title: "Top 100 Albums",
      value: "topalbums",
    },
    {
      id: "topsongs",
      title: "Top 100 Songs",
      value: "topsongs",
    },
  ];

  const handleFeedSelection = useCallback((event) => {
    switchFeedType(event.target.value);
    history.push(`/${event.target.value}`);
  }, []);

  const handleSearch = useCallback(([, record]) => {
    if (searchValue === null) return record;
    else if (
      (record &&
        record.title.toLowerCase().includes(searchValue.toLowerCase())) ||
      (record &&
        record.albumTitle &&
        record.albumTitle.toLowerCase().includes(searchValue.toLowerCase())) ||
      (record &&
        record.artist.toLowerCase().includes(searchValue.toLowerCase()))
    ) {
      return record;
    }
  });

  const renderChartRow = useMemo(
    () => (record) => (
      <ChartRow key={record.id}>
        <ChartCell>
          <FavouriteIcon isFavourite={record.isFavourite} onSetFavourite={() => setFavouriteRecord(record.id)}/>
          {record.place}
        </ChartCell>
        <ChartCell>
          <Image
            src={record.coverImage.src}
            height={record.coverImage.height}
          />
        </ChartCell>
        <ChartCell>{record.title}</ChartCell>
        <ChartCell>{record.artist}</ChartCell>
        <ChartCell>{record.genre}</ChartCell>
        {record.numberOfTracks && (
          <ChartCell>{record.numberOfTracks}</ChartCell>
        )}
        {record.albumTitle && <ChartCell>{record.albumTitle}</ChartCell>}
        <ChartCell>{record.price}</ChartCell>
        <ChartCell>{record.releaseDate}</ChartCell>
      </ChartRow>
    ),
    [feedData]
  );

  const renderChartHeader = useMemo(
    () => (
      <ChartRow isHeader>
        <ChartCell>#</ChartCell>
        <ChartCell>Cover</ChartCell>
        <ChartCell>Title</ChartCell>
        <ChartCell>Artist</ChartCell>
        <ChartCell>Genre</ChartCell>
        <ChartCell>
          {feedType === "topalbums" ? `Tracks No.` : `Album`}
        </ChartCell>
        <ChartCell>Price</ChartCell>
        <ChartCell>Release Date</ChartCell>
      </ChartRow>
    ),
    [feedType]
  );

  return (
    <div className="page-container">
      <Title text="Aula music tops" />
      <ButtonSelector
        buttons={selectButtons}
        selectedButton={feedType}
        onButtonSelect={handleFeedSelection}
      />
      <SearchBar onValueChanged={(value) => setSearchValue(value)} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ChartContainer>
          {renderChartHeader}
          {feedData && Object.entries(feedData).length > 0 ? (
            Object.entries(feedData)
              .sort(([, a], [, b]) => a.place - b.place)
              .filter(handleSearch)
              .map(([id, record]) => renderChartRow(record))
          ) : (
            <div>No items found</div>
          )}
        </ChartContainer>
      )}
    </div>
  );
}

export default withRouter(Feed);
