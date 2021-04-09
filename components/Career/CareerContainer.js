import styles from './Career.module.css'
import { CareerContent } from './CareerContent';

export const CareerContainer = () => {
  return (
		<section className={styles.careerContainer}>
			<div className={styles.careerBorder}></div>
			<CareerContent />
		</section>
	);
}