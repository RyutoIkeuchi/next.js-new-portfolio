import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer'
import Head from 'next/head'
import { SectionTitle } from '../components/SectionTitle';
import { ContactPage } from '../components/Contact/ContactPage';

export default function Contact() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ryuto's portfoliosite</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<SectionTitle
					title="Contact"
					text="閲覧いただきありがとうございます！"
					text2="SNSも積極的に行っておりますので是非フォローお待ちしております"
					text3="連絡がございましたら、メールもしくはSNSのDMよりお願いします。"
				/>
			<ContactPage/>
			</main>
			<Footer />
		</div>
	);
}
