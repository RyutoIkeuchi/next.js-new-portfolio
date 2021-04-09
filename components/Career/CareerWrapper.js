import styles from './Career.module.css'
import { Images } from '../Images';
import { CareerName } from './CareerName';

export const CareerWrapper = (props) => {
	return (
		<article className={styles.careerWrapper}>
			<CareerName
				title={props.title}
				text1={props.text1}
				text2={props.text2}
				text3={props.text3}
			/>
			<Images url={props.url} alt={props.alt} />
		</article>
	);
};
