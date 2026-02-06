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

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
    {
      headers: {
        // 'api-key': '02523efa-8f4a-4f89-a654-4d9fcd15635a',
      },
    },
  ).then((res) => res.json());

  return promise; // можжно сразу сделать return fetch...
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
      headers: {
        // 'api-key': '02523efa-8f4a-4f89-a654-4d9fcd15635a',
      },
    },
  ).then((res) => res.json());

  return promise;
};
