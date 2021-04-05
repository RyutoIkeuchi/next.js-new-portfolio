import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head'
import { SectionTitle } from '../components/SectionTitle';

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
				<section className={styles.skillGrid}>
					<article className={styles.worksWrapper}>
						<a href="https://ryutoikeuchi.github.io/isara-/" target="_blank">
							<p>
								HTML&CSS,jQuery
								<br />
								<strong>isara模写</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a
							href="https://ryutoikeuchi.github.io/vuejs.todoapp/"
							target="_blank"
						>
							<p>
								Vue.js
								<br />
								<strong>Todoリスト</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a href="https://gifted-cori-a4da38.netlify.app" target="_blank">
							<p>
								React.js
								<br />
								<strong>写真検索アプリ</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a href="#" target="_blank">
							<p>
								comming
								<br />
								<strong>soon</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a href="#" target="_blank">
							<p>
								comming
								<br />
								<strong>soon</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a href="#" target="_blank">
							<p>
								comming
								<br />
								<strong>soon</strong>
							</p>
						</a>
					</article>
				</section>
			</main>
			<Footer />
		</div>
	);
}
