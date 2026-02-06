import { TrackItem } from './TrackItem';
import { useTracks } from '../bll/useTracks';

type Props = {
  onTrackSelect: (id: string | null) => void;
  selectedTrackId: string | null;
};



export function TracksList({ onTrackSelect, selectedTrackId }: Props) {
  const {tracks} = useTracks()

  if (tracks === null) {
    return <span>Loading...</span>;
  }

  if (tracks.length === 0) {
    return <span>No tracks available</span>;
  }

  const handleResetClick = () => {
    onTrackSelect?.(null);
  };

  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId);
  };

  return (
    <div>
      <button onClick={handleResetClick}>Reset selection</button>
      <ul>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              onSelect={handleClick}
              isSelected={track.id === selectedTrackId}
            />
          );
        })}
      </ul>
    </div>
  );
}
