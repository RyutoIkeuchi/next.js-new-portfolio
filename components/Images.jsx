import Image from 'next/image';
import styles from '../styles/Home.module.css';

export const Images = (props) => {
	return (
		<div className={styles.image}>
      <Image
        className={styles.imageBorder}
				src={props.url}
				alt={props.alt}
				width={240}
				height={240}
			/>
		</div>
	);
};
