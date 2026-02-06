import { useTrackDetail } from '../bll/useTrackDetail';
import styles from './TaskDetails.module.css'

type Props = {
  trackId: string | null;
};

export function TrackDetails({ trackId }: Props) {
  const { trackDetails } = useTrackDetail(trackId);
  return (
    <div className={styles.task}>
      <h2>Details</h2>
      {!trackDetails && !trackId && 'No track selected'}
      {!trackDetails && trackId && 'Loading...'}
      {trackDetails && trackId && trackDetails.id !== trackId && 'Loading...'}
      {trackDetails && (
        <div>
          <h3>Title {trackDetails.attributes.title}</h3>
          <h4>
            Lyrics: {trackDetails.attributes.lyrics ?? 'No lyrics available'}
          </h4>
        </div>
      )}
    </div>
  );
}
