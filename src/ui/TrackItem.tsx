import clsx from 'clsx';
import type { TrackListItemResourceType } from '../dal/api';
import styles from './TaskItem.module.css';

type Props = {
  isSelected: boolean;
  onSelect: (id: string) => void;
  track: TrackListItemResourceType;
};

export function TrackItem({ track, onSelect, isSelected }: Props) {
  const handleClick = () => onSelect?.(track.id);

  const taskClassName = clsx({ [styles.selected]: isSelected });

  return (
    <li className={taskClassName}>
      <div onClick={handleClick}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}
