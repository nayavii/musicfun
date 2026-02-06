import { TrackDetails } from './ui/TrackDetails';
import { TracksList } from './ui/TracksList';
import { useTrackSelection } from './bll/useTrackSelection';
import styles from './MainPage.module.css';

export function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id);
  };

  return (
    <div>
      <div className={styles.container}>
        <TracksList
          onTrackSelect={handleTrackSelect}
          selectedTrackId={trackId}
        />
        <TrackDetails trackId={trackId} />
      </div>
    </div>
  );
}
