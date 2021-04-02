import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';

export default function Works() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<div className={styles.sectionTitle}>
					<h2>Works</h2>
				</div>
			</main>
		</div>
	);
}
