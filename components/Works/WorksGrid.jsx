import styles from '../../styles/Home.module.css';
import { WorksWrapper } from './WorksWrapper'

export const WorksGrid = ({data}) => {
  return (
		<section className={styles.gridStyle}>
			{data.map((peace) => (
				<WorksWrapper
					key={peace.id}
					url={peace.url}
					language={peace.language}
					title={peace.title}
				/>
			))}
		</section>
	);
}