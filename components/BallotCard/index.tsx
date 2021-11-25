import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Button from '../Button'

interface Props extends Partial<IBallot> {
  active?: boolean;
}

const BallotCard: React.FC<Props> = ({ photoUrL = '', title = '', active = false }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.imageWrapper}>
        <Image src={photoUrL} alt='Avatar' loading="lazy" width={100} height={100} />
      </div>
      <Button>SelectButton</Button>
    </div>
  )
}

export default BallotCard
