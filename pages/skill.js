import styles from '../styles/Home.module.css';
import {Header} from '../components/Header'

export default function Skill() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<div className={styles.sectionTitle}>
					<h2>Skill</h2>
				</div>
			</main>
		</div>
	);
}
