import { useEffect, useState } from 'react';
import { getTracks, type TrackListItemResourceType } from '../dal/api';

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemResourceType> | null>(
    null,
  );

  useEffect(() => {
    getTracks().then((data) => setTracks(data.data));
  }, []);

  return { tracks };
}
