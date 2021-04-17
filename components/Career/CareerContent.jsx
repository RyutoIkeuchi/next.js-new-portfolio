import styles from './Career.module.css';
import { CareerWrapper } from './CareerWrapper';

export const CareerContent = ({data}) => {
	return (
		<div className={styles.careerContent}>
			{data.map((peace) => (
				<CareerWrapper
					key={peace.id}
					title={peace.title}
					text1={peace.text1}
					text2={peace.text2}
					text3={peace.text3}
					url={peace.url}
					alt={peace.alt}
				/>
			))}
		</div>
	);
};
