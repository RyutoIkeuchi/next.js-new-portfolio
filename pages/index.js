import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header'
import Image from 'next/image'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main}>
				<div className={styles.titleBack}></div>
				<div className={styles.mainView}>
					<h1 className={styles.title}>Port Folio Site</h1>
				</div>
				<div className={styles.profile}>
					<div>
						<h3 className={styles.profileName}>池内隆人</h3>
						<p className={styles.profileJob}>~ Web Engineer ~</p>
						<div className={styles.profileText}>
							<p>
								趣味：お酒、古着、野球観戦、ドライブ
								<br />
								現在広島県に在住の21歳です。
								<br />
								小さい頃からものづくりが好きで
								<br />
								自分のつくったサービスを通してたくさんの人を
								<br />
								幸せにしたいと思いエンジニアを目指しています。
							</p>
						</div>
					</div>
					<Image
						src="/images/ryuto.jpg"
						alt="Picture of the author"
						width={300}
						height={250}
					/>
				</div>
			</main>

			<footer className={styles.footer}>©️ 2021 ryutoikeuchi</footer>
		</div>
	);
}
