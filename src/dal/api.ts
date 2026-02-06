type TrackDetailsAttributes = {
  title: string;
  lyrics: string | null;
};

export type TrackDetailsResourceType = {
  id: string;
  attributes: TrackDetailsAttributes;
};

export type GetTrackDetailsOutput = {
  data: TrackDetailsResourceType;
};

const preparedHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;

  return {
    'api-key': apiKey,
  };
};

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
    {
      headers: preparedHeaders(),
    },
  ).then((res) => res.json());

  return promise;
};

type TrackAttachment = {
  url: string;
};

export type TrackListItemResourceType = {
  id: string;
  attributes: {
    title: string;
    attachments: Array<TrackAttachment>;
  };
};

type GetTrackListOutput = {
  data: Array<TrackListItemResourceType>;
};

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
    {
      headers: preparedHeaders(),
    },
  ).then((res) => res.json());

  return promise;
};
