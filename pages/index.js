import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import Image from 'next/image';
import { Footer } from '../components/Footer';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ryuto's portfoliosite</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main}>
				<div className={styles.titleBack}></div>
				<div className={styles.mainView}>
					<h1 className={styles.title}>Port Folio Site</h1>
				</div>
				<section className={styles.profile}>
					<div className={styles.sectionTitle}>
						<h2>Profile</h2>
						<p>
							現在21歳でWebエンジニアを目指し転職活動中です。
							<br /> Web制作もWeb開発もフロントエンドを主にしておりますが、
							<br />
							サーバーサイド・インフラと幅広くこなせるエンジニアになります。
						</p>
					</div>
					<article className={styles.profileContent}>
						<div className={styles.profileContainer}>
							<h3 className={styles.profileName}>池内隆人</h3>
							<p className={styles.profileJob}>~ Web Engineer ~</p>
							<div className={styles.profileText}>
								<p>趣味：お酒、古着、野球観戦、ドライブ</p>
								<p>現在：広島県に在住の21歳</p>
								<p>好きな言語：Javascript</p>
								<p>直近の目標：オープンカーを買う</p>
							</div>
						</div>
						<div className={styles.profileImage}>
							<Image
								src="/images/ryuto.png"
								alt="Picture of the author"
								width={240}
								height={240}
							/>
						</div>
					</article>
				</section>
			</main>

			<Footer />
		</div>
	);
}
