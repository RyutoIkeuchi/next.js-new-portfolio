import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionTitle } from '../components/SectionTitle';
import { Profile } from '../components/Profile';

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
					<SectionTitle
						title="Profile"
						text="現在21歳でWebエンジニアを目指し転職活動中です。"
						text2="Web制作もWeb開発もフロントエンドを主にしておりますが、"
						text3="サーバーサイド・インフラと幅広くこなせるエンジニアになります。"
					/>
				<Profile/>
				</section>
			</main>

			<Footer />
		</div>
	);
}
