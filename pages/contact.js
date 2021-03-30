import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';

export default function Contact() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<div>Contact</div>
			</main>
		</div>
	);
}
