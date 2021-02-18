import { getRecordData, getParsedRecords } from "./dataParsers";

const MOCK_SONG = {
  "im:name": {
    label: "Test Song",
  },
  "im:image": [
    {
      label:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5a/e7/f7/5ae7f721-fa6d-fe23-1f03-722a3274a48a/21UMGIM09915.rgb.jpg/55x55bb.png",
      attributes: {
        height: "55",
      },
    },
    {
      label:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/5a/e7/f7/5ae7f721-fa6d-fe23-1f03-722a3274a48a/21UMGIM09915.rgb.jpg/60x60bb.png",
      attributes: {
        height: "60",
      },
    },
    {
      label:
        "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/5a/e7/f7/5ae7f721-fa6d-fe23-1f03-722a3274a48a/21UMGIM09915.rgb.jpg/170x170bb.png",
      attributes: {
        height: "170",
      },
    },
  ],
  "im:collection": {
    "im:name": {
      label: "Test Album Name",
    },
    "im:contentType": {
      "im:contentType": {
        attributes: {
          term: "Album",
          label: "Album",
        },
      },
      attributes: {
        term: "Music",
        label: "Music",
      },
    },
  },
  "im:price": {
    label: "$1.29",
    attributes: {
      amount: "1.29000",
      currency: "USD",
    },
  },
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: "Track",
        label: "Track",
      },
    },
    attributes: {
      term: "Music",
      label: "Music",
    },
  },
  title: {
    label: "Test Song by Test Artist",
  },
  id: {
    label:
      "https://music.apple.com/us/album/love-story-taylors-version/1552791073?i=1552791427&uo=2",
    attributes: {
      "im:id": "1552791427",
    },
  },
  "im:artist": {
    label: "Test Artist",
  },
  category: {
    attributes: {
      "im:id": "6",
      term: "Country",
      scheme: "https://music.apple.com/us/genre/music-country/id6?uo=2",
      label: "Country",
    },
  },
  "im:releaseDate": {
    label: "2021-02-11T00:00:00-07:00",
    attributes: {
      label: "February 11, 2021",
    },
  },
};

const MOCK_SONG_2 = {
  "im:name": {
    label: "Test Song",
  },
  "im:image": [
    {
      label:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5a/e7/f7/5ae7f721-fa6d-fe23-1f03-722a3274a48a/21UMGIM09915.rgb.jpg/55x55bb.png",
      attributes: {
        height: "55",
      },
    },
    {
      label:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/5a/e7/f7/5ae7f721-fa6d-fe23-1f03-722a3274a48a/21UMGIM09915.rgb.jpg/60x60bb.png",
      attributes: {
        height: "60",
      },
    },
    {
      label:
        "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/5a/e7/f7/5ae7f721-fa6d-fe23-1f03-722a3274a48a/21UMGIM09915.rgb.jpg/170x170bb.png",
      attributes: {
        height: "170",
      },
    },
  ],
  "im:collection": {
    "im:name": {
      label: "Test Album Name",
    },
    "im:contentType": {
      "im:contentType": {
        attributes: {
          term: "Album",
          label: "Album",
        },
      },
      attributes: {
        term: "Music",
        label: "Music",
      },
    },
  },
  "im:price": {
    label: "$1.29",
    attributes: {
      amount: "1.29000",
      currency: "USD",
    },
  },
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: "Track",
        label: "Track",
      },
    },
    attributes: {
      term: "Music",
      label: "Music",
    },
  },
  title: {
    label: "Test Song by Test Artist",
  },
  id: {
    label:
      "https://music.apple.com/us/album/love-story-taylors-version/1552791073?i=1552791427&uo=2",
    attributes: {
      "im:id": "1552791428",
    },
  },
  "im:artist": {
    label: "Test Artist",
  },
  category: {
    attributes: {
      "im:id": "6",
      term: "Country",
      scheme: "https://music.apple.com/us/genre/music-country/id6?uo=2",
      label: "Country",
    },
  },
  "im:releaseDate": {
    label: "2021-02-11T00:00:00-07:00",
    attributes: {
      label: "February 11, 2021",
    },
  },
};

const EXPECTED_SONG_RECORD = {
  place: 1,
  id: "1552791427",
  title: "Test Song",
  artist: "Test Artist",
  coverImage: {
    height: "55",
    src:
      "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5a/e7/f7/5ae7f721-fa6d-fe23-1f03-722a3274a48a/21UMGIM09915.rgb.jpg/55x55bb.png",
  },
  genre: "Country",
  albumTitle: "Test Album Name",
  numberOfTracks: undefined,
  price: "$1.29",
  releaseDate: "February 11, 2021",
  isFavourite: null,
};

const EXPECTED_SONG_RECORD_2 = {
  place: 2,
  id: "1552791428",
  title: "Test Song",
  artist: "Test Artist",
  coverImage: {
    height: "55",
    src:
      "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5a/e7/f7/5ae7f721-fa6d-fe23-1f03-722a3274a48a/21UMGIM09915.rgb.jpg/55x55bb.png",
  },
  genre: "Country",
  albumTitle: "Test Album Name",
  numberOfTracks: undefined,
  price: "$1.29",
  releaseDate: "February 11, 2021",
  isFavourite: null,
};

const MOCK_ALBUM = {
  "im:name": {
    label: "The Lucky Ones",
  },
  "im:image": [
    {
      label:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/c3/c6/95/c3c69540-c9c7-6fe2-15b4-c05064f1ddb7/886448750680.jpg/55x55bb.png",
      attributes: {
        height: "55",
      },
    },
    {
      label:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/c3/c6/95/c3c69540-c9c7-6fe2-15b4-c05064f1ddb7/886448750680.jpg/60x60bb.png",
      attributes: {
        height: "60",
      },
    },
    {
      label:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/c3/c6/95/c3c69540-c9c7-6fe2-15b4-c05064f1ddb7/886448750680.jpg/170x170bb.png",
      attributes: {
        height: "170",
      },
    },
  ],
  "im:itemCount": {
    label: "11",
  },
  "im:price": {
    label: "$9.99",
    attributes: {
      amount: "9.99000",
      currency: "USD",
    },
  },
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: "Album",
        label: "Album",
      },
    },
    attributes: {
      term: "Music",
      label: "Music",
    },
  },
  rights: {
    label: "℗ 2021 RCA Records, a division of Sony Music Entertainment",
  },
  title: {
    label: "The Lucky Ones - Pentatonix",
  },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://music.apple.com/us/album/the-lucky-ones/1535661390?uo=2",
    },
  },
  id: {
    label: "https://music.apple.com/us/album/the-lucky-ones/1535661390?uo=2",
    attributes: {
      "im:id": "1535661390",
    },
  },
  "im:artist": {
    label: "Pentatonix",
    attributes: {
      href: "https://music.apple.com/us/artist/pentatonix/466047278?uo=2",
    },
  },
  category: {
    attributes: {
      "im:id": "14",
      term: "Pop",
      scheme: "https://music.apple.com/us/genre/music-pop/id14?uo=2",
      label: "Pop",
    },
  },
  "im:releaseDate": {
    label: "2021-02-12T00:00:00-07:00",
    attributes: {
      label: "February 12, 2021",
    },
  },
};

const EXPECTED_ALBUM_RECORD = {
  place: 1,
  id: "1535661390",
  title: "The Lucky Ones",
  artist: "Pentatonix",
  coverImage: {
    height: "55",
    src:
      "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/c3/c6/95/c3c69540-c9c7-6fe2-15b4-c05064f1ddb7/886448750680.jpg/55x55bb.png",
  },
  genre: "Pop",
  albumTitle: undefined,
  numberOfTracks: "11",
  price: "$9.99",
  releaseDate: "February 12, 2021",
  isFavourite: null,
};

const MOCK_ALBUM_2 = {
  "im:name": {
    label: "The Lucky Ones",
  },
  "im:image": [
    {
      label:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/c3/c6/95/c3c69540-c9c7-6fe2-15b4-c05064f1ddb7/886448750680.jpg/55x55bb.png",
      attributes: {
        height: "55",
      },
    },
    {
      label:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/c3/c6/95/c3c69540-c9c7-6fe2-15b4-c05064f1ddb7/886448750680.jpg/60x60bb.png",
      attributes: {
        height: "60",
      },
    },
    {
      label:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/c3/c6/95/c3c69540-c9c7-6fe2-15b4-c05064f1ddb7/886448750680.jpg/170x170bb.png",
      attributes: {
        height: "170",
      },
    },
  ],
  "im:itemCount": {
    label: "11",
  },
  "im:price": {
    label: "$9.99",
    attributes: {
      amount: "9.99000",
      currency: "USD",
    },
  },
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: "Album",
        label: "Album",
      },
    },
    attributes: {
      term: "Music",
      label: "Music",
    },
  },
  rights: {
    label: "℗ 2021 RCA Records, a division of Sony Music Entertainment",
  },
  title: {
    label: "The Lucky Ones - Pentatonix",
  },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://music.apple.com/us/album/the-lucky-ones/1535661390?uo=2",
    },
  },
  id: {
    label: "https://music.apple.com/us/album/the-lucky-ones/1535661390?uo=2",
    attributes: {
      "im:id": "1535661391",
    },
  },
  "im:artist": {
    label: "Pentatonix",
    attributes: {
      href: "https://music.apple.com/us/artist/pentatonix/466047278?uo=2",
    },
  },
  category: {
    attributes: {
      "im:id": "14",
      term: "Pop",
      scheme: "https://music.apple.com/us/genre/music-pop/id14?uo=2",
      label: "Pop",
    },
  },
  "im:releaseDate": {
    label: "2021-02-12T00:00:00-07:00",
    attributes: {
      label: "February 12, 2021",
    },
  },
};

const EXPECTED_ALBUM_RECORD_2 = {
  place: 2,
  id: "1535661391",
  title: "The Lucky Ones",
  artist: "Pentatonix",
  coverImage: {
    height: "55",
    src:
      "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/c3/c6/95/c3c69540-c9c7-6fe2-15b4-c05064f1ddb7/886448750680.jpg/55x55bb.png",
  },
  genre: "Pop",
  albumTitle: undefined,
  numberOfTracks: "11",
  price: "$9.99",
  releaseDate: "February 12, 2021",
  isFavourite: null,
};

describe(`#getRecordData`, () => {
  test(`It returns a correctly formatted record - song`, () => {
    const formattedRecord = getRecordData(MOCK_SONG, 0);
    expect(formattedRecord).toStrictEqual(EXPECTED_SONG_RECORD);
  });
  test(`It returns a correctly formatted record - album`, () => {
    const formattedRecord = getRecordData(MOCK_ALBUM, 0);
    expect(formattedRecord).toStrictEqual(EXPECTED_ALBUM_RECORD);
  });
});

describe(`#getParsedRecords`, () => {
  test(`It returns correctly formatted records - songs`, () => {
    const data = {
      feed: {
        entry: [MOCK_SONG, MOCK_SONG_2],
      },
    };
    const formattedRecords = getParsedRecords(data);
    expect(formattedRecords[EXPECTED_SONG_RECORD.id]).toStrictEqual(
      EXPECTED_SONG_RECORD
    );
    expect(formattedRecords[EXPECTED_SONG_RECORD_2.id]).toStrictEqual(
      EXPECTED_SONG_RECORD_2
    );
  });
  test(`It returns correctly formatted records - albums`, () => {
    const data = {
      feed: {
        entry: [MOCK_ALBUM, MOCK_ALBUM_2],
      },
    };
    const formattedRecords = getParsedRecords(data);
    expect(formattedRecords[EXPECTED_ALBUM_RECORD.id]).toStrictEqual(
      EXPECTED_ALBUM_RECORD
    );
    expect(formattedRecords[EXPECTED_ALBUM_RECORD_2.id]).toStrictEqual(
      EXPECTED_ALBUM_RECORD_2
    );
  });
});
