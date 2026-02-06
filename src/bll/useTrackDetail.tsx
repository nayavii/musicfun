import { useEffect, useState } from 'react';
import { getTrack, type TrackDetailsResourceType } from '../dal/api';

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] =
    useState<TrackDetailsResourceType | null>(null);

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null);
      return;
    }

    const promise = getTrack(trackId);
    promise.then((data) => setTrackDetails(data.data));
  }, [trackId]);

  return { trackDetails };
}
