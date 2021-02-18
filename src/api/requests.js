import axios from "axios";

const axiosITunesApiInstance = axios.create({
  baseURL: `https://itunes.apple.com/us/rss`,
});

/**
 * Gets the top albums feed object from itunes api
 * @param {number} limit 
 */
export const getTopAlbums = (limit) =>
  axiosITunesApiInstance.get(`/topalbums/limit=${limit}/json`).then((res) => {
    const topAlbums = res.data;
    return topAlbums;
  }).catch(err => err);

/**
 * Gets the top songs feed object from itunes api
 * @param {number} limit 
 */
export const getTopSongs = (limit) =>
  axiosITunesApiInstance.get(`/topsongs/limit=${limit}/json`).then((res) => {
    const topSongs = res.data;
    return topSongs;
  }).catch(err => err);
