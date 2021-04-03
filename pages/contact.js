import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'

export default function Contact() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ryuto's portfoliosite</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className={styles.main}>
				<div className={styles.sectionTitle}>
					<h2>Contact</h2>
					<p>
						閲覧いただきありがとうございます！
						<br />
						SNSも積極的に行っておりますのでぜひフォローお待ちしております。
						<br />
						連絡がございましたらメールもしくはSNSのDMよりお願いします。
					</p>
				</div>
				<section className={styles.contactPage}>
					<div className={styles.contactSns}>
						<a
							href="https://www.instagram.com/ryuto_ma2d/?hl=ja"
							target="_blank"
						>
							<FontAwesomeIcon
								icon={['fab', 'instagram-square']}
								className={styles.contactfontIcon}
								color="#F73D6D"
							/>
						</a>
						<a href="https://twitter.com/home" target="_blank">
							<FontAwesomeIcon
								icon={['fab', 'twitter-square']}
								className={styles.contactfontIcon}
								color="#1FA1F1"
							/>
						</a>
						<a href="mailto:ryu.i7133&#64;icloud.com" target="_blank">
							<FontAwesomeIcon
								icon={['fas', 'envelope-square']}
								className={styles.contactfontIcon}
								color="#0152F6"
							/>
						</a>
						<a href="https://github.com/RyutoIkeuchi" target="_blank">
							<FontAwesomeIcon
								icon={['fab', 'github-square']}
								className={styles.contactfontIcon}
								color="#171515"
							/>
						</a>{' '}
						
					</div>
					<div className={styles.contactUrl}>
						<p>
							wantedly:{' '}
							<a
								href="https://www.wantedly.com/id/ryuto_ikeuchi"
								target="_blank"
							>
								https://www.wantedly.com/id/ryuto_ikeuchi
							</a>
						</p>
						<p>
							Qiita:{' '}
							<a href="https://qiita.com/ryuto-ikeuchi" target="_blank">
								https://qiita.com/ryuto-ikeuchi
							</a>
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
