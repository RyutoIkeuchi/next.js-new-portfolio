import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head'
import { SectionTitle } from '../components/SectionTitle';
import { WorksGrid } from "../components/Works/WorksGrid";

export default function Works() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ryuto's portfoliosite</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={styles.main}>
				<SectionTitle
					title="Works"
					text="クラウドソーシングを活用してこれまで4つの案件をこなしてきました。"
					text2="その他にもReactを中心にアプリ開発をしています"
					text3="現在の目標はサーバーサイド言語を用いてアプリをつくることです。"
				/>

				<WorksGrid/>
			</main>
			<Footer />
		</div>
	);
}
