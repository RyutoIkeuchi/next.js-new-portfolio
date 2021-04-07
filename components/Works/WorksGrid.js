import styles from '../../styles/Home.module.css';
import { WorksWrapper } from './WorksWrapper'
import {WorksPeace} from './WorksPeace'

export const WorksGrid = () => {
  return (
		<section className={styles.gridStyle}>
			{WorksPeace.map((peace) => (
				<WorksWrapper
					url={peace.url}
					language={peace.language}
					title={peace.title}
				/>
			))}
		</section>
	);
}