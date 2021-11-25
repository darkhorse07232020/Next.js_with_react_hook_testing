import React from 'react';
import BallotCard from '../BallotCard';
import styles from './styles.module.css';

interface Props extends Partial<IBallotGroup> {
};

const BallotGroup: React.FC<Props> = ({ items = [], title = '' }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.cardGroup}>
        {items.length > 0 && items.map((item: IBallot, index: number) => (
          <BallotCard key={item.id} {...item} />
        ))}
      </div>
    </div >
  );
};

export default BallotGroup;
