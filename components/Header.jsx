import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<Link href="/">
					<a className={styles.headerPortfolio}>Portfolio</a>
				</Link>
			</div>
			<div>
				<Link href="/career">
					<a className={styles.headerLink}>Career</a>
				</Link>
				<Link href="/skill">
					<a className={styles.headerLink}>Skill</a>
				</Link>
				<Link href="/works">
					<a className={styles.headerLink}>Works</a>
				</Link>
				<Link href="/contact">
					<a className={styles.headerLink}>Contact</a>
				</Link>
			</div>
		</header>
	);
};
