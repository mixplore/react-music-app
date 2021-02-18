import mockAxios from "axios";
import topAlbumsMock from "../__mocks__/topAlbumsMock";
import topSongsMock from "../__mocks__/topSongsMock";
import { getTopAlbums, getTopSongs } from "./requests";

test(`#getTopAlbums`, async () => {
  const mockResponse = topAlbumsMock;
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: mockResponse,
    })
  );
  const albumsFeed = await getTopAlbums(3);
  expect(albumsFeed).toEqual(topAlbumsMock);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

test(`#getTopSongs`, async () => {
  const mockResponse = topSongsMock;
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: mockResponse,
    })
  );
  const songsFeed = await getTopSongs(3);
  expect(songsFeed).toEqual(topSongsMock);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
