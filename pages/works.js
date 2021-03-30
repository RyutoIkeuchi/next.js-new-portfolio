import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';

export default function Works() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<div>Works</div>
			</main>
		</div>
	);
}
