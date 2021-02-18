/**
 * Returns a new record object including the necessary fields
 * @param {object} record 
 * @param {number} index 
 * @param {string} feedType 
 */
export const getRecordData = (record, index, feedType) => {
  const localData = localStorage.getItem(feedType);
  const recordData = {
    place: index + 1,
    id: record?.id?.attributes["im:id"],
    coverImage: {
      src: record["im:image"][0]?.label,
      height: record["im:image"][0]?.attributes?.height,
    },
    title: record["im:name"]?.label,
    artist: record["im:artist"]?.label,
    genre: record["category"]?.attributes?.label,
    numberOfTracks: record["im:itemCount"] && record["im:itemCount"]?.label,
    albumTitle:
      record["im:collection"] && record["im:collection"]["im:name"]?.label,
    price: record["im:price"]?.label,
    releaseDate: record["im:releaseDate"]?.attributes?.label,
    isFavourite: localData && JSON.parse(localData)[record?.id?.attributes["im:id"]]?.isFavourite
  };
  return recordData;
};

/**
 * Returns a map object having the record id as key and record object as value
 * @param {object} data 
 * @param {string} feedType 
 */
export const getParsedRecords = (data, feedType) => {
  return data?.feed?.entry.reduce((acc, record, index) => {
    const recordObj = getRecordData(record, index, feedType);
    acc[recordObj.id] = recordObj;
    return acc;
  }, {});
};
