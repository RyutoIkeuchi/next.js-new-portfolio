import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import { SectionTitle } from '../components/SectionTitle';
import { CareerContainer } from '../components/Career/CareerContainer';
import { CareerPeace } from '../components/Career/CareerPeace';

export default function Career({data}) {
	return (
		<div className={styles.container}>
			<Head>
				<title>ryuto's portfoliosite</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<SectionTitle
					title="Career"
					text="岡山(1999~2018)~広島(2018~2021)~東京(2021)~？？"
					text2="将来の夢は多くの人に影響を与えるサービスをつくること"
					text3="好きな漫画はキングダム・デスノート・テラフォーマーズ"
				/>
				<CareerContainer data={data} />
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const data = CareerPeace;
	return {
		props: {
			data,
		},
	};
}
